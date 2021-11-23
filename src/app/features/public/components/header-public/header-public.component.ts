import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/core/redux/actions/auth.actions';
import { AuthState } from 'src/app/core/redux/reducers/authReducer.reducer';
import { getAuth } from 'src/app/core/redux/selectors/auth.selectors';
import { Link } from '../../../models/link.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.scss']
})
export class HeaderPublicComponent implements OnInit {

  loggedIn:boolean=false;
  links: Link[];
  authentication$: Observable<boolean>;

  constructor(
    private store: Store<AuthState>,
    private router: Router
  ) {
    this.links = [
      {
        route: '/home',
        text: 'Inicio',
        renderize: true
      },
      {
        route: '/nosotros',
        text: 'Nosotros',
        renderize: true
      },
      {
        route: '/contacto',
        text: 'Contacto',
        renderize: true
      },
      {
        route: '/actividades',
        text: 'Actividades',
        renderize: false
      },
      {
        route: '/novedades',
        text: 'Novedades',
        renderize: false
      },
      {
        route: '/testimonios',
        text: 'Testimonios',
        renderize: false
      },
      {
        route: '/donar',
        text: 'Contribuye',
        renderize: false
      }
    ];

    this.authentication$ = this.store.pipe(select(getAuth));
    
    this.authentication$.subscribe( auth => {

      this.loggedIn = auth;

      if(!this.loggedIn) {
        for (let link of this.links) {
          if (
            link.route === '/actividades' ||
            link.route === '/novedades' ||
            link.route === '/testimonios' ||
            link.route === '/donar'
          ) {
            link.renderize = false;
          }
        }
      }

      if (this.loggedIn) {
        for (let link of this.links) {
          link.renderize = true;
        }
      }

    });
  }

  ngOnInit() {}

  logOut(){

    this.store.dispatch(logout());

    this.router.navigate(['/home']);

  }

}
