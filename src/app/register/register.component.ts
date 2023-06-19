import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Location } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,AfterViewInit {
  
  @ViewChild('register') signUpButton:ElementRef = new ElementRef(document.getElementById('register'));
  @ViewChild('signIn') signInButton:ElementRef = new ElementRef(document.getElementById('signIn'));
  @ViewChild('main') main:ElementRef = new ElementRef(document.getElementById('main'));

  private history: string[] = [];
  constructor(private location:Location,private router:Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    });
  }

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
    this.signUpButton.nativeElement.addEventListener('click',()=>{
      this.main.nativeElement.classList.add("right-panel-active");
    });
    this.signInButton.nativeElement.addEventListener('click',()=>{
      this.main.nativeElement.classList.remove("right-panel-active");
    });
  }
  ngOnInit(): void {
    
  }
  backToPrevoiusPage(){
    this.history.pop();
    if (this.history.length > 0) {
      this.location.back();
    } else {
      this.router.navigateByUrl("/");
    }
  }
}
