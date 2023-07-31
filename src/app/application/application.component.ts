import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from "@emailjs/browser";
import { Subscription, filter, map } from 'rxjs';
import CustomerController from '../Data/Controllers/CustomerConstroller';
import CompanyController from '../Data/Controllers/CompanyController';
import ICompany from '../Data/Interfaces/ICompany';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent implements OnDestroy,OnInit {
  
  private message!:{from_email:string,title:string,message:string};
  public emailEntered:Boolean|undefined=undefined;
  public titleEntered:Boolean|undefined=undefined;
  public messageEntered:Boolean|undefined=undefined; 
  private subs:Subscription;
  public emailForm:FormGroup;
  private emailFrom:FormControl;
  private emailTitle:FormControl;
  private emailMessage:FormControl;
  constructor(private fb:FormBuilder,private customerController:CustomerController){
    this.message = {from_email:'',title:'',message:''};
    this.subs = new Subscription();
    this.emailFrom = new FormControl(undefined,[Validators.required,Validators.email]);
    this.emailTitle = new FormControl(undefined,Validators.required);
    this.emailMessage = new FormControl(undefined,Validators.required);
    this.emailForm = this.fb.group({
      from_email:this.emailFrom,
      title:this.emailTitle,
      message:this.emailMessage
    });
    if(this.customerController.registeredCustomer.customerId>0n){
      this.message.from_email=this.customerController.registeredCustomer.email;
    }

    this.subs.add(
      this.emailForm.valueChanges
      .pipe(map(data=>{
        this.verifiyFields(data);
        return data;}))
      .pipe(filter(data=>this.emailForm.valid))
      .subscribe((data:{from_email:string,title:string,message:string})=>{
        this.message=data;
      })
    )
  }
  verifiyFields(data: { from_email: string; title: string; message: string; }) {
    if(data.from_email!=null)
      this.emailEntered=this.emailFrom.valid;
    if(data.title!=null)
      this.titleEntered=this.emailTitle.valid
    if(data.message!=null)
      this.messageEntered=this.emailMessage.valid;
  }
  ngOnInit(): void {
    this.subs.add(
      CompanyController.companyObservable.subscribe((data:ICompany)=>{
        if(data.PIB>0n)
          this.message.from_email=data.email;
      }));
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  public sendEmail():void{
    emailjs.init('kik40nluAvZK_YLAq');
    let response = emailjs.send("service_x8k6zkl","template_szo4oub",{
        from_email: this.message.from_email,
        title: this.message.title,
        message: this.message.message,
    });
    alert("Email has been successfully sent");
  }
}
