<template>
  <b-row>
    <b-col class="m-3">
      <div>
        <h3>
          <span class="bd-content-title">Search Options</span>
        </h3>
      </div>
      <div class="text-left">
        <h4>
          <span class="bd-content-title sourceText">Sources</span>
        </h4>
        <b-form-checkbox v-model="checkIndeed">Indeed</b-form-checkbox>
        <b-form-checkbox v-model="checkLinked">LinkedIn</b-form-checkbox>
      </div>
    </b-col>
    <b-col cols="8">
      <div id="map" class="map"></div>
    </b-col>
  </b-row>
</template>

<script>
import * as L from "leaflet";
import MapHelper from "../helper/MapHelper";

export default {
  name: "Map",
  props: {},
  data: function() {
    return {
      map: null,
      tileLayer: null,
      checkIndeed: true,
      checkLinked: false,
      layers: []
    };
  },
  mounted() {
    this.prepareMap();
  },
  methods: {
    createMap() {
      var lat = 50.0755381;
      var long = 14.43780049999998;
      return L.map("map").setView([lat, long], 5);
    },
    prepareMap() {
      const token =
        "pk.eyJ1IjoiZ3JrbnlsbXoiLCJhIjoiY2p2amRxMzY2MGVjYzQ0czJlczA0Y3lvbCJ9.jCSAcrC2QB2aJ4VAERlmRQ";
      this.map = this.createMap();

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token={access_token}",
        {
          maxZoom: 7,
          minZoom: 3,
          id: "mapbox.light",
          access_token: token
        }
      ).addTo(this.map);

      const mapHelper = new MapHelper(L, this.map);
      mapHelper.createMarkers();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.map {
  height: 600px;
  width: 100%;
}

.sourceText {
  color: coral;
}
</style>
