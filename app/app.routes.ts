import {RouterConfig} from "@angular/router";
import {nsProvideRouter} from "nativescript-angular/router"
import {HomePage} from "./pages/home/home.component";
import {IntervalPage} from "./pages/intervals/intervals.component";

export const routes: RouterConfig = [
  { path: "", component: HomePage },
  { path: "intervals", component: IntervalPage },
];

export const APP_ROUTER_PROVIDERS = [
  nsProvideRouter(routes, {})
];