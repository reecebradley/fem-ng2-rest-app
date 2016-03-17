import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {ItemsService, Item} from './items/items.service';
import {ItemsList} from './items/items-list.component';
import {ItemDetail} from './items/item-detail.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="mdl-cell mdl-cell--6-col">
    <items-list [items]="items"
      (selected)="selectItem($event)" (deleted)="deleteItem($event)">
    </items-list>
  </div>
  <div class="mdl-cell mdl-cell--6-col">
    <item-detail
      (saved)="saveItem($event)" (cancelled)="resetItem($event)"
      [item]="selectedItem">Select an Item</item-detail>
  </div>
  `,
  providers: [ItemsService],
  directives: [ItemsList, ItemDetail]
})
export class App implements OnInit {
  items: Array<Item>;
  selectedItem: Item;

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.itemsService.loadItems()
      .then(items => {
        this.items = items;
      });
  }

  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: ''};
    this.selectedItem = emptyItem;
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item)
      .then(responseItem => {
        if (item.id) {
          this.replaceItem(responseItem);
        } else {
          this.pushItem(responseItem);
        }
      });

    // Generally, we would want to wait for the result of `itemsService.saveItem`
    // before resetting the current item.
    this.resetItem();
  }

  replaceItem(item: Item) {
    this.items = this.items.map(mapItem => {
      return mapItem.id === item.id ? item : mapItem;
    });
  }

  pushItem(item: Item) {
    this.items.push(item);
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item)
      .then(() => {
        this.items.splice(this.items.indexOf(item), 1);
      });

    // Generally, we would want to wait for the result of `itemsService.deleteItem`
    // before resetting the current item.
    this.resetItem();
  }
}
