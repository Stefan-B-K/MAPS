import { faker } from "@faker-js/faker";

export class User {
    name: string
    location: {
        lat: number
        lon: number
    }

    constructor () {
        this.name = faker.name.firstName() + ' ' + faker.name.lastName()
        this.location = {
            lat: Number(faker.address.latitude()),
            lon: Number(faker.address.longitude())
        }
    }
}