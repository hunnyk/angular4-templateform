import { Component } from '@angular/core';
import {MemberService} from "./member.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Template DRiven Form';
  idToUpdate=false;
  mem_id;
  firstname;
  lastname;

  contentEdit;
  iid;

  constructor(private memservice:MemberService) {
    this.memservice.getAllMember();
    this.contentEdit=false;
  }

  onClickSubmit(data){

    debugger
    if(this.idToUpdate){
      this.idToUpdate=false;
      // let mem={
      //   firstname:data.firstname,
      //   lastname:data.lastname,
      //   mem_id:data.mem_id
      // };
      // console.log(mem);
      console.log(data.firstname);
      this.memservice.updateMember(data);
    }
    else {
      this.memservice.addMember(data);

    }
  }

  onDelete(data){
    this.memservice.deleteMember(data);
  }

  onFetch(data){
    this.memservice.fetchMember(data).subscribe((res)=>{
      //console.log(res['firstname']);
      this.mem_id=res['mem_id'];
      this.firstname=res['firstname'];
      this.lastname=res['lastname'];
      this.idToUpdate=true;

      this.contentEdit=true;
      this.iid=data;
    });
  }

  // onRowClick(id){
  //   this.contentEdit=true;
  //   this.iid=id;
  //   this.idToUpdate=true;
  // }





}
