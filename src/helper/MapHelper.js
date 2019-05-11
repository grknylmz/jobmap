import countries from "../assets/countries";

export default class MapHelper {
  constructor(L, map) {
    this.L = L;
    this.map = map;
    this.countries = countries;
  }
  createMarkers() {
    return new Promise(() => {
      this.countries.forEach(country => {
        this.L.marker(country.latlng).addTo(this.map);
      });
    });
  }
}
