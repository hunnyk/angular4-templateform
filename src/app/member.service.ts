import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MemberService{

  data;

  constructor(private http:HttpClient) {}

  getAllMember(){
    return this.http.get("http://localhost/phpapi/member/member_getall.php").subscribe((res)=>{
      this.data=res;
    });
  }

  addMember(data){
    return this.http.post("http://localhost/phpapi/member/member_insert.php",data).subscribe((res)=>{
     this.getAllMember();
    });
  }

  deleteMember(data){
    return this.http.delete("http://localhost/phpapi/member/member_delete.php?action=delete&id="+data).subscribe((res)=>{
      this.getAllMember();
    })
  }

  fetchMember(data) {
    return this.http.get("http://localhost/phpapi/member/member_getid.php?action=getid&id="+data);
  }

  updateMember(data) {
    console.log(data);
    console.log(data['mem_id']);
    console.log(data.firstname);
    return this.http.put("http://localhost/phpapi/member/member_update.php?action=edit&id="+data['mem_id'],data).subscribe((res)=>{
      this.getAllMember();
    });
   // return this.http.put("http://localhost/phpapi/member/member_update.php?action=edit&id="+data['mem_id'],data);
  }

}
