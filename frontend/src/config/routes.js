import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../components/Home/MyContainer'
import Movimentacoes from '../components/Movimentacoes/MyMovimentacoes'
import Relatorios from '../components/Relatorios/MyRelatorios'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },

    {
        name: 'Movimentacoes',
        path: '/movimentacoes',
        component: Movimentacoes
    },

    {
        name: 'Relatorios',
        path: '/relatorios',
        component: Relatorios
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router