import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {CommonModule} from "@angular/common";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpClientModule} from "@angular/common/http";

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
		CommonModule,
		HttpClientModule
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
