import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';
@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  private map!: L.Map;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const myAPIKey = "a7e6669baf25451496e3386e0241af4e";
    const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

    const initialState = {
      lng: 11,
      lat: 49,
      zoom: 4
    };

    const map = new L.Map(this.mapContainer.nativeElement).setView(
      [initialState.lat, initialState.lng],
      initialState.zoom
    );

    // the attribution is required for the Geoapify Free tariff plan
    map.attributionControl
      .setPrefix("")
      .addAttribution(
        'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
      );

    L.mapboxGL({
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      accessToken: "pk.eyJ1IjoiZmV5YWx1Y2lhbm9yZWdpc3Ryb3MiLCJhIjoiY2t3NTJ6YWlrODg1dzJ1bnV6OWE5NTlwdyJ9.aGV_E3EBP02RklX6B3UpDw"
    }).addTo(map);
  }
}
