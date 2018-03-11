import {Component, OnInit} from '@angular/core';
import {CategoryListService} from "./category-list.services.component";
import {ModalConfirmComponent} from "../../ui/modal/modal.component";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  private categories;

  constructor(private categoryListService: CategoryListService) {
    this.categories = [];
  }

  ngOnInit() {
    this.categoryListService.index().subscribe(resp => {
      this.categories = resp;
    });
  }

  delete(category) {
    var me = this;
    var modal = new ModalConfirmComponent().show(function (action) {
      if (action)
        me.categoryListService.delete(category._id).subscribe(resp => {
          if (resp.success) {
            me.categories = me.categories.filter(c => c._id !== category._id);
          }

        });
    });
  }

}
