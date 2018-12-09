import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public loaderClass;

  @Input() text?;
  @Input() type?;
  @Input() shape?;

  ngOnInit() {
    this.initLoaderClass();
  }

  initLoaderClass() {
    this.loaderClass = ' ';

    switch (this.type) {
      case 'container':
        this.loaderClass += ' container-loader';
        break;
      default:
        this.loaderClass += ' page-loader'
    }

    switch (this.shape) {
      case 'circle':
        this.loaderClass += ' circle-loader';
        break;
      default:
        this.loaderClass += ' rectangle-loader';
    }
  }
}
