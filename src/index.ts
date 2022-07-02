import { User } from "./User";
import { Company } from "./Company";
import { Map } from "./Map";


const user = new User()
const company = new Company()

const userButton = document.querySelector('#user') as HTMLButtonElement
const userInfo  = userButton.querySelector('.card-content ') as HTMLLabelElement
userInfo.innerHTML +=`<u>User:</u> <h4>${user.name}</h4>`
const companyButton = document.querySelector('#company') as HTMLButtonElement
const companyInfo  = companyButton.querySelector('.card-content ') as HTMLLabelElement
companyInfo.innerHTML += `<u>Company:</u> <h4>${company.name}</h4>`
userButton.onclick = () => map.centerView(user)
companyButton.onclick = () => map.centerView(company)

const reloadButton = document.querySelector('#reload ') as HTMLButtonElement
reloadButton.onclick = () => location.reload()
const reloadPopup = document.querySelector('.reload-popup') as HTMLElement
reloadButton.onmouseover = () => reloadPopup.classList.add('popup-show')
reloadButton.onmouseleave = () => reloadPopup.classList.remove('popup-show')
const map = new Map('map', user.location)

