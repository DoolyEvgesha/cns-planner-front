import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Address} from '../address';

@Component({
  selector: 'app-input-address',
  templateUrl: './input-address.component.html',
  styleUrls: ['./input-address.component.css']
})

export class InputAddressComponent implements OnInit {
  array: string[] = [];
  newAddress: string;
  constructor() { }
  ngOnInit(): void {
  }
  addAddress() {
    console.log('newaddress: ' + this.newAddress);
    this.array.push(this.newAddress);
    this.newAddress = null;
  }
}
