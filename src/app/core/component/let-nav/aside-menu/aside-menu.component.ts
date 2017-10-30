import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aside-menu',
  templateUrl: './aside-menu.component.html'
})

export class AsideMenuComponent implements OnInit {
  public menus = [
    {
      'sets': 'main.home',
      'name': '首页',
      'children': []
    },
    {
      'sets': 'main.homeSetting',
      'name': '首页设置',
      'children': []
    }
  ];

  constructor() { }
  ngOnInit() { }
}
