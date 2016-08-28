import {Component, OnInit} from "@angular/core";
import { Page } from "ui/page";
import { Router} from "@angular/router";
import { RouterExtensions} from 'nativescript-angular/router';
import app = require("application");

@Component({
    selector: "my-app",
    templateUrl: "pages/home/home.html"
})
export class HomePage implements OnInit {

    constructor(private page: Page,
                private routerExtensions: RouterExtensions) {}

    ngOnInit() {
        if(app.android) {
            this.page.actionBarHidden = true;
        }
    }

    newRun(){
        this.routerExtensions.navigate(["/intervals"],
            {
                transition: {
                    name: "slide",
                    duration: 300,
                    curve: "linear"
                }
            });
    }
}

