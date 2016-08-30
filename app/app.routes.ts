import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {HomePage} from "./pages/home/home.component";
import {IntervalPage} from "./pages/intervals/intervals.component";
import {EditProgram} from "./pages/editprogram/editprogram.component";

export const routes: RouterConfig = [
  { path: "", component: HomePage },
  { path: "intervals", component: IntervalPage },
  { path: "editprogram", component: EditProgram },
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];