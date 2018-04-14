import {BackgammonStateManager} from './backgammonStateManager';
import {Players} from './players';
import {
  checkIfOffBoardState, getHighestCheckerSpikeNumber, getSpikeDirection, isValidSpike,
  rollDices
} from './helpers/backgammonUtils';
import {deepCopy} from '../../utils/jsUtils';
import {Observable} from 'rxjs/Observable';
import {BACKGAMMON_CONSTANTS} from './helpers/backgammonConstants';

export class BackgammonComputer {
  private playerType;
  private spikeDirection;
  private gameSpikes;
  private bar;
  private checkers;
  private outsideBoard;

  constructor(playerType, gameSpikes, checkers, bar, outsideBoard) {
    BackgammonStateManager.onNextPlayerState(this.onNextPlayerState);
    this.playerType = playerType;
    this.spikeDirection = getSpikeDirection(playerType, Players);
    this.gameSpikes = gameSpikes;
    this.bar = bar;
    this.checkers = checkers;
    this.outsideBoard = outsideBoard;
  }

  private onNextPlayerState = () => {
    setTimeout(() => {
      const {gameState} = BackgammonStateManager;
      if (this.playerType === Players.getCurrentPlayerType()) {
        gameState.dices = rollDices();
        gameState.currentState = this.playerType; // player type = 3, current state = 2, for showing the dices - currentState++;
        setTimeout(() => {
          BackgammonStateManager.notifyComputerMove(gameState); // render dice.
          setTimeout(this.computerYouCanPlay, 1500);
        }, 1000);
      }
    });
  }

  private computerYouCanPlay = () => {
    const allStatesTable = {gameStates: {}, recursiveStates: {}};
    const nextStatesArrays: any = {0: [], 1: [], 2: [], 3: [], 4: []};
    const {gameState} = BackgammonStateManager;
    let currentSpike = this.playerType === Players.playersMap.Black ? 0 : 23;
    const spikes = [];

    this.gameSpikes.forEach(spike => {
      const newSpike = {
        checkers: spike.checkers.map(checker => ({
          currentSpike: checker.currentSpike,
          isOffBoard: checker.isOffBoard,
          type: checker.type
        }))
      };
      spikes.push(newSpike);
    });

    if (this.checkIfHasOutSideCheckers(gameState)) {
      this.getAllPossibleOutSideCheckerMoves(gameState, nextStatesArrays, allStatesTable, spikes);
      // check if there is a different dices and only one checker so there are 2 possible flows.
      if (this.bar.checkers[Players.playersNamesMap[this.playerType]].length < 2 && gameState.dices.length === 2) {
        gameState.dices = [gameState.dices[1], gameState.dices[0]];
        this.getAllPossibleOutSideCheckerMoves(gameState, nextStatesArrays, allStatesTable, spikes);
      }
    } else {
      if (checkIfOffBoardState(this.checkers, this.playerType, Players.playersMap)) {
        currentSpike = this.playerType === Players.playersMap.Black ? 18 : 5;
        this.getAllPossibleOffBoardMoves(gameState, nextStatesArrays, currentSpike, allStatesTable, spikes);
      } else {
        this.getAllPossibleMoves(gameState, nextStatesArrays, currentSpike, allStatesTable, spikes);
      }
    }

    const newState = this.getBestMove(nextStatesArrays, gameState);
    this.animateMoves(newState.movesInfo).subscribe(() => {

      newState.movesInfo = [];
      delete newState.movesInfo;
      BackgammonStateManager.notifyComputerMove(newState); // render dices.
    });
  };

