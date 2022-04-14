import {Component, OnDestroy, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {filter} from "rxjs/operators";
import {ProductService} from "./product.service";
import {Subscription} from "rxjs";

@Component({
	selector: 'pm-products',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy {

	constructor(private productService: ProductService) {
	}

	pageTitle: string = 'Product List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	errorMessage: string = '';
	sub!: Subscription;
	private _listFilter: string = '';

	products: IProduct[] = [];
	filteredProducts: IProduct[] = [];


	get listFilter(): string {
		return this._listFilter;
	}

	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.performFilter(value);
	}

	performFilter(filterBy: string): IProduct[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy)
		);
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	ngOnInit() {
		this.sub = this.productService.getProducts().subscribe({
			next: products => {
				this.products = products;
				this.filteredProducts = this.products;
			},
			error: err => this.errorMessage = err
		});
	}

	onRatingClicked(message: string): void {
		this.pageTitle = 'Product List: ' + message;
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
