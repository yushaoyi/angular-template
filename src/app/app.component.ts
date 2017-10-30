import {Component, OnDestroy, OnInit} from '@angular/core';
import { NetSev } from './core/services/net.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'app';

  constructor(
    private netSev: NetSev
  ) {}

  ngOnInit() {
    // this.netSev.getServer('http://develop.test.taeapp.com/index.php',
    //   { 'isPc': 1 }).subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   err => {}
    // );
    // this.netSev.postServer('http://develop.test.com/index.php',
    //   { 'isPc': 1 , 'has': false}).subscribe(
    //   data => {
    //     console.log(data);
    //   },
    //   err => {}
    // );
  }

  ngOnDestroy() {}
}