  /** 3 recursive calls:
   *  1. (same state,next spike)
   *  2. (new state ,same spike)
   *  1. (new state, next spike)**/
  private getAllPossibleOutSideCheckerMoves(gameState, nextStatesArrays, allStatesTable, spikes) {
    const homeSpikeIndex = this.playerType === Players.playersMap.White ? 24 : -1;
    let dice, possibleSpikeToMoveIndex, currCheckers, currentSpike;
    const newState = deepCopy(gameState); // todo - copy only if there is a move.
    const newSpikes = deepCopy(spikes);
    newState.movesInfo = [];
    const deicesLength = newState.dices.length;

    for (let i = 0; i < deicesLength; i++) {
      dice = newState.dices.shift();
      possibleSpikeToMoveIndex =  this.spikeDirection * dice + homeSpikeIndex ;
      currCheckers = spikes[possibleSpikeToMoveIndex].checkers || [];
      if (currCheckers.length <= 1 || (currCheckers[0].type === this.playerType)) {
        let selectedCheckerIndex;
        const offsetType = this.playerType === Players.playersMap.Black ? 1 : 16;
        const {WHITE_BAR_INDEX, BLACK_BAR_INDEX} = BACKGAMMON_CONSTANTS;
        const outsideCheckerIndex = this.playerType === Players.playersMap.Black ? BLACK_BAR_INDEX : WHITE_BAR_INDEX;

        for (let j = offsetType; j < offsetType + 15; j++) {
          if (newState.checkers[j].currentSpike === outsideCheckerIndex) {
            selectedCheckerIndex = j;
            break;
          }
        }

        const selectedChecker = {currentSpike: possibleSpikeToMoveIndex, isOffBoard: false, type: this.playerType};
        newSpikes[possibleSpikeToMoveIndex].checkers.push(selectedChecker);
        newState.checkers[selectedCheckerIndex].currentSpike = possibleSpikeToMoveIndex;

        const moveInfo = {fromSpike: outsideCheckerIndex, toSpike: possibleSpikeToMoveIndex};
        newState.movesInfo.push(moveInfo);

        if (!this.checkIfHasOutSideCheckers(newState)) {
          if (checkIfOffBoardState(this.checkers, this.playerType, Players.playersMap)) {
            currentSpike = this.playerType === Players.playersMap.Black ? 18 : 5;
            this.getAllPossibleOffBoardMoves(newState, nextStatesArrays, currentSpike, allStatesTable, newSpikes);
          } else {
            currentSpike = this.playerType === Players.playersMap.Black ? 0 : 23;
            this.getAllPossibleMoves(newState, nextStatesArrays, currentSpike, allStatesTable, newSpikes);
          }
          break; // important - once there is no outside checkers must return to a regular game.
        }
      }
    }
    const encodedGameState = this.encodeGameState(newState);
    if (!allStatesTable.gameStates[encodedGameState]) { // still there are outside checkers.
      nextStatesArrays[newState.dices.length].push(newState);
      allStatesTable.gameStates[encodedGameState] = true;
    }
  }

  /** 3 recursive calls:
   *  1. (same state,next spike)
   *  2. (new state ,same spike)
   *  1. (new state, next spike)**/
  private getAllPossibleMoves(gameState, nextStatesArrays, currentSpike, allStatesTable, spikes) {
    const encodedGameState = this.encodeGameState(gameState);

    const stateKey = `${encodedGameState}, currentSpike: ${ currentSpike}`;
    if (allStatesTable.recursiveStates[stateKey]) {
      return;
    } else {
      allStatesTable.recursiveStates[stateKey] = true;
    }

    if (gameState.dices.length <= 0) {
      if (!allStatesTable.gameStates[encodedGameState]) {
        nextStatesArrays[0].push(gameState);
        allStatesTable.gameStates[encodedGameState] = true;
      }
      return;
    }

    if (currentSpike > 23 || currentSpike < 0 || !isValidSpike(currentSpike)) {
      return;
    }

    const nextSpikeToCheck = this.spikeDirection + currentSpike;
    let dice;
    for (let i = 0; i < gameState.dices.length; i++) {
      const newState1 = deepCopy(gameState); // todo - copy only if there is a move.
      const newState2 = deepCopy(gameState);
      const newSpikes = deepCopy(spikes);
      let possibleSpikeToMoveIndex;
      newState1.movesInfo = newState1.movesInfo || [];
      newState2.movesInfo = newState2.movesInfo || [];
      dice = gameState.dices[i];

      this.getAllPossibleMoves(gameState, nextStatesArrays, nextSpikeToCheck, allStatesTable, spikes); // 1.

      possibleSpikeToMoveIndex = currentSpike + dice * this.spikeDirection;

      const currSpikeCheckers = spikes[currentSpike].checkers || [];
      if (isValidSpike(possibleSpikeToMoveIndex) && currSpikeCheckers.length && currSpikeCheckers[0].type === this.playerType) {
        const checkersArr = this.gameSpikes[possibleSpikeToMoveIndex].checkers;
        if ((checkersArr.length <= 1 || checkersArr[0].type === this.playerType)) {
          let selectedCheckerIndex;
          const offsetType = this.playerType === Players.playersMap.Black ? 1 : 16;
          for (let j = offsetType; j < offsetType + 15; j++) {
            if (gameState.checkers[j].currentSpike === currentSpike) {
              selectedCheckerIndex = j;
              break;
            }
          }

          const selectedChecker = newSpikes[currentSpike].checkers.pop();
          selectedChecker.currentSpike = possibleSpikeToMoveIndex;
          newSpikes[possibleSpikeToMoveIndex].checkers.push(selectedChecker);
          newState1.dices.splice(gameState.dices.indexOf(dice), 1);
          newState2.dices.splice(gameState.dices.indexOf(dice), 1);
          newState1.checkers[selectedCheckerIndex].currentSpike = possibleSpikeToMoveIndex;
          newState2.checkers[selectedCheckerIndex].currentSpike = possibleSpikeToMoveIndex;
          const moveInfo = {fromSpike: currentSpike, toSpike: possibleSpikeToMoveIndex};
          newState1.movesInfo.push(moveInfo);
          newState2.movesInfo.push(moveInfo);
          this.getAllPossibleMoves(newState1, nextStatesArrays, currentSpike, allStatesTable, newSpikes); // 2
          this.getAllPossibleMoves(newState2, nextStatesArrays, nextSpikeToCheck, allStatesTable, newSpikes); // 3
        }
      } else { //no move for current dice
        const dicesLength = gameState.dices.length;
        if (!allStatesTable.gameStates[encodedGameState]) {
          nextStatesArrays[dicesLength].push(gameState);
          allStatesTable.gameStates[encodedGameState] = true;
        }
      }
    }
  }

