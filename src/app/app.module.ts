import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {CommonModule} from "@angular/common";

@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		CommonModule
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
