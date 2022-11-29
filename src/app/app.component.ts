import { Component,  OnInit} from '@angular/core';
import {HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto_web';
  pokemons:any;
  


  constructor(private http: HttpClient){
    this.getpokemons()

  }
  
  

  getpokemons(){
    this.http.get('http://pokeapi.co/api/v2/pokemon/').subscribe((list:any) =>{
      this.pokemons = list.results
      console.log(this.pokemons)
    })
  }
}
