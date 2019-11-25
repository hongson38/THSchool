import { Component, OnInit } from '@angular/core';
import { Category } from '../_models/category';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
   styleUrls: ['./category.component.css']
})
// tslint:disable-next-line: no-unused-expression
export class CategoryComponent implements OnInit {
  oneCategory: Category;
  constructor() { }

  ngOnInit() {
  }
  CreateCate() {
    alert('ok');
  }
}
