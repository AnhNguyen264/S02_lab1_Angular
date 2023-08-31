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


  lstAlbums=["Born Pink", "The Album", "BlackPink2021", "Kill this love"]
  constructor() {
    this.varArtise = "BlackPink";

    
  
  }


}
