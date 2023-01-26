import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items = [
    {id: 1, label: 'First option', visible: true},
    {id: 2, label: 'Second option', visible: true},
    {id: 3, label: 'Third option', visible: true},
    {id: 4, label: 'Fourth option', visible: true},
    {id: 5, label: 'Fifth option', visible: true},
  ]

  toggleVisible(id: number): any {
    let items = this.items.map(item => {
      item.visible = item.id == id ? !item.visible : item.visible
    });
    this.items = items;
    return items;
  }
}
