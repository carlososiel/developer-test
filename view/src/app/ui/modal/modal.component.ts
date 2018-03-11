import {Component, AfterViewInit, ViewEncapsulation, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

declare var $: any;

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModalConfirmComponent implements OnInit {

  @Input() size;
  @Input() icon;
  @Input() header;
  @Input() text;
  private id;

  constructor() {
    this.id = new Date().getTime();
  }

  ngOnInit() {
    this.size = this.size || "mini";
  }

  show(callback) {
    var me = this;
    $(".ui.modal").modal({
      blurring: true,
      closable: true,
      onApprove: function ($element) {
        callback(true);
        $(".ui.modal").modal("hide");
      },
      onDeny: function ($element) {
        callback(false);
        $(".ui.modal").modal("hide");
      }
    }).modal("show");
    return this;
  }
}
