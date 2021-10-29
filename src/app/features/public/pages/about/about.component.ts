import { Component, OnInit } from '@angular/core';
import { Datum } from 'src/app/core/interfaces/httpResponse.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title: string = 'nosotros';

  imgUrl: string = 'assets/slides1.jpg';  
  
  us: string = `
  Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás,
  abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de
  inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y
  las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos. 
  Somos una asociación civil sin fines de lucro que se creó en 1997 con la intención de
  New Caso 1: ONG - Somos Más. 2
  dar alimento a las familias del barrio. Con el tiempo fuimos involucrándonos con la
  comunidad y agrandando y mejorando nuestra capacidad de trabajo. Hoy somos un
  centro comunitario que acompaña a más de 700 personas a través de las áreas de:
  Educación, deportes, primera infancia, salud, alimentación y trabajo social.
  `;

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

  constructor() { }

  ngOnInit(): void {
  }

}
