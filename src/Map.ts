// npm i @types/node
//  npm install @types/heremaps

export interface Mappable {
    location: {
        lat: number
        lng: number
    },

    markerInfo (): string

    color: string
}

export class Map {
    private platform: H.service.Platform
    private defaultLayers: H.service.DefaultLayers
    private hereMap: H.Map
    private behavior: H.mapevents.Behavior
    private ui: H.ui.UI
    private markerGroup: H.map.Group

    constructor (divID: string, { lat, lng }: { lat: number, lng: number }) {
        this.platform = new H.service.Platform({
            apikey: process.env.API_KEY
        })
        this.defaultLayers = this.platform.createDefaultLayers()
        this.hereMap = new H.Map(document.getElementById(divID), this.defaultLayers.vector.normal.map, {
            zoom: 5,
            center: { lat, lng },
            pixelRatio: window.devicePixelRatio || 1
        });
        this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.hereMap));
        this.ui = H.ui.UI.createDefault(this.hereMap, this.defaultLayers)
        this.markerGroup = new H.map.Group()

        window.addEventListener('resize',  () => {
            this.hereMap.getViewPort().resize();
        })

        this.setInfoBubble()

        this.hereMap.getViewPort().resize()     // bug workaround
    }

    addMarker (entity: Mappable): void {
        const { lat, lng } = entity.location
        const newMarker = new H.map.Marker({ lat, lng });
        newMarker.setData(entity.markerInfo())
        this.hereMap.addObject(newMarker);
        this.markerGroup.addObject(newMarker)
    }

    private setInfoBubble (): void {
        this.hereMap.addObject(this.markerGroup);
        this.markerGroup.addEventListener('tap', event => {
            const markerTap = event.target as unknown as H.map.Marker
            const bubble = new H.ui.InfoBubble(markerTap.getGeometry() as H.geo.IPoint, {
                content: markerTap.getData()
            });
            this.ui.addBubble(bubble);
        }, false);
    }
}



