import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User} from 'Models/user';
@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.css']
})
export class CreateusersComponent implements OnInit {
  createusers:any;

  constructor(private http:HttpClient) { }
//   user:User={
//     id: 0,
//     name: '',
//     email: '',
//     userName: '',
//     password: '',
//     gender: '',
//     mobileNo: 0,
//     organization: ''
//     designation: string;
//     reporting_Person: string;
//     isActive: boolean;
//     createdBy: string | null;
//     createdOn: string;
//     updatedBy: string | null;
//     updatedOn: string;
// }
user : any= {
  id:0,
  name: '',
  email: '',
  userName: '',
  password:'',
  gender: 0,
  mobileNo:'',
  organization: 0,
  designation: 0,
  reporting_Person:'' ,
  isActive: true,
  createdBy:1,
  createdOn: Date.now,
  updatedBy: 0,
  updatedOn: Date.now,
}
  // user:User={
  //   userId: 0,
  //   fullName:'',
  //   email: '',
  //   userName: '',
  //   password: '',
  //   genderId: 0,
  //   mobileNumber: 0,
  //   mobileNumberId: 0,
  //   organizationId: 0,
  //   designationId: 0,
  //   reportingPerson:'',
  // }
userdata()
{
  const headers={'content-type':'application/json'}
  console.log(this.user)
  this.http.post<any>('https://localhost:7024/User/AddUser',this.user,{headers:headers})
  .subscribe((data)=>{
    console.log(data)
  });
}

  ngOnInit(): void {
  }
  public data:User[]=[
    
  ];

  Gender: any=[{
    id: 1,
    gender:'male'
  },
  {
    id: 2,
    gender:'female'
  },
  {
    id: 3,
    gender:'others'
  }
  ]

  Organization: any=[{
    id: 1,
    organizationName: 'Development'
  },
  {
    id: 2,
    organizationName: 'Testing'
  },
  {
    id: 3,
    organizationName: 'UI/UX'
  }

]
 Designation: any=[{
   id: 1,
   designationName:'SSE'
 },
 {
  id: 2,
  designationName:'TL'
},
{
  id: 3,
  designationName:'PM'
}
]

Mobilenumber: any=[{
  id:1,
  number: '+91'

},
{
  id:2,
  number: '+98'

},
{
  id:3,
  number: '+414'

}
]

// userdata(){
//   console.log(this.user)
// }
    
}
