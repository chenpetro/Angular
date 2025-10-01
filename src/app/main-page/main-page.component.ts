import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductPage } from '../product-page/product-page.component';

@Component({
  selector: 'app-main-page',
  imports: [RouterModule, ProductPage],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPage {

}
