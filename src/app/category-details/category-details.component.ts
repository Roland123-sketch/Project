import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Category } from '../categories.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
  private categoryId: number = 0
  public category: Category|undefined
  constructor(private router:ActivatedRoute,private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryId = this.router.snapshot.params.categoryId
    console.log(this.categoryId)
    this.categoryService.getCategory(this.categoryId).subscribe((response: Category)=>{
      this.category = response
      console.log(this.category)
    })
  }

}
