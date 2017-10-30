import { Component, OnInit } from '@angular/core';
import { CoreService } from "../../../core/services/core.service";
import { EditStudentModalComponet } from "./edit-student/edit-student.modal.componet";

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {
  private posts = [
    {
      name: '小1',
      schoolName: '高新一中'
    },
    {
      name: '小2'
    }
  ];
  private posts3: any[] = [
    {
      name: '小1',
      schoolName: '高新一中'
    },
    {
      name: '小2'
    }
  ];
  private posts2: Array<any> = [
    {
      name: '小1',
      schoolName: '高新一中'
    },
    {
      name: '小2'
    }
  ];
  constructor(
    private commonSev: CoreService
  ) { }

  ngOnInit() { }

  edit(post): void {
    if (!post) {
      return;
    }
    post.title = '编辑';
    post.isEdit = true;
    this.commonSev.ui.modal(EditStudentModalComponet, 'test', {}, {})
      .subscribe(result => {
        console.log(result);
      });
  }
}
