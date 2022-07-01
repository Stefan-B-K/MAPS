//  npm install @faker-js/faker

import { faker } from "@faker-js/faker";

export class Company {
    name: string
    moto: string
    location: {
        lat: number
        lng: number
    }

    constructor () {
        this.name = faker.company.companyName()
        this.moto = faker.company.catchPhrase()
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        }
    }

    markerInfo (): string {
        return `
        <div>
        <h3>Company: ${this.name}</h3>  
         <p>Moto: ${this.moto}</p>
         </div>
        `
    }
}