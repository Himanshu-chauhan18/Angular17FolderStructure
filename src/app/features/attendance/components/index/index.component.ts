import { Component } from '@angular/core';
import { AttendanceService } from '../../services/attendance.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  userdata:any;
  constructor(private att:AttendanceService){}
  ngOnInit(){
    
  }

  getUserData(){
    this.att.getUsers().subscribe((data:any)=>{
      this.userdata = data;
    })
  }
}
