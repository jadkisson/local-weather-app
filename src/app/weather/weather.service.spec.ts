import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { WeatherService } from './weather.service'
import { WeatherServiceFake } from './weather.service.fake'

describe('WeatherService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: WeatherService, useClass: WeatherServiceFake }],
    })
  )

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService)
    expect(service).toBeTruthy()
  })
})
