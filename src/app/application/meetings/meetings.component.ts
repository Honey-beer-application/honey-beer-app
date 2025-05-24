import { Component, OnDestroy } from '@angular/core';
import { MeetingConroller } from 'src/app/Data/Controllers/MeetingController';
import { Subscription } from 'rxjs';
import ICompany from 'src/app/Data/Interfaces/ICompany';
import Company from 'src/app/Data/Classes/Company';
import CompanyController from 'src/app/Data/Controllers/CompanyController';
import { IMeeting } from 'src/app/Data/Interfaces/IMeeting';
@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnDestroy{


  private readonly subs:Subscription;
  public availableMeetings:IMeeting[];
  private company:ICompany;

  constructor(private readonly meetingController:MeetingConroller, private readonly companyController:CompanyController){
    this.subs = new Subscription();
    this.availableMeetings = new Array<IMeeting>();
    this.company= new Company();
    this.subs.add(
      this.meetingController.loadAllMeetings().subscribe((data:IMeeting[])=>{
        this.availableMeetings=data;
      })
    )
    this.subs.add(
      this.companyController.companyObservable.subscribe((data:ICompany)=>this.company=data)
    )
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  scheduleMeting(meeting: IMeeting) {
    meeting.pib = this.company.PIB;
    this.meetingController.scheduleMeeting(meeting).subscribe(
      {
        next:(data:boolean)=>{
          alert("Meeting is scheduled successfully.");
        },
        error:(error:Object)=>alert(JSON.stringify(error))
      }
    );
    this.availableMeetings = this.availableMeetings.filter(meet=>meet.meetingId!==meeting.meetingId);
  }

  getDate(date:Date):string{
    date = new Date(date);
    return date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear();
  }

  getTime(date:Date):string{
    date= new Date(date);
    return date.getHours()+":"+(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes());
  }
  
}

