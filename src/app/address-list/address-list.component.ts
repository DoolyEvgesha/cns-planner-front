import { Component, OnInit } from '@angular/core';

export interface AddressSection {
  address: string;
}

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresses: AddressSection[] = [
    {
      address: '192.168.0.1/24',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
