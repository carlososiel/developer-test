import { Component, OnInit } from '@angular/core';
import {AuthorListService} from "./author-list.services.component";
import {ModalConfirmComponent} from "../../ui/modal/modal.component";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  private authors;

  constructor(private authorListService: AuthorListService) {
    this.authors = [];
  }

  ngOnInit() {
    this.authorListService.index().subscribe(resp => {
      this.authors = resp;
    });
  }

  delete(author) {
    var me = this;
    var modal = new ModalConfirmComponent().show(function (action) {
      if (action)
        me.authorListService.delete(author._id).subscribe(resp => {
          if (resp.hasOwnProperty('success'))
            if (resp.success) {
              me.authors = me.authors.filter(a => a._id !== author._id);
            }

        });
    });
  }

}
