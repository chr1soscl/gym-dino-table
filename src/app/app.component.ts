import { Component, OnInit } from '@angular/core';
import { getUsers } from './services/fakeRandomUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users:any;

  ngOnInit(): void {
    this.users=this.getUsersMap(getUsers());
  }

  title = 'gym-dino-table';

  userColumns = [
    {id:'select',label:''//,type:'switch'
    },
    {id:'firstName',label:'First Name'},
    {id:'lastName',label:'Last Name'},
    {id:'gender',label:'Gender'},
    {id:'genderIcon',label:'Icon'//,icon:'bi bi-gender-ambiguous',type:'icon'
    },
    {id:'country',label:'Country'//,type:'button'
    },
    {id:'email',label:'Email',type:'link'
    },
    {id:'dob',label:'Date of Birth'//,type:'date'
    },
    {id:'picture',label:'Picture'//,type:'img'
    }
  ];

  userFilters:any[]=[
    {id:'gender',label:'Gender',
     options:[
       {id:'female',label:'Female'},
       {id:'male',label:'Male'}
      ]
     }
   ];

   pages:any=
    {id:'pages',label:'Page Size',
     options:[
       {id:'20',label:20},
       {id:'30',label:30}
     ]
    };

    getUsersMap(users:any){
      return users.map((user:any)=>{
        return {
          select:false,
          firstName:user.firstName,
          lastName:user.lastName,
          gender:user.gender,
          genderIcon:(user.gender==='Female')?'bi bi-gender-female':'bi bi-gender-male',
          country:user.country,
          email:user.email,
          dob:new Date(user.dob),
          picture:user.picture
        }
      });
    }

    onClickMethod(event){
      
    }


}
