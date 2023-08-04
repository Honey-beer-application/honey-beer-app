import {Injectable} from "@angular/core"
import { MeetingService } from "../Services/Meeting.service";
import ICompany from "../Interfaces/ICompany";
import { Observable } from "rxjs";
import { IMeeting } from "../Interfaces/IMeeting";
@Injectable({providedIn:"root"})
export class MeetingConroller{
    constructor(private meetingService:MeetingService){

    }
    public loadAllMeetings():Observable<IMeeting[]>{
        return this.meetingService.loadAllMeetings();
    }
    public scheduleMeeting(meeting:IMeeting):Observable<boolean>{
        return this.meetingService.saveMeeting(meeting);
    }
}