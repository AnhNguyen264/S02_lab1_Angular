import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exer1';

  varArtise: string;
  varNbrAlbum= 10;


  lstAlbums=["Born Pink", "The Album", "BlackPink2021", "Kill this love"];

  lstConcerts =[
    new Concert("Montreal", "ABC", false),
    new Concert("Laval", "DEF", false),
    new Concert("Brossard", "FEF", true),
    new Concert("Longueuil", "EFT", true)

  ];
  constructor() {
    this.varArtise = "BlackPink";

    
  
  }
}
class  Concert  {
  constructor(public ville :string,public Salle :string,public assister :boolean) {
    
  }
}

