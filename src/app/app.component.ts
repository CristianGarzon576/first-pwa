import {Component, OnDestroy, OnInit} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'pwa';
  subs: Subscription;

  constructor (private swUpdate: SwUpdate) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.subs = this.swUpdate.available.subscribe(() => {
        window.location.reload();
      });
    }
  }

  ngOnDestroy() {
    this.subs && this.subs.unsubscribe();
  }
}
