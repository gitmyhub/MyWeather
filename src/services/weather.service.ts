import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
    export class WeatherService {
        apiKey: string;
        conditionsUrl: string;
        searchUrl: string;
        http: Http;
        static get parameters(){
            return [Http];
        }

        constructor(http:Http){
            this.http = http;
            this.apiKey = '29a2f5e0f38d0c5b';
            this.conditionsUrl = 'http://localhost:8100/api/'+this.apiKey+'/conditions/q';
            this.searchUrl = 'http://localhost:8100/search/aq?query=';
            
            console.log('Service Connected...');
        }

        getWeather(zmw){
            return this.http.get(this.conditionsUrl+'/zmw:'+zmw+'.json')
            .map(res => res.json());
        }

        searchCities(searchStr){
            return this.http.get(this.searchUrl+''+searchStr)
            .map(res => res.json());            
        }

    }