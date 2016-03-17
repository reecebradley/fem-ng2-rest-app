import {Injectable} from 'angular2/core';

@Injectable()
export class WidgetsService {
  widgets = [1,2,3,4,5].map(i => ({
    id: i,
    name: `Widget${i}`,
    description: `I am widget ${i}`
  }));
}
