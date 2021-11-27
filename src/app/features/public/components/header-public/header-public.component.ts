import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/core/redux/actions/auth.actions';
import { AuthState } from 'src/app/core/redux/reducers/authReducer.reducer';
import { getAuth } from 'src/app/core/redux/selectors/auth.selectors';
import { Link } from '../../../models/link.model';
import { Router } from '@angular/router';
import * as fromFirebaseAuth from "firebase/auth";
import { MatDialog } from '@angular/material/dialog';
import { StandarDialogComponent } from 'src/app/shared/components/standar-dialog/standar-dialog.component';

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
    private router: Router,
    public dialog: MatDialog
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
    
    const auth = fromFirebaseAuth.getAuth();
    fromFirebaseAuth.signOut(auth).then(() => {
      // Sign-out successful.
      this.viewDialog('success', 'La sesión se cerró exitosamente');
      
    }).catch((error) => {
      // An error happened.
      this.viewDialog('error', 'Error al cerrar la sesión');
      
    });

    this.router.navigate(['/home']);

  }

  viewDialog(type: string, msg: string) {
    this.dialog.open(StandarDialogComponent, {
      height: '300px',
      width: '400px',
      data: {
        type: type,
        titleToShow:"",
        messageToShow: msg,
        showButtonsOkCancel: false
      }
    });
  }

}
