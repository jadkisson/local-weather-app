import { Component, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather // = {
  //   city: '',
  //   country: '',
  //   date: 0,
  //   image: '',
  //   temperature: 0,
  //   description: '',
  // }

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService
      .getCurrentWeather('Key West', 'US')
      .subscribe(data => (this.current = data))
  }
}
