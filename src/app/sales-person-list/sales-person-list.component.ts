import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Matthew", "Azul", "test@email.com", 50000),
    new SalesPerson("matte", "azul", "test@email.com", 40000),
    new SalesPerson("same", "name", "test@email.com", 90000),
    new SalesPerson("another", "test", "test@email.com", 60000),
    
  ];

  constructor() {}

  ngOnInit(): void {
      
  }

}
