import {Component, OnInit} from "@angular/core";
import { Page } from "ui/page";
import app = require("application");

@Component({
    selector: "my-app",
    templateUrl: "pages/intervals/intervals.html"
})
export class IntervalPage implements OnInit {

    constructor(private page: Page) {}

    ngOnInit() {
        if(app.android){
            this.page.actionBarHidden = true
        }
    }
}

