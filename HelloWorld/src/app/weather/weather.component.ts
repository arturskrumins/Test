import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';

interface WeatherDateRates {
[k: string]: { [k: string]: number }
}

interface WeatherData {
date: string;
temperatureC: string;
temperatureF: string;
summary: string;
weathers: WeatherData;

//base: string;
//end_at: string;
//rates: RateDateRates;
}


@Component({
selector: 'app-weather',
templateUrl: './weather.component.html',
styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
// baseRate = 'EUR';
// symbols = 'USD,GBP';
// weatherData: any;

// weatherData: any;

// startDate: string;
// endDate: string;
// rates: any[];
temperatures: any[];

constructor(private restClient: HttpClient) {}

ngOnInit(): void {
this.restClient
.get<WeatherData>(this.getTemperaturesUrl())
.subscribe((data) => this.processData(data));
}

processData(data: WeatherData): void {
// this.startDate = data.start_at;
// this.endDate = data.end_at;
this.temperatures = Object.entries(data);
// .map(divainiba=>({
// date: divainiba[0],
// temperatureC: divainiba[1],
// temperatureF: divainiba[2],
// summary: divainiba[3]
// }));
}

getTemperaturesUrl(): string {
return environment.temperaturesUrl1;
//.replace('{base}', this.baseRate)
//.replace('{symbols}', this.symbols);
}
}

