import MainDashboard from '@views/Dashboard/MainDashboard'
import PerfilDatos from '@views/Perfil/Datos'
import AgendaMensual from '@views/Agenda/Mensual'

const menu = [
    { label: "Dashboard", icon: "dashboard", key: 0, id : 'home', component: MainDashboard },
    { label: "Perfil", icon: "person", key: 1, id : 'profile', component: PerfilDatos },
    { label: "Agenda", icon: "contacts", key: 2, id : 'calendar', component: AgendaMensual },
]

let routes = {}
for(let i in menu){
    let opt = menu[i]
    routes[opt.id] = opt.component
}

export { routes }

export default menu