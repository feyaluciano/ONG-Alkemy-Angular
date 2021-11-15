import { Component, OnInit } from '@angular/core';

interface List {
  name: string;
  email: string;
  id: number;
}

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {


  // change for :User[]
  usersList: List[] = [];

  totalCount: number = 10;
  loader: boolean = true;

  constructor() { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.loader = false;
      this.usersList = [
        {
          name: 'Franco',
          email: 'email@ejemplo.com',
          id: 12
        },
        {
          name: 'Pedro',
          email: 'pedro_21@hotmail.com',
          id: 1298
        },
        {
          name: 'Francisco',
          email: 'francis_23@ejemplo.com',
          id: 12222
        },
        {
          name: 'Andrea',
          email: 'andrea21@gmail.com',
          id: 1211
        },
        {
          name: 'Damian',
          email: 'dam_23@gmail.com',
          id: 1232
        },
        {
          name: 'Analia',
          email: 'ana_50@gmail.com',
          id: 1276
        },
        {
          name: 'Marcelo',
          email: 'marcelo@gmail.com',
          id: 1222
        },
        {
          name: 'Federico',
          email: 'federodriguez@gmail.com',
          id: 124
        },
        {
          name: 'Gonzalo',
          email: 'gonzalo_97@gmail.com',
          id: 123
        },
        {
          name: 'Sabrina',
          email: 'sabrina_deco@gmail.com',
          id: 122
        }
      ];
    },2000);
  }

  // Change :List for :User
  deleteUser(user:List, index: number){

    // HTTP DELETE
    
    
  }

  // Change :List for :User
  editUser(user: List){

    // Inject Router 
    // navigate(... user.id)
    
    
  }

}
