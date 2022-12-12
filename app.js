import { createApp } from 'vue'
import {createRouter, createWebHashHistory}from 'vue-router'

import rutas from '../pruebas/src/rutas.vue'
import App from './App.vue'


// compoentes
const deteail = { templete: '<h1>detalles</h1>'}

// definir objeto rutas -- configuracion
const routes = [{
    path:'/', component: rutas,
},{
    path:'detail', component: deteail,
}
]

// crear objetos rutas de vue router
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//instacia de vue
const app = createApp(App)

app.use(router)

app.mount('#app')

