import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { Http,Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:Http) { }
  // lấy danh sách sinh viên
  getListUser():Observable<any>{
    let url=`http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien`;
    let observe= this._http.get(url).pipe(map((result:Response)=> result.json())); //data trả về cần chuyển đổi JSON
    return observe;
  }
  // thêm sinh viên
  addListUser(user: any):Observable<any>{ //re-check & create user type
    let url=`http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien`;
    let header= new Headers();
    header.append('Content-Type','application/json;charset=UTF-8');
    let observe= this._http.post(url,user,{headers:header}).pipe((map((result:Response)=> result.json())));
    return observe;
  }
}
