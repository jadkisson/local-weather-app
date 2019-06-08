import { Component } from '@angular/core'
import { ICurrentWeather } from './interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentWeather: ICurrentWeather
  constructor() {}
}
