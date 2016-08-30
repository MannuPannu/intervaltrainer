import {Component, OnInit} from "@angular/core";
import { Page } from "ui/page";
import app = require("application");

@Component({
    selector: "my-app",
    templateUrl: "pages/intervals/intervals.html",
    styleUrls: ["pages/intervals/intervals.css"]
})
export class IntervalPage implements OnInit {
    charCodeMinus: string;
    charCodePlus: string;
    walkLength: number;
    runLength: number;
    cycles: number;

    constructor(private page: Page) {
        this.walkLength = 0;
        this.runLength = 0;
        this.cycles = 0;
        this.charCodeMinus = String.fromCharCode(0xf056);
        this.charCodePlus = String.fromCharCode(0xf055);
    }

    ngOnInit() {
        if(app.android){
            this.page.actionBarHidden = true
        }
    }
}

