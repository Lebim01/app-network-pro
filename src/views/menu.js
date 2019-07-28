import MainDashboard from '@views/Dashboard/MainDashboard'
import PerfilDatos from '@views/Perfil/Datos'

const menu = [
    { label: "Dashboard", icon: "dashboard", key: 0, id : 'home', component: MainDashboard },
    { label: "Perfil", icon: "person", key: 1, id : 'profile', component: PerfilDatos },
]

let routes = {}
for(let i in menu){
    let opt = menu[i]
    routes[opt.id] = opt.component
}

export { routes }

export default menu