import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-viewprofie',
  templateUrl: './viewprofie.component.html',
  styleUrls: ['./viewprofie.component.css']
})
export class ViewprofieComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  data: any[]= [{
    Status:'Approved',
    Approveddate:'11-Jan-2022',
    ProfileImage:'./assets/img/profileImage.png',
    name:'Chitrarasu',
    nationality:'Indian',
    email:'arasu16012001@gmail.com',
    phoneNo:'8531934523',
    twitter:'https://www.twitter.com/arasu',
    linkedln:'https://www.linkedin.com/arasu?_l=en_US',
    certification1:'./assets/img/certificate1.jpeg',
    certification2:'./assets/img/certificate2.jpeg',
    achievement:'./assets/img/trophy.jpeg',
    language1:'English',
    language2:'Tamil',
    lpart1:'Read',
    lpart2:'Write',
    lpart3:'speak',
    objective:'To obtain a challenging position in a high quality engineering environment where my resourceful experience and academic skills will add value to organizational operations.',
    domain:'.Net, oracle, BFS',
    technology:'ASP.net, Javascript, C#, SQL',
    college:'XYZ college of Engineering',
    collegeduration:'2013 - 2016',
    course:'Bachelor of Engineering ',
    degree:'Electronics and Communication Engineering',
    percentage:'8.5',
    projectname:'Library Management system',
    projectduration:'Aug 2001- Dec 2004',
    projectdescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Beatae obcaecati distinctio velit non ipsum dolor sit amet,consectetur adipisicing elit. Beatae obcaecati distinctiovelit non perspiciatis neque perspiciatis neque!',
    projectrole:'Developer',
    toolused:'Vistual Studio , SQL Management Studio , MicrosoftOffice.',
    projectname1:'Profile Management systems',
    projectduration1:'Aug 2007 - Jan 2009',
    projectname2:'Management Information system',
    projectduration2:'Feb 2009 - Dec 2012',
    updateddate:'16-Jan-2022',
  }]

}
