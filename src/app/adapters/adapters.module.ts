import {NgModule} from '@angular/core';
import {SchedulerModule} from '../ks-components/ks-scheduler/scheduler.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatProgressBarModule} from '@angular/material';
import {MatIconModule} from '@angular/material';

import {SchedulingMockData} from './scheduler-adapter/schedulingMockData';

import {SchedulerAdapterComponent} from './scheduler-adapter/scheduler-adapter.component';
import {SimpleTimeSlotComponent} from './scheduler-adapter/customTimeSlots/simple-time-slot/simple-time-slot.component';
import {AdvancedComponentComponent} from './scheduler-adapter/customTimeSlots/advanced-component/advanced-component.component';
import {TimeSlotDetailsModalComponent} from './scheduler-adapter/customTimeSlots/advanced-component/time-slot-details-modal/time-slot-details-modal.component';
import {ChatAdapterComponent} from './chat-adapter/chat-adapter.component';
import {KsChat} from '../ks-components/ks-chat/ks-chat.module';
import {ChatMock} from './chat-adapter/chat-mock';
import {ChatService} from "../ks-components/ks-chat/services/chat.service";

@NgModule({
  imports: [
    SchedulerModule,
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    KsChat,
  ],
  declarations: [
    SchedulerAdapterComponent,
    SimpleTimeSlotComponent,
    AdvancedComponentComponent,
    TimeSlotDetailsModalComponent,
    ChatAdapterComponent
  ],
  exports: [],
  entryComponents: [
    SimpleTimeSlotComponent,
    AdvancedComponentComponent,
    TimeSlotDetailsModalComponent
  ],
  providers: [
    SchedulingMockData,
    {
      provide: ChatService,
      useFactory: function(){ return new ChatService() }
    },
  ],
})
export class AdaptersModulesModule {
}