  /** 3 recursive calls:
   *  1. (same state,next spike)
   *  2. (new state ,same spike)
   *  1. (new state, next spike)**/
  private getAllPossibleOffBoardMoves(gameState, nextStatesArrays, currentSpike, allStatesTable, spikes) {
    const encodedGameState = this.encodeGameState(gameState);

    const stateKey = `${encodedGameState}, currentSpike: ${ currentSpike}`;
    if (allStatesTable.recursiveStates[stateKey]) {
      return;
    } else {
      allStatesTable.recursiveStates[stateKey] = true;
    }

    if (gameState.dices.length <= 0 || this.isWon(gameState)) {
      if (!allStatesTable.gameStates[encodedGameState]) {
        nextStatesArrays[0].push(gameState);
        allStatesTable.gameStates[encodedGameState] = true;
      }
      return;
    }

    if (currentSpike > 23 || currentSpike < 0 || !isValidSpike(currentSpike)) {
      return;
    }

    const nextSpikeToCheck = this.spikeDirection + currentSpike;
    let dice;
    for (let i = 0; i < gameState.dices.length; i++) {
      const newState1 = deepCopy(gameState); // todo - copy only if there is a move.
      const newState2 = deepCopy(gameState);
      const newSpikes = deepCopy(spikes);
      let possibleSpikeToMoveIndex;
      newState1.movesInfo = newState1.movesInfo || [];
      newState2.movesInfo = newState2.movesInfo || [];
      dice = gameState.dices[i];

      this.getAllPossibleOffBoardMoves(gameState, nextStatesArrays, nextSpikeToCheck, allStatesTable, spikes); // 1.

      possibleSpikeToMoveIndex = currentSpike + dice * this.spikeDirection;

      const currSpikeCheckers = spikes[currentSpike].checkers || [];

      if (currSpikeCheckers.length && currSpikeCheckers[0].type === this.playerType) {
        const checkerToCheck = currSpikeCheckers[0];
        let newMoveFound = false;
        const checkerHomeSpike = this.playerType === Players.playersMap.White ? currentSpike + 1 : 24 - currentSpike;
        const highestCheckerSpikeNumber = getHighestCheckerSpikeNumber(checkerToCheck, Players.playersMap, spikes);

        const checkersArr = this.gameSpikes[possibleSpikeToMoveIndex] && this.gameSpikes[possibleSpikeToMoveIndex].checkers;

        if (checkerHomeSpike === dice || (checkerHomeSpike < dice && highestCheckerSpikeNumber === checkerHomeSpike)) {
          // offBoard checker
          possibleSpikeToMoveIndex = null;
          newMoveFound = true;
        }

        if (checkerHomeSpike > dice && (checkersArr.length <= 1 || checkersArr[0].type === this.playerType)) {
          // regular move
          newMoveFound = true;
        }

        if (newMoveFound === true) {
          let selectedCheckerIndex;
          const offsetType = this.playerType === Players.playersMap.Black ? 1 : 16;
          for (let j = offsetType; j < offsetType + 15; j++) {
            if (gameState.checkers[j].currentSpike === currentSpike) {
              selectedCheckerIndex = j;
              break;
            }
          }

          const selectedChecker = newSpikes[currentSpike].checkers.pop();
          selectedChecker.currentSpike = possibleSpikeToMoveIndex;

          if (possibleSpikeToMoveIndex !== null) {
            newSpikes[possibleSpikeToMoveIndex].checkers.push(selectedChecker);
          } else {
            newState1.checkers[selectedCheckerIndex].isOffBoard = true;
            newState2.checkers[selectedCheckerIndex].isOffBoard = true;
            selectedChecker.isOffBoard = true;
          }
          newState1.dices.splice(gameState.dices.indexOf(dice), 1);
          newState2.dices.splice(gameState.dices.indexOf(dice), 1);
          newState1.checkers[selectedCheckerIndex].currentSpike = possibleSpikeToMoveIndex;
          newState2.checkers[selectedCheckerIndex].currentSpike = possibleSpikeToMoveIndex;
          const moveInfo = {fromSpike: currentSpike, toSpike: possibleSpikeToMoveIndex};
          newState1.movesInfo.push(moveInfo);
          newState2.movesInfo.push(moveInfo);
          this.getAllPossibleOffBoardMoves(newState1, nextStatesArrays, currentSpike, allStatesTable, newSpikes); // 2
          this.getAllPossibleOffBoardMoves(newState2, nextStatesArrays, nextSpikeToCheck, allStatesTable, newSpikes); // 3
        }
      } else { //no move for current dice
        const dicesLength = gameState.dices.length;
        if (!allStatesTable.gameStates[encodedGameState]) {
          nextStatesArrays[dicesLength].push(gameState);
          allStatesTable.gameStates[encodedGameState] = true;
        }
      }
    }
  }

