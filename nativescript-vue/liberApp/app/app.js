import Vue from "nativescript-vue";
import Pager from 'nativescript-pager/vue';

import App from "./components/App";

new Vue({
    render: h => h(App)
}).$start();

Vue.use(Pager);