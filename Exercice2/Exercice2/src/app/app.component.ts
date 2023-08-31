import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercice1';

  varArtiste : string;
  varNbrAlbum = 4;
  lstAllbums = ["Divide", "2steps","Bad habits","Don't"];

  // varNom:string[] =[];
  // s ?:string;
  // addNom():void {
  //   if(this.s !=undefined) {
  //     this.varNom.push(this.s);
  //   }
  // }

  // varPreNom :string[] =[];
  // p ?:string;
  // addPreNom():void {
  //   if(this.p !=undefined) {
  //     this.varPreNom.push(this.p);
  //   }
  // }

  // varAge :number[] =[];
  // a ?:number;
  // addNAge():void {
  //   if(this.a !=undefined) {
  //     this.varAge.push(this.a);
  //   }
  // }
  varNom:string[] =["nguyen"];
  s ?:string;
  varPreNom :string[] =["anh",];
  p ?:string;
  varAge :number[] =[26];
  a ?:number;

  addNom():void {
    if(this.s !=undefined) {
      this.varNom.push(this.s);
    }
    if(this.p !=undefined) {
      this.varPreNom.push(this.p);
    }
    if(this.a !=undefined) {
      this.varAge.push(this.a);
    }
  }

  passeTemps = ["play video game", "play football","listen to music", "reading"];
  t ?:string;

  addHobby():void {
    if(this.t !=undefined) {
      this.passeTemps.push(this.t);
    }
    
  }

  constructor() {
    this.varArtiste = "Ed Sheeran";
  }

}
