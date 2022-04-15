import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {CommonModule} from "@angular/common";
import {ConvertToSpacesPipe} from "./shared/convert-to-spaces.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpClientModule} from "@angular/common/http";
import {ProductDetailComponent} from './products/product-detail.component';
import {WelcomeComponent} from "./home/welcome.component";

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		ProductListComponent,
		ConvertToSpacesPipe,
		StarComponent,
		ProductDetailComponent

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
