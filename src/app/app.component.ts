import {  Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Datum, HTTPResponse } from 'src/app/core/interfaces/httpResponse.interface';
import { HttpService } from './core/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  public originUrl:String="/home";

 data: Datum[] = [
    {
      id: 555,
      name: "Programas Educativos",
      description: `Mediante nuestros programas educativos, buscamos incrementar la capacidad
      intelectual, moral y afectiva de las personas de acuerdo con la cultura y las normas de
      convivencia de la sociedad a la que pertenecen.
      `,
      image: "assets/slides1.jpg",
      order: 5367446,
      user_id: null,
      created_at: "2021-09-12T16:45:10.000000Z",
      updated_at: "2021-09-12T16:45:10.000000Z",
      deleted_at: null,
      group_id: null
  },
  {
    id: 999,
    name: "Segundo Slide",
    description: "Texto de relleno.",
    image: null,
    order: 5367446,
    user_id: null,
    created_at: "2021-09-12T16:45:10.000000Z",
    updated_at: "2021-09-12T16:45:10.000000Z",
    deleted_at: null,
    group_id: null
},
{
  id: 888,
  name: "Apoyo Escolar para el nivel Primario",
  description: `El espacio de apoyo escolar es el corazón del área educativa. Se realizan los talleres
  de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno, Los sábados
  también se realiza el taller para niños y niñas que asisten a la escuela doble turno.
  Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos
  necesitan atención especial! Actualmente se encuentran inscriptos a este programa
  150 niños y niñas de 6 a 15 años. Este taller está pensado para ayudar a los alumnos
  con el material que traen de la escuela, también tenemos una docente que les da
  clases de lengua y matemática con una planificación propia que armamos en Manos
  para nivelar a los niños y que vayan con más herramientas a la escuela.
  `,
  image: "assets/slides3.jpg",
  order: 5367446,
  user_id: null,
  created_at: "2021-09-12T16:45:10.000000Z",
  updated_at: "2021-09-12T16:45:10.000000Z",
  deleted_at: null,
  group_id: null
},
{
  id: 888,
  name: "Apoyo Escolar Nivel Secundaria",
  description: `Del mismo modo que en primaria, este taller es el corazón del área secundaria. Se
  realizan talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el
  contraturno. Actualmente se encuentran inscriptos en el taller 50 adolescentes entre 13
  y 20 años. Aquí los jóvenes se presentan con el material que traen del colegio y una
  docente de la institución y un grupo de voluntarios los recibe para ayudarlos a estudiar
  o hacer la tarea. Este espacio también es utilizado por los jóvenes como un punto de
  encuentro y relación entre ellos y la institución. 
  `,
  image: "assets/slides2.jpg",
  order: 5367446,
  user_id: null,
  created_at: "2021-09-12T16:45:10.000000Z",
  updated_at: "2021-09-12T16:45:10.000000Z",
  deleted_at: null,
  group_id: null
}
  ];

  constructor(private router:Router,private route:ActivatedRoute, private http: HttpService ){}        
  ngOnInit(){
    //ACA ME FALTA OBTENER LA RUTA ACTUAL
    this.originUrl="/home"

  }    
}
