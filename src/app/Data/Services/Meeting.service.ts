import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { Observable } from "rxjs";
import { IMeeting } from "../Interfaces/IMeeting";
import ICompany from "../Interfaces/ICompany";

@Injectable({providedIn:"root"})
export class MeetingService{

    constructor(private httpClient:HttpClient){

    }
    // public loadAllMeetings():Observable<IMeeting[]>{
    //     return this.httpClient.get<IMeeting[]>("https://localhost:7165/api/Meeting");
    // }
    // public saveMeeting(meeting:IMeeting):Observable<boolean>{
    //     return this.httpClient.post<boolean>("https://localhost:7165/api/Meeting/schedule",
    //     {
    //         "meetingId": Number(meeting.meetingId),
    //         "subject": meeting.subject,
    //         "startTime": meeting.startTime,
    //         "endTime": meeting.endTime,
    //         "location": meeting.location,
    //         "pib": Number(meeting.pib)
    //     });
    // }
    public loadAllMeetings():Observable<IMeeting[]>{
        return this.httpClient.get<IMeeting[]>("https://honeybeer.bsite.net/api/Meeting");
    }
    public saveMeeting(meeting:IMeeting):Observable<boolean>{
        return this.httpClient.post<boolean>("https://honeybeer.bsite.net/api/Meeting/schedule",
        {
            "meetingId": Number(meeting.meetingId),
            "subject": meeting.subject,
            "startTime": meeting.startTime,
            "endTime": meeting.endTime,
            "location": meeting.location,
            "pib": Number(meeting.pib)
        });
    }
}