  private encodeGameState(gameSate) {
    let encodedState = 'checkers:';
    Object.values(gameSate.checkers).forEach((checker, index) => encodedState += `${index}_${checker.currentSpike}, `);
    encodedState += ' dices:';
    gameSate.dices.forEach((dice, index) => encodedState += `${index}_${dice}, `);
    return encodedState;
  }

  private getBestMove(gameStates, gameState) {
    const statesArr = gameStates[0] || gameStates[1] || gameStates[2] || gameStates[3];
    const newState = statesArr[Math.floor(Math.random() * statesArr.length)];
    // statesArr.forEach(state => this.getStateDiffInfo(newState, gameState, spikes)};
    this.updateSelectedState(newState);

    newState.currentState = (newState.currentState + 1 ) % 4;
    return newState;
  }

  private getStateDiffInfo(newState, gameState, spikes) {
    return {
      exposedCheckers: [],
      eatenOpponentsCheckers: [],
      closedSpikes: [],
      selectedCheckers: [],
      winningsCheckers: []
    };
  }

  private updateSelectedState(newState) {
    const spikes = this.gameSpikes;

    newState.movesInfo.forEach(move => {
      const {toSpike} = move;

      if (!toSpike) { // offboard
        return;
      }
      if (spikes[toSpike].checkers.length && spikes[toSpike].checkers[0].type !== this.playerType) { // todo - duplication
        const eatenChecker = spikes[toSpike].checkers[0];
        const eatenCheckerId = eatenChecker.getCheckerId();

        if (eatenChecker.type === Players.playersMap.Black) {
          newState.checkers[eatenCheckerId].currentSpike = BACKGAMMON_CONSTANTS.BLACK_BAR_INDEX;
        } else {
          newState.checkers[eatenCheckerId].currentSpike = BACKGAMMON_CONSTANTS.WHITE_BAR_INDEX;
        }
      }
    });
  }

  private animateMoves(movesArr) {
    const moveIndex = 0;
    return Observable.create(observer => {
      return this.animateMovesRec(movesArr, moveIndex, observer);
    });
  }

