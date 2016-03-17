import {Injectable} from 'angular2/core';

@Injectable()
export class WidgetsService {
  widgets = [{name: 'Widget 01', description: 'This is a widget'}];
}
