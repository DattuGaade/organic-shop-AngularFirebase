import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$: any;
  @Input('category') category;
  
  constructor(
    private categoryService: CategoryService
  ) {
    this.categories$ = this.categoryService.getAll();
   }

  ngOnInit() {
  }

}
