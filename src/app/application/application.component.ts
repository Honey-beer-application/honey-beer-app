import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from "@emailjs/browser";
import { Subscription, filter, map } from 'rxjs';
import CustomerController from '../Data/Controllers/CustomerConstroller';
import CompanyController from '../Data/Controllers/CompanyController';
import ICompany from '../Data/Interfaces/ICompany';
import Customer from '../Data/Classes/Customer';
import ICustomer from '../Data/Interfaces/ICustomer';
import { EmailController } from '../Data/Controllers/EmailController';
import { IEmail } from '../Data/Interfaces/IEmail';
import { Email } from '../Data/Classes/Email';
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
  private customer:ICustomer;
  constructor(private fb:FormBuilder,private customerController:CustomerController,private emailController:EmailController){
    this.message = {from_email:'',title:'',message:''};
    this.subs = new Subscription();
    this.emailFrom = new FormControl(undefined,[Validators.required,Validators.email]);
    this.emailTitle = new FormControl(undefined,Validators.required);
    this.emailMessage = new FormControl(undefined,Validators.required);
    this.customer = new Customer();
    this.emailForm = this.fb.group({
      from_email:this.emailFrom,
      title:this.emailTitle,
      message:this.emailMessage
    });
    this.subs.add(
      this.customerController.registeredCustomer.asObservable().subscribe((data:ICustomer)=>this.customer=data)
    );
    if(this.customer.customerId>0n){
      this.message.from_email=this.customer.email;
    }

    this.subs.add(
      this.emailForm.valueChanges
      .pipe(map(data=>{
        this.verifiyFields(data);
        return data;}))
      .pipe(filter((data:{from_email:string,title:string,message:string})=>{
        if(data.from_email==undefined)
          data.from_email=this.message.from_email;
        return data.from_email!=undefined&&
              data.message!=undefined&&
              data.title!=undefined&&
              data.from_email.length>0&&
              data.message.length>0&&
              data.title.length>0;
      }))
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
    emailjs.send("service_x8k6zkl","template_szo4oub",{
      from_email: this.message.from_email,
      message: this.message.message,
      title: this.message.title,
    });
    let sentEmail:IEmail = new Email();
    sentEmail.email=this.message.from_email;
    this.emailController.saveEmail(sentEmail).subscribe((data)=>alert("Email is registered in database."),(error)=>JSON.stringify(error));
    alert("Email has been successfully sent");
  }
}
