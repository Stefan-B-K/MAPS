import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";


const user = new User()
const company = new Company()

const userButton = document.querySelector('#user') as HTMLButtonElement
const userInfo  = userButton.querySelector('.card-content ') as HTMLLabelElement
userInfo.innerHTML += 'User: <br>' + user.name
const companyButton = document.querySelector('#company') as HTMLButtonElement
const companyInfo  = companyButton.querySelector('.card-content ') as HTMLLabelElement
companyInfo.innerHTML += 'Company: <br>' + company.name
userButton.onclick = () => map.centerView(user)
companyButton.onclick = () => map.centerView(company)

const reloadButton = document.querySelector('#reload ') as HTMLButtonElement
reloadButton.onclick = () => location.reload()

const map = new Map('map', user.location)

