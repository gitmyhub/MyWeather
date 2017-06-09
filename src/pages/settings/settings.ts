import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherService } from '../../services/weather.service';
import { OnInit } from '@angular/core';
import { WeatherPage } from '../weather/weather';

@Component({
  selector: 'settings-home',
  templateUrl: 'settings.html',
  providers: [WeatherService]
})
export class SettingsPage implements OnInit{
   defaultCity: string;
  state: string;
  weather: any;
  searchStr: string;
  results: any;
  zmw: string;   

  constructor(public navCtrl: NavController, private _WeatherService: WeatherService) {
        this.defaultCity;
        this.state;
        this.weather;
        this.searchStr;
        this.results = [];
        this.zmw;
  }

ngOnInit(){
  this.getDefaultCity();
}

getDefaultCity(){
  if(localStorage.city !== undefined){
    this.defaultCity = JSON.parse(localStorage.city).name;
  }else{
  this.defaultCity = '';
  }
}
  
  getQuery(){
    this._WeatherService.searchCities(this.searchStr).subscribe(
      res => {
          this.results = res.RESULTS;
      });
  }

  setDefaultCity(city){
    this.results = [];
    if(typeof(Storage) !== undefined){
      localStorage.city = JSON.stringify(city);
      this.searchStr = city.name;
      this.getDefaultCity();
    }else{
        console.log("Storage not supported");
    }
  }

  saveChanges(){
    this.navCtrl.parent.select(0);
  }

}
