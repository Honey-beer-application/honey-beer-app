import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import CustomerController from 'src/app/Data/Controllers/CustomerConstroller';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import ICompany from 'src/app/Data/Interfaces/ICompany';
import IProduct from 'src/app/Data/Interfaces/IProduct';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnDestroy {

  private subs:Subscription = new Subscription();
  public products:IProduct[] = new Array<IProduct>();
  private allProducts:IProduct[] = new Array<IProduct>();

  public productsForm:FormGroup;
  private productName:FormControl;
  private productDescription:FormControl;


  constructor(private productController:ProductController,private fb:FormBuilder){
    //initialization
    this.productName = new FormControl();
    this.productDescription = new FormControl();

    this.subs.add(
      this.productController.loadAllProducts().subscribe(
        (data:IProduct[])=>{this.allProducts=data;this.products=data;},
        (error)=>alert(error.error.detail)
      )
    );

    this.productsForm = this.fb.group({
      name:this.productName,
      description:this.productDescription
    })

    this.subs.add(
      this.productsForm.valueChanges.subscribe((value:{name:string,description:string})=>{
        this.selectProducts(value);
      })
    );


  }


  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  private selectProducts(value: { name: string; description: string; }):void {
    this.products = this.allProducts;
    if(value.name!=undefined&&value.name!=null&&value.name!='')
      this.products=this.products.filter(product=>product.name.toLowerCase().includes(value.name.toLowerCase()));
    if(value.description!=undefined&&value.description!=null&&value.description!='')
      this.products = this.products.filter(product=>product.description.toLowerCase().includes(value.description.toLowerCase()));
  }
  
}


