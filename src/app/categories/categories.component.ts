import { Component, OnInit } from '@angular/core';
import{ categorieslist} from '../categorieslist'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
categorieslist = categorieslist;
  constructor() { }

  ngOnInit() {
  }

}