  private animateMovesRec = (movesArr, moveIndex, observer) => {
    if (moveIndex >= movesArr.length) {
      observer.next();
      observer.complete();
      return;
    }

    const {WHITE_BAR_INDEX, BLACK_BAR_INDEX} = BACKGAMMON_CONSTANTS;
    const {fromSpike, toSpike} = movesArr[moveIndex];
    let selectedChecker;
    if (fromSpike === WHITE_BAR_INDEX || fromSpike === BLACK_BAR_INDEX) {
      selectedChecker = this.bar.checkers[Players.playersNamesMap[this.playerType]].pop();
    } else {
      selectedChecker = this.gameSpikes[fromSpike].checkers.pop();
    }
    let eatenChecker, xTarget, yTarget, targetPosition;


    if (toSpike && this.gameSpikes[toSpike].checkers.length && this.gameSpikes[toSpike].checkers[0].type !== this.playerType) { // todo - duplication
      eatenChecker = this.gameSpikes[toSpike].checkers.pop(); // todo - deep copy ?
      if (eatenChecker.type === Players.playersMap.Black) {
        eatenChecker.currentSpike = BACKGAMMON_CONSTANTS.BLACK_BAR_INDEX;
      } else {
        eatenChecker.currentSpike = BACKGAMMON_CONSTANTS.WHITE_BAR_INDEX;
      }
    }

    if (toSpike) {
      targetPosition = this.gameSpikes[toSpike].getNextCheckerPosition();
      this.gameSpikes[toSpike].checkers.push(selectedChecker);
      this.gameSpikes[toSpike].setShowValidMove(true);
    } else {
      targetPosition = this.outsideBoard.getNextCheckerPosition(this.playerType);
      this.outsideBoard.showArrow[Players.playersNamesMap[this.playerType]] = true;
      this.outsideBoard.checkers[Players.playersNamesMap[this.playerType]].push(selectedChecker);
    }

    const {x, y} = targetPosition;
    xTarget = x;
    yTarget = y;

    const xDirection = (xTarget - selectedChecker.x) > 0 ? 1 : -1;
    const yDirection = (yTarget - selectedChecker.y) > 0 ? 1 : -1;
    let xRunner = selectedChecker.x;
    let yRunner = selectedChecker.y;

    const interval = setInterval(() => {
      const isXCloseEnough = Math.abs(xRunner - xTarget) < 13;
      const isYCloseEnough = Math.abs(yRunner - yTarget) < 13;

      if (!isXCloseEnough) {
        xRunner += (Math.floor(Math.random() * 3 + 9)) * xDirection;
      } else {
        xRunner = xTarget;
      }

      if (!isYCloseEnough) {
        yRunner += (Math.floor(Math.random() * 3 + 9)) * yDirection;
      } else {
        yRunner = yTarget;
      }

      selectedChecker.setPosition({x: xRunner, y: yRunner});
      BackgammonStateManager.notifyRedraw();

      if (isXCloseEnough && isYCloseEnough) {
        clearInterval(interval);
        selectedChecker.setPosition({x: xTarget, y: yTarget});
        if (eatenChecker) {
          eatenChecker.setPosition(this.bar.getNextCheckerPosition(eatenChecker));
        }
        if (toSpike) {
          this.gameSpikes[toSpike].setShowValidMove(false);
        } else {
          this.outsideBoard.showArrow[Players.playersNamesMap[this.playerType]] = false;
        }
        setTimeout(() => this.animateMovesRec(movesArr, moveIndex + 1, observer));
      }
    }, 45);
  }

  private checkIfHasOutSideCheckers(gameState) {
    const {BLACK_BAR_INDEX, WHITE_BAR_INDEX} = BACKGAMMON_CONSTANTS;
    const outsideCheckerIndex = this.playerType === Players.playersMap.Black ? BLACK_BAR_INDEX : WHITE_BAR_INDEX;
    const indexOffset = this.playerType === Players.playersMap.Black ? 1 : 16;
    let hasOutSideChecker = false;
    for (let i = indexOffset; i < indexOffset + 15; i++) {
      if (gameState.checkers[i].currentSpike === outsideCheckerIndex) {
        hasOutSideChecker = true;
      }
    }
    return hasOutSideChecker;
  }

  private isWon(gameState) {
    const indexOffset = this.playerType === Players.playersMap.Black ? 1 : 16;
    let isWon = true;
    for (let i = indexOffset; i < indexOffset + 15; i++) {
      if (!gameState.checkers[i].isOffBoard) {
        isWon = false;
      }
    }
    return isWon;
  }
}
