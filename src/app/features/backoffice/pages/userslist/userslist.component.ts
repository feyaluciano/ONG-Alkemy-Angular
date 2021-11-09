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

  usersList: List[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(user:List, index: number){
    console.log('Eliminar: ', user);
    console.log('index del usuario: ', index);
  }

  editUser(user: List){
    console.log('Editar a: ', user);
  }

}
