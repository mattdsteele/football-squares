import { Component } from "@angular/core";

@Component({
  selector: "superbowl-header",
  template: `
    <div id="header">
      <h1>
        <ng-content select=".header-lede"></ng-content>
        <ng-content select=".header-subhead"></ng-content>
      </h1>
    </div>
  `
})
export class HeaderComponent {}
