import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aside-menu',
  templateUrl: './aside-menu.component.html'
})

export class AsideMenuComponent implements OnInit {
  public menus = [
    {
      'name': '首页',
      'children': []
    },
    {
      'name': '设置',
      'children': []
    }
  ];

  constructor() { }
  ngOnInit() { }
}
