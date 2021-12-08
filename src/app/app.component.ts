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
    {id:'select',label:'',type:'switch'
    },
    {id:'firstName',label:'First Name'},
    {id:'lastName',label:'Last Name'},
    {id:'gender',label:'Gender'},
    {id:'genderIcon',label:'',type:'icon'
    },
    {id:'country',label:'Country',type:'button'
    },
    {id:'email',label:'Email',type:'link'
    },
    {id:'dob',label:'Date of Birth',type:'date',format:'dd/MM/yyyy'
    },
    {id:'picture',label:'Picture',type:'img',width:'50px'
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

  memberFields =
[
  {
    "groupTitle": "Personal Information",
    //style:"border: 2px solid #2596be;border-radius:10px 10px 0 0;background-color:#bee0ec;padding:5px;",
    "groupFields": [
      {
        "id": "fName",
        "label": "First Name",
        "type": "text",
        "value": "Crisoforo",
      },
      {
        "id": "mName",
        "label": "Middle Name",
        "type": "text",
        "value": "Alexander"
      },
      {
        "id": "lName",
        "label": "Last Name",
        "type": "text",
        "value": "Lopez",
      }
    ]
  },
  {
    //style:"border: 2px solid #2596be;border-radius:0 0 10px 10px;background-color:#bee0ec;margin-bottom:4px;padding:5px;",
    "groupFields": [
      {
        "id": "dob",
        "label": "Date of Birth",
        "type": "date",
        "icon": "bi bi-calendar3",
      },
      {
        "id": "phone",
        "label": "Phone Number",
        "type": "text",
        "icon": "bi bi-telephone-fill"
      },
      {
        "id": "ssn",
        "label": "SSN",
        "type": "password"
      }
    ]
  }
];

addressFields =
[
  {
    "groupTitle": "Address",
    //style:"border: 2px solid #b71131;border-radius:10px 10px 0 0;background-color:#f8e7ea;padding:5px;",
    "groupFields": [
      {
        "id": "add1",
        "label": "Address",
        "type": "text",
        "value": "123 Street",
      },
      {
        "id": "add2",
        "label": "Apt, suite, etc.",
        "type": "text",
        "value": "Apt 12",
      },
      {
        "id": "city",
        "label": "City",
        "type": "text",
        "value": "Peoria"
      }
    ]
  },
  {
    //style:"border: 2px solid #b71131;border-radius:0 0 10px 10px;background-color:#f8e7ea;margin-bottom:4px;padding:5px;",
    "groupFields": [
      {
        "id": "shipDate",
        "label": "Ship Date",
        "type": "date"
      },
      {
        "id": "state",
        "label": "State/Province",
        "type": "text",
        "value": "OH",
      },
      {
        "id": "country",
        "label": "Country",
        "type": "text",
        "value":"USA"
      },
      {
        "id": "zip",
        "label": "Zip code",
        "type": "text",
        value:"58934"
      }
    ]
  }
];

memberButtons =
[
  {
    "label": "Create Member",
    "type": "submit",
    "action": "save",
    "icon": "bi bi-save"
  },
  {
    "label": "Edit Member",
    "type": "submit",
    "action": "edit",
    "icon": "bi bi-pencil"
  }
];

addressButtons =
[
  {
    "label": "Add Address",
    "type": "submit",
    "action": "save",
    "icon": "bi bi-save"
  },
  {
    "label": "Edit Address",
    "type": "submit",
    "action": "edit",
    "icon": "bi bi-save"
  }
];

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
      console.log("clickEvent>",event);
      let {record,column}=event;
      if(column=='select'){
        let index=this.users.indexOf(record);
        record[column]=!record[column];
        this.users[index]={...record};
      }
    }


}
