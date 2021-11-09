import { Component, OnInit } from '@angular/core';

interface List {
  name: string;
  email: string;
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
      email: 'email@ejemplo.com'
    },
    {
      name: 'Pedro',
      email: 'pedro_21@hotmail.com'
    },
    {
      name: 'Francisco',
      email: 'francis_23@ejemplo.com'
    },
    {
      name: 'Andrea',
      email: 'andrea21@gmail.com'
    },
    {
      name: 'Damian',
      email: 'dam_23@gmail.com'
    },
    {
      name: 'Analia',
      email: 'ana_50@gmail.com'
    },
    {
      name: 'Marcelo',
      email: 'marcelo@gmail.com'
    },
    {
      name: 'Federico',
      email: 'federodriguez@gmail.com'
    },
    {
      name: 'Gonzalo',
      email: 'gonzalo_97@gmail.com'
    },
    {
      name: 'Sabrina',
      email: 'sabrina_deco@gmail.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
