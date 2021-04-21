import { Component } from '@angular/core';
import { Columns, Config, DefaultConfig } from 'ngx-easy-table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public configuration: Config;
  public columns: Columns[];
  public data = [{
    phone: '+91 9698631958',
    age: 26,
    address: 'Virattipathu North street',
    company: 'iSquareBS',
    name: 'Vignesh K',
    isActive: true,
  }, {
    phone: '+91 7904028760',
    age: 25,
    address: 'SS colony street',
    company: 'iSquare',
    name: 'Viki K',
    isActive: true,
  }, {
    phone: '+91 7904028760',
    age: 31,
    address: 'Indian street',
    company: 'KNOWLYSIS',
    name: 'Heidi Duncan',
    isActive: true,
  }, {
    phone: '+91 7904028760',
    age: 21,
    address: 'American street',
    company: 'KNOWLYSIS',
    name: 'Duncan',
    isActive: true,
  }, {
    phone: '+91 7502357602',
    age: 24,
    address: 'South Kaalavasal street',
    company: 'KNOWLYSIS',
    name: 'Chota',
    isActive: true,
  }, {
    phone: '+91 9566598047',
    age: 29,
    address: 'South masi street',
    company: 'KNOWLYSIS',
    name: 'Bheem',
    isActive: true,
  }
  ];
  ngOnInit(): void {
    this.configuration = { ...DefaultConfig };
    this.configuration.searchEnabled = true;
    // ... etc.
    this.columns = [
      { key: 'name', title: 'Name' },
      { key: 'age', title: 'Age' },
      { key: 'phone', title: 'Phone' },
      { key: 'address', title: 'Address' },
      { key: 'company', title: 'Company' },
      { key: 'isActive', title: 'STATUS' },
    ];
  }
}