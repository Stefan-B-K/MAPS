// npm i @types/node
//  npm install @types/heremaps

interface Mappable {
    location: {
        lat: number
        lng: number
    }
}

const API_KEY = process.env.API_KEY

export class Map {
    private platform: H.service.Platform
    private defaultLayers: H.service.DefaultLayers
    private hereMap: H.Map
    private behavior: H.mapevents.Behavior
    private ui: H.ui.UI

    constructor (divID: string, { lat, lng }: { lat: number, lng: number }) {
        this.platform = new H.service.Platform({
            apikey: API_KEY
        })
        this.defaultLayers = this.platform.createDefaultLayers()
        this.hereMap = new H.Map(document.getElementById(divID), this.defaultLayers.vector.normal.map, {
            zoom: 3,
            center: { lat, lng },
            pixelRatio: window.devicePixelRatio || 1
        });
        this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.hereMap));
        this.ui = H.ui.UI.createDefault(this.hereMap, this.defaultLayers)

        this.hereMap.getViewPort().resize()     // bug workaround
    }

    addMarker (entity: Mappable) {
        const { lat, lng } = entity.location
        const newMarker = new H.map.Marker({ lat, lng });
        this.hereMap.addObject(newMarker);
    }
}



