import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherService } from '../../services/weather.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'weather-home',
  templateUrl: 'weather.html',
  providers: [WeatherService]
})
export class WeatherPage implements OnInit{
  city: string;
  state: string;
  weather: any;
  searchStr: string;
  results: any;
  zmw: string;

  constructor(public navCtrl: NavController, private _WeatherService: WeatherService) {
        this.city = 'Boston';
        this.state = 'MA';
        this.weather;
        this.searchStr;
        this.results;
        this.zmw;
  }

  ngOnInit(){
    this.getDefaultCity();
    this._WeatherService.getWeather(this.zmw).subscribe(
      weather => {
        this.weather = weather.current_observation;
      });
  }

    ionViewWillEnter(){
    this.getDefaultCity();
    this._WeatherService.getWeather(this.zmw).subscribe(
      weather => {
        this.weather = weather.current_observation;
      });   
  }

  getQuery(){
    this._WeatherService.searchCities(this.searchStr).subscribe(
      res => {
        this.results = res.RESULTS;
        console.log(this.results);
      });    
  }

  chooseCity(city){
    console.log('choose city called with: '+city);
      this.results = [];
      this._WeatherService.getWeather(city.zmw).subscribe(
      weather => {
        this.weather = weather.current_observation;
      });    
  }

  getDefaultCity(){
    if(localStorage.city !== undefined){
      this.zmw = JSON.parse(localStorage.city).zmw;
    }else{
      this.zmw = "31003.1.99999";
    }
  }

  reset(){
    console.log('On Blur triggerd...');
    this.results = [];
  }
  
}
