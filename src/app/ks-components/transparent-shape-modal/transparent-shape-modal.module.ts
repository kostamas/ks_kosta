import {NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import {TransparentShapeModalComponent} from './transparent-shape-modal.component';

import {TransparentShapeModalService} from './services/transparent-shape-modal.service';

@NgModule({
  imports: [
    MatDialogModule,
    CommonModule
  ],
  declarations: [
    TransparentShapeModalComponent
  ],
  entryComponents: [
    TransparentShapeModalComponent
  ],
  exports: [
    TransparentShapeModalComponent
  ],
  providers: [TransparentShapeModalService]
})
export class TransparentShapeModalModule {
}