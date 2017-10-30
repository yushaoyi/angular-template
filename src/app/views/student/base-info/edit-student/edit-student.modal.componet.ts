import { Component, Input, OnInit } from '@angular/core';
import { NzModalSubject } from "ng-zorro-antd";

@Component({
  templateUrl: './edit-student.modal.component.html'
})

export class EditStudentModalComponet implements OnInit {
  _item: any;

  @Input()
  set item(value: any) {
    this._item = value;
  }

  constructor(
    private subject: NzModalSubject
  ) {

  }

  ngOnInit() { }

}
