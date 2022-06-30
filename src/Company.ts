import { faker } from "@faker-js/faker";

export class Company {
    name: string
    moto: string
    location: {
        lat: number
        lon: number
    }

    constructor () {
        this.name = faker.company.companyName()
        this.moto = faker.company.catchPhrase()
        this.location = {
            lat: Number(faker.address.latitude()),
            lon: Number(faker.address.longitude())
        }
    }
}