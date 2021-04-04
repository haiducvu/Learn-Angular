import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs'; 
import { Http,Response } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:Http) { }
  getListUser():Observable<any>{
    let url=`http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien`;
    let observe= this._http.get(url).pipe(map((result:Response)=> result.json()));
    return observe;
  }
}
