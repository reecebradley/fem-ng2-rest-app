import {Component, Input, Output, EventEmitter} from 'angular2/core';
import { FORM_DIRECTIVES, FormBuilder, Validators } from 'angular2/common';
import {Widget} from "./widget.model";

@Component({
    selector: 'widget-details',
    template: `
  <div class="widget-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedWidget.id">Editing {{originalName}}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedWidget.id">Create New Widget</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form #widgetForm="ngForm" (ngSubmit)="submit()" novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Widget Name</label>
            <input [(ngModel)]="selectedWidget.name"
              ngControl="widgetName"
              placeholder="Enter a name"
              class="mdl-textfield__input" type="text">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Widget Price</label>
            <input [(ngModel)]="selectedWidget.price"
              placeholder="Enter a price"
              ngControl="widgetPrice"
              class="mdl-textfield__input" type="text">
          </div>
          <div class="mdl-cardactions">
            <button type="submit"
            [disabled]="!widgetForm.valid"
            class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
          </div>
      </form>
    </div>
  </div>
   `
})
export class WidgetDetails {
  originalName: string;
  selectedWidget: Widget = {};
  @Output() saved = new EventEmitter();
  @Output() create = new EventEmitter();
  @Output() update = new EventEmitter();
  
  @Input() set widget(value: Widget){
    if (value) this.originalName = value.name;
    this.selectedWidget = Object.assign({}, value);
  }
  constructor(private _builder: FormBuilder) {}
  
  submit() {
    const method = this.selectedWidget.id ? this.update : this.create;
    method.emit(this.selectedWidget);
  }
}
