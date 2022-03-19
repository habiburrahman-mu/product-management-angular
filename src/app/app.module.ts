import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {CommonModule} from "@angular/common";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces.pipe";

@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent,
		ConvertToSpacesPipe
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
