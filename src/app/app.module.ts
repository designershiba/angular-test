import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductInfoComponent } from './component/product-info/product-info.component';
import { ProductSliderComponent } from './component/product-slider/product-slider.component';
import { ProductReviewComponent } from './component/product-review/product-review.component';
import { PaymentDetailsComponent } from './component/payment-details/payment-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductInfoComponent,
    ProductSliderComponent,
    ProductReviewComponent,
    PaymentDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
