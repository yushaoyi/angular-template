import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent implements OnInit {
  public menus = [
    {
      'name': '首页',
      'href': 'home'
    },
    {
      'name': '学生管理',
    }
    ];
  constructor() {}
  ngOnInit() {}
}
