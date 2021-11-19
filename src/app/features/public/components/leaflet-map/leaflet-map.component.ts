import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import * as L from "leaflet";
import { environment } from "src/environments/environment";
import { tileLayer } from "leaflet";
import "mapbox-gl-leaflet";
import { HttpService } from "src/app/core/services/http.service";
import { Organization } from "src/app/features/models/organization.interface";
import { HTTPResponse } from "src/app/features/models/HTTPResponse";
import { StandarDialogComponent } from "src/app/shared/components/standar-dialog/standar-dialog.component";
import { MatDialog } from "@angular/material/dialog";
@Component({
  selector: "app-leaflet-map",
  templateUrl: "./leaflet-map.component.html",
  styleUrls: ["./leaflet-map.component.scss"],
})
export class LeafletMapComponent implements OnInit {
  public ong!: HTTPResponse<Organization>;
  public latLng: string[] = [];
  public lat!: number;
  public lng!: number;

  //public otroLatLng={lat:-34.55881726737178,lng:-58.47476996280374};
  public otroLatLng = {};

  constructor(private http: HttpService,public dialog: MatDialog) {}

  getCoords() {
    this.http
      .get(`${environment.apiUrl}/organization`)
      .subscribe((resp: any) => {
        this.ong = resp;
        let coords = this.ong.data.address?.replace("[", "").replace("]", "");
        this.latLng = coords!.split(",");
        this.lat = Number(this.latLng[0]);
        this.lng = Number(this.latLng[1]);
        this.otroLatLng = { Lat: this.latLng[0], Lng: this.latLng[1] };
        this.draw();
      },
      (error)=>{
        let errorMessage="";           
          switch(error.status) { 
            case 404: { 
              errorMessage="Error al obtener la actividad"; 
               break; 
            } 
            case 401: {  
              errorMessage="Usted no esta autorizado para acceder a este recurso";
               break; 
            } 
            default: { 
              errorMessage="Error desconocido";
               break; 
            } 
         }    
        
         let dialogRef = this.dialog.open(StandarDialogComponent, {
          height: '300px',
          width: '400px',
          data: {type: "error", titleToShow:"",messageToShow: errorMessage,showButtonsOkCancel:false},
        });            
        dialogRef.afterClosed().subscribe(result => {
          console.log(`if it is ok, the user press accept: ${result}`); 
        });
    
    



      }
      
      );
  }

  async ngOnInit() {
    const req = this.getCoords();
    const resp = await req;
  }
  draw() {
    var ongIcon = L.icon({
      iconUrl: "assets/images/logo-marker.png",
      iconSize: [100, 59],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
    });
    var map = L.map("map", {
      center: [this.lat, this.lng],
      zoom: 14,
      zoomAnimation: true,
      zoomControl: false,
    });

    tileLayer("https://tile.osm.ch/switzerland/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    let marker = L.marker([Number(this.latLng[0]), Number(this.latLng[1])], {
      icon: ongIcon,
      draggable: true,
    });

    marker
      .bindPopup("<b>Bienvenido a Somos Mas: La Cava!</b><br>Te esperamos")
      .openPopup();

    marker.addTo(map);
  }
}
