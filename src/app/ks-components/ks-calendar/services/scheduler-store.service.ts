import {Injectable} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {Subject} from 'rxjs/Subject';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SchedulerStoreService {
  private availability$ = new Subject<number>();
  private schedules$ = new Subject<number>();

  private timeSlotClick$ = new Subject<any>();
  private updateTimeSlots$ = new Subject<any>();

  constructor() {
  }

  public notifyAvailability(storeType: number) {
    this.availability$.next(storeType);
  }

  public onAvailability(cb) {
    return this.availability$.subscribe(cb);
  }

  public notifySchedules(storeType) {
    return this.schedules$.next(storeType);
  }

  public onSchedules(cb) {
    return this.schedules$.subscribe(cb);
  }

  public notifyTimeSlot(timeSlotType: number, date: Date, data: any) {
    this.timeSlotClick$.next({timeSlotType, date, data});
  }

  public onTimeSlot(cb) {
    return this.timeSlotClick$.subscribe(cb);
  }

  public notifyUpdateTimeSlot(data){
    this.updateTimeSlots$.next(data);
  }

  public onUpdateTimeSlot(cb) {
    return this.updateTimeSlots$.subscribe(cb);
  }
}


/*************************************** constants *******************************/

export const SCHEDULER_STORE_TYPE = {
  GET: 1,
  SET: 2
};

export const TIME_SLOT_STORE_TYPE = {
  AVAILABILITY: 1,
  CUSTOM: 2
};
