import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agm-comp',
  templateUrl: './agm-comp.component.html',
  styleUrls: ['./agm-comp.component.css']
})
export class AgmCompComponent implements OnInit {

  lat = 39.668;
  lng = -98.62;

  selectedMarker = null;

  marker = { lat: this.lat, lng: this.lng, alpha: 1 };
/*
  markers = [
    // These are all just random coordinates from https://www.random.org/geographic-coordinates/
    { lat: 22.33159, lng: 105.63233, alpha: 1 },
    { lat: 7.92658, lng: -12.05228, alpha: 1 },
    { lat: 48.75606, lng: -118.859, alpha: 1 },
    { lat: 5.19334, lng: -67.03352, alpha: 1 },
    { lat: 12.09407, lng: 26.31618, alpha: 1 },
    { lat: 47.92393, lng: 78.58339, alpha: 1 }
  ];

  addMarker(lat: number, lng: number) {
    console.log("lat is "+lat+" and lng is "+lng)
    this.markers.push({ lat, lng, alpha: 0.4 });
  }
*/

  moveMarker(lat: number, lng: number) {
    console.log("moveMarker: new lat is "+lat);
    console.log("moveMarker: new lng is "+lng);
    this.marker.lat = lat;
    this.marker.lng = lng;
  }

  dragMarker(lat: number, lng: number) {
    console.log("dragMarker: new lat is "+lat);
    console.log("dragMarker: new lng is "+lng);
    this.marker.lat = lat;
    this.marker.lng = lng;
  }

  /*
  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }
*/
  /*
  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }
*/

selectMarker(event) {
  this.marker.lat = event.latitude;
  this.marker.lng = event.longitude;
}
  

  ngOnInit() {

  }
}
