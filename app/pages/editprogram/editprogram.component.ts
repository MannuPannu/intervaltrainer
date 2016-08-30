import { Component, OnInit } from "@angular/core";
import app = require("application");
import { Page } from "ui/page";
import { IntervalPage } from "../intervals/intervals.component";
import { RouterExtensions} from 'nativescript-angular/router';

@Component({
    selector: "my-app",
    templateUrl: "pages/editprogram/editprogram.html",
    directives: [IntervalPage]
})
export class EditProgram implements OnInit {
    editInterval: Boolean;

    constructor(private page: Page, 
                private routerExtensions: RouterExtensions){
                    this.editInterval = false;
                }

    ngOnInit(){
        if(app.android) {
            this.page.actionBarHidden = true;
            this.routerExtensions.navigate(["/editprogram"]);
        }
    }

    addSets(){
        console.log("add sets");
       this.editInterval = true; 
    }
}