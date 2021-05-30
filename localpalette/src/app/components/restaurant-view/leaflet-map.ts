import * as Leaflet from 'leaflet';

const mapView = {
  coords: new Leaflet.LatLng(0, 0),
  zoom: 3
};

/*
 * Author: Markus
 * Klassens oppgave: Arbeide med Leaflet api'et. Lage funksjon for oppretting av kart.
 */

export class LeafletMap {

  /*
   * Definerer to variabler fra Leaflet biblioteket.
   * map: Selve kartet fra leaflet.
   * popup: En popupmarkør som man kan plassere hvor man vil på kartet.
   */
  map: Leaflet.Map;
  popup: Leaflet.Popup;

  /*
   * Konstruktøren tar imot en id, som er id'en
   * til den div'en kartkomponenten skal bruke.
   * Denne div'en er viktig at har en høyde,
   * ellers vil ikke kartet vises på skjermen.
   */
  constructor(id: string) {
    this.map = Leaflet.map(id);

    /*
     * Henter et 'tileset' fra openstreetmap, og bygger kartet.
     * Finnes mange ulike tileset man kan bruke, som er kompatible med Leaflet.
     */
    Leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.map);

    /*
     * Setter viewet til kartet med koordinater og zoom-nivå.
     * Settes i begynnelsen til Latlng(0, 0) med zoom på 3.
     */
    this.map.setView(mapView.coords, mapView.zoom);
  }

  /*
   * Funksjon som sentrerer kartet til koordinatene til en ønsket posisjon.
   * Settes også en default zoom-nivå til 12.
   * Samt et navn som vises på popup'en.
   */
  setCoords(lat: number, lng: number, name: string): void {
    const coords = new Leaflet.LatLng(lat, lng);
    this.map.setView(coords, 12);

    /*
     * Resten av funksjonen lagrer popupen.
     * Optionsvalgene gjør at man ikke kan fjerne popup'en.
     * Dette gjør at vi slipper å håndtere 'state'.
     */
    this.popup = Leaflet.popup(
      {
        closeButton: false,
        closeOnEscapeKey: false,
        closeOnClick: false

      })

      // Setter koordinatene, navnet på popup og velger hvilket kart det skal vises på.
      .setLatLng(coords)
      .setContent(name)
      .openOn(this.map);
  }
}
