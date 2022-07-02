import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class User implements Mappable {
    name: string
    location: {
        lat: number
        lng: number
    }
    marked: boolean = false

    constructor () {
        this.name = faker.name.firstName() + ' ' + faker.name.lastName()
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        }
    }

    markerInfo (): string {
        return 'User: ' + this.name
    }
}