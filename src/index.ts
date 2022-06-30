import {User} from './User'
import { Company } from "./Company";

const user = new User()
const company = new Company()
alert(`
${user.name}
${user.location.lat}, ${user.location.lon}
working at:
${ company.name }
"${ company.moto }"
${ company.location.lat }, ${ company.location.lon }
`)