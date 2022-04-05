import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {CommonModule} from "@angular/common";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star.component";

@NgModule({
	declarations: [
		AppComponent,
		ProductListComponent,
		ConvertToSpacesPipe,
		StarComponent
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
