export interface Weather {
  latitude: number,
  longitude: number,
  generationtime_ms: number,
  utc_offset_seconds: number,
  timezone: string,
  timezone_abbreviation: string,
  elevation: number,
  hourly_units: {
    time: string,
    temperature_2m: string,
    precipitation_probability: string,
    precipitation: string,
    rain: string,
    windspeed_10m: string
  },
  hourly: {
    time: string[],
    temperature_2m: number[],
    precipitation_probability: number[],
    precipitation: number[],
    rain: number[],
    windspeed_10m: number[]
  }
}