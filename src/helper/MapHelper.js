import countries from "../assets/countries";
import icon from "leaflet/dist/images/marker-icon.png";
import dot from "../assets/dot.png";

export default class MapHelper {
  constructor(L, map) {
    this.L = L;
    this.map = map;
    this.countries = countries;
    this.configureIcon();
  }
  configureIcon() {
    let DefaultIcon = this.L.icon({
      iconUrl: dot,
      shadowUrl: "",
      iconSize: 15
    });
    this.L.Marker.prototype.options.icon = DefaultIcon;
  }
  createMarkers() {
    return new Promise(() => {
      this.countries.forEach(country => {
        let marker = this.L.marker(country.latlng)
          .bindPopup(country.name)
          .addTo(this.map);
      });
      this.openPopups();
    });
  }
}
