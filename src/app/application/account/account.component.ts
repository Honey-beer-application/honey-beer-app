import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, filter, map } from 'rxjs';
import Company from 'src/app/Data/Classes/Company';
import Customer from 'src/app/Data/Classes/Customer';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import CustomerController from 'src/app/Data/Controllers/CustomerConstroller';
import ICompany from 'src/app/Data/Interfaces/ICompany';
import ICustomer from 'src/app/Data/Interfaces/ICustomer';
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { SentCompanyEmailController } from 'src/app/Data/Controllers/SentCompanyEmailController';
import { SentCompanyEmail } from 'src/app/Data/Classes/SentCompanyEmail';
import { ISentCompanyEmail } from 'src/app/Data/Interfaces/ISentCompanyEmail';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  private message:{from_email:string,title:string,message:string};
  private readonly subs:Subscription;
  public emailForm:FormGroup;
  private readonly emailFrom:FormControl;
  private readonly emailTitle:FormControl;
  private readonly emailMessage:FormControl;
  private customer:ICustomer;
  private company:ICompany;
  public emailEntered:boolean|undefined=undefined;
  public titleEntered:boolean|undefined=undefined;
  public messageEntered:boolean|undefined=undefined;
  public email: {
      init: (publicKey: string, origin?: string) => void;
      send: (serviceID: string, templateID: string, templatePrams?: Record<string, unknown> | undefined, publicKey?: string | undefined) => Promise<EmailJSResponseStatus>;
      sendForm: (serviceID: string, templateID: string, form: string | HTMLFormElement, publicKey?: string | undefined) => Promise<EmailJSResponseStatus>;
  } = emailjs;
  constructor(private readonly fb:FormBuilder,private readonly customerController:CustomerController,private readonly sentCompanyEmailController:SentCompanyEmailController, private readonly companyController:CompanyController){
    this.message = {from_email:'',title:'',message:''};
    this.subs = new Subscription();
    this.emailFrom = new FormControl(undefined,[Validators.required,Validators.email]);
    this.emailTitle = new FormControl(undefined,Validators.required);
    this.emailMessage = new FormControl(undefined,Validators.required);
    this.customer = new Customer();
    this.company = new Company();
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
      this.companyController.companyObservable().subscribe((data:ICompany)=>{
        if(data.PIB>0n){
          this.message.from_email=data.email;
          this.company=data;
        }
    }));
    this.subs.add(
      this.emailForm.valueChanges
      .pipe(map(data=>{
        this.verifiyFields(data);
        return data;}))
      .pipe(filter((data:{from_email:string,title:string,message:string})=>{
        data.from_email ??= this.message.from_email;
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
  public sendEmail():void{
    this.email.init('kik40nluAvZK_YLAq');
    this.email.send("service_x8k6zkl","template_szo4oub",{
      from_email: this.message.from_email,
      message: this.message.message,
      title: this.message.title,
    });
    let sentEmail:ISentCompanyEmail = new SentCompanyEmail();
    sentEmail.pib=this.company.PIB;
    this.sentCompanyEmailController.saveCompanyEmail(sentEmail).subscribe({next:(data)=>
    alert("Email is registered in database."),error:(error)=>alert(error.error.detail)});
    alert("Email has been successfully sent");
  }
  public isCompanyRegistered():boolean{
    return this.company.PIB!=0n;
  }
}
