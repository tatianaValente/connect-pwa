import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DowntimeRoutes } from "./downtime.routing";

// Created Components
import { EventAddEditComponent } from "./events/event-add-edit/event-add-edit.component";
import { EventListComponent } from './events/event-list/event-list.component';
import { EventFilterComponent } from './events/event-filter/event-filter.component';
import { ReasonsFilterComponent } from './reasons-filter/reasons-filter.component';
import { ReasonFilterComponent } from './reason-filter/reason-filter.component';
import { ReasonListComponent } from './reasons/reason-list/reason-list.component';
import { ReasonAddEditComponent } from './reasons/reason-add-edit/reason-add-edit.component';

@NgModule({
  declarations: [EventAddEditComponent, EventListComponent, EventFilterComponent, ReasonsFilterComponent, ReasonFilterComponent, ReasonListComponent, ReasonAddEditComponent],
  imports: [CommonModule, RouterModule.forChild(DowntimeRoutes)]
})
export class DowntimeModule {}
