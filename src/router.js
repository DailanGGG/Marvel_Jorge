import Vue from "vue"
import Router from "vue-router"
import Characters from "./components/SuperHero"
//import CountryDetail from "./components/CountryDetail"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Characters',
            component: Characters
        }
 /*       {
            path: '/:alpha3Code/details',
            name: 'country-detail',
            component: CountryDetail,
            props: true
        }*/
    ]
})