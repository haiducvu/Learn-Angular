import { observable } from 'rxjs';
import { from, merge, of } from 'rxjs';
import {delay, map} from 'rxjs/operators';
// //Generis [T]
// export abstract class BaseService<T>{
//   protected model: T;
  
//   find():T[]{
//     return [this.model];
//   }

//   findOne():T{
//     return this.model;
//   }
// }

// interface Dog{
//   bark(): void;
// }

// interface Cat{
//   meow(): void;
// }

// export class  DogService extends BaseService<Dog>{}
// export class  CatService extends BaseService<Cat>{}

// const dogService= new DogService();
// const catService= new CatService();
// dogService.findOne().bark();
// catService.findOne().meow();

export interface Author {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    ipAddress: string;
  }
  
  export const authors = [
    {
      id: 1,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33"
    },
    {
      id: 2,
      firstName: "Priscella",
      lastName: "Signe",
      email: "psigne1@berkeley.edu",
      gender: "Female",
      ipAddress: "183.243.228.65"
    },
    {
      id: 3,
      firstName: "Stephan",
      lastName: "McKevany",
      email: "smckevany2@reuters.com",
      gender: "Male",
      ipAddress: "79.172.239.111"
    },
    {
      id: 4,
      firstName: "Babbette",
      lastName: "Morcomb",
      email: "bmorcomb3@fastcompany.com",
      gender: "Female",
      ipAddress: "24.99.155.146"
    },
    {
      id: 5,
      firstName: "Chandra",
      lastName: "Dunseath",
      email: "cdunseath4@hud.gov",
      gender: "Female",
      ipAddress: "89.9.91.12"
    },
    {
      id: 6,
      firstName: "De witt",
      lastName: "Myrick",
      email: "dmyrick5@gravatar.com",
      gender: "Male",
      ipAddress: "154.2.107.65"
    },
    {
      id: 7,
      firstName: "Prinz",
      lastName: "Keedy",
      email: "pkeedy6@yandex.ru",
      gender: "Male",
      ipAddress: "229.139.13.203"
    },
    {
      id: 8,
      firstName: "Valentina",
      lastName: "Heinsen",
      email: "vheinsen7@alexa.com",
      gender: "Female",
      ipAddress: "31.103.152.85"
    },
    {
      id: 9,
      firstName: "Cleopatra",
      lastName: "Bonevant",
      email: "cbonevant8@surveymonkey.com",
      gender: "Female",
      ipAddress: "23.190.218.14"
    },
    {
      id: 10,
      firstName: "Luce",
      lastName: "Pattullo",
      email: "lpattullo9@ftc.gov",
      gender: "Female",
      ipAddress: "173.107.238.31"
    }
  ];

  export const DanhSachGhe=[
    {SoGhe:1,TenGhe: "s??? 1", Gia:100, TrangThai:false},
{SoGhe:2,TenGhe: "s??? 2", Gia:100, TrangThai:false},
{SoGhe:3,TenGhe: "s??? 3", Gia:100, TrangThai:false},
{SoGhe:4,TenGhe: "s??? 4", Gia:100, TrangThai:false},
{SoGhe:5,TenGhe: "s??? 5", Gia:100, TrangThai:false},
{SoGhe:6,TenGhe: "s??? 6", Gia:100, TrangThai:false},
{SoGhe:7,TenGhe: "s??? 7", Gia:100, TrangThai:false},
{SoGhe:8,TenGhe: "s??? 7", Gia:100, TrangThai:false},
{SoGhe:9,TenGhe: "s??? 9", Gia:100, TrangThai:false},
{SoGhe:10,TenGhe: "s??? 10", Gia:100, TrangThai:false},
{SoGhe:11,TenGhe: "s??? 11", Gia:100, TrangThai:false},
{SoGhe:12,TenGhe: "s??? 12", Gia:100, TrangThai:false},
{SoGhe:13,TenGhe: "s??? 13", Gia:100, TrangThai:false},
{SoGhe:14,TenGhe: "s??? 14", Gia:100, TrangThai:false},
{SoGhe:15,TenGhe: "s??? 15", Gia:100, TrangThai:false},
{SoGhe:16,TenGhe: "s??? 16", Gia:100, TrangThai:false},
{SoGhe:17,TenGhe: "s??? 17", Gia:100, TrangThai:false},
{SoGhe:18,TenGhe: "s??? 18", Gia:100, TrangThai:false},
{SoGhe:19,TenGhe: "s??? 19", Gia:100, TrangThai:false},
{SoGhe:20,TenGhe: "s??? 20", Gia:100, TrangThai:false},
{SoGhe:21,TenGhe: "s??? 21", Gia:100, TrangThai:false},
{SoGhe:22,TenGhe: "s??? 22", Gia:100, TrangThai:false},
{SoGhe:23,TenGhe: "s??? 23", Gia:100, TrangThai:false},
{SoGhe:24,TenGhe: "s??? 24", Gia:100, TrangThai:false},
{SoGhe:25,TenGhe: "s??? 25", Gia:100, TrangThai:false},
{SoGhe:26,TenGhe: "s??? 26", Gia:100, TrangThai:false},
{SoGhe:27,TenGhe: "s??? 27", Gia:100, TrangThai:false},
{SoGhe:28,TenGhe: "s??? 28", Gia:100, TrangThai:false},
{SoGhe:29,TenGhe: "s??? 29", Gia:100, TrangThai:false},
{SoGhe:30,TenGhe: "s??? 30", Gia:100, TrangThai:true},
{SoGhe:31,TenGhe: "s??? 31", Gia:100, TrangThai:false},
{SoGhe:32,TenGhe: "s??? 32", Gia:100, TrangThai:false},
{SoGhe:33,TenGhe: "s??? 33", Gia:100, TrangThai:false},
{SoGhe:34,TenGhe: "s??? 34", Gia:100, TrangThai:false},
{SoGhe:35,TenGhe: "s??? 35", Gia:100, TrangThai:false}
  ]
// Create observable
const observe={
  next: value=> console.log('value',value),
  error: err=> console.log('err',err),
  complete:()=> console.log('completed'), 
}
//Transformation Operators
//map in RxJs
of(authors) // outer observable parent observable
.pipe(map(data=>{   //t???c l?? map ??? ????y nh???n gi?? tr??? t??? observable n??y || map b??n Array l?? map t???ng ph???n t??? 
  return data;
}))
.subscribe(observe)

merge(
  of(authors[0]).pipe(delay(2000)), 
  of(authors[1]).pipe(delay(4000)), 
).pipe(
  map(item => ({...item, fullName: `${item.firstName} ${item.lastName}`}))
).subscribe(observe)


//pluck(nh???)





 