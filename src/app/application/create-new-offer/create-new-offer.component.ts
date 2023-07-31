import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription,BehaviorSubject } from 'rxjs';
import { ProductController } from 'src/app/Data/Controllers/ProductController';
import IProduct from 'src/app/Data/Interfaces/IProduct';
import { Product } from 'src/app/Data/Classes/Product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-offer',
  templateUrl: './create-new-offer.component.html',
  styleUrls: ['./create-new-offer.component.scss']
})
export class CreateNewOfferComponent implements OnDestroy {
  
  @Input('product') product:IProduct;

  public productsForm:FormGroup;
  private productName:FormControl;
  private productDescription:FormControl;

  private productsObservable:BehaviorSubject<IProduct[]> = new BehaviorSubject(<IProduct[]>[]);

  private subs:Subscription = new Subscription();
  public products:IProduct[] = [];
  constructor(private productController:ProductController,private fb:FormBuilder){

    this.product = new Product();
    this.productName = new FormControl();
    this.productDescription = new FormControl();
    this.subs.add(
      this.productController.loadAllProducts().subscribe(
        (data:IProduct[])=>{this.productsObservable.next(data);this.products=data},
        (error)=>alert(error.error.detail)
      )
    )
    this.productsForm=this.fb.group({
      name:this.productName,
      description:this.productDescription
    })
    this.subs.add(
      this.productsForm.valueChanges.subscribe(
        (data:{name:string,description:string})=>{
          this.filterProducts(data);
        }
      )
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private filterProducts(data:{name:string,description:string}):void{
    this.subs.add(
      this.productsObservable.asObservable().subscribe((data:IProduct[])=>{
        this.products = data;
      })
    )
    if(data.name!=undefined&&data.name!=null&&data.name!="")
      this.products = this.products.filter(product=>product.name.includes(data.name));
    if(data.description!=undefined&&data.description!=null&&data.description!="")
      this.products = this.products.filter(product=>product.description.includes(data.description));
  }
}
