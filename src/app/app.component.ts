import {Component, OnDestroy, OnInit} from '@angular/core';
import { NetSev } from './common/services/net.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app';

  constructor(
    private netSev: NetSev
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {}
}
