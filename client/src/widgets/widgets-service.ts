import {Injectable} from 'angular2/core';
import {Http} from  'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WidgetsService {
  widgets = [];
  private url = 'http://localhost:3000/widgets';
  
  constructor(private _http: Http){}
  
  fetchWidgets() {
    return this._http.get(this.url)
    .map(res => res.json());
  }
  
  createOne(widget) {
    return this._http.post(this.url, JSON.stringify(widget))
    .map(res => res.json());
  }
}
