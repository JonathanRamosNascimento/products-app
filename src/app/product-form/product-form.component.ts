import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  name: string;
  department: Department;
  price: number;
  description: string;

  constructor() { }

  ngOnInit() {
  }

  save() {

  }

  clear() {
    
  }
}
