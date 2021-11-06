import "reflect-metadata"
import Vue from 'vue'
import App from './views/layouts/App.vue'
import router from './views/router'
import "./vue/vue-global-variable"

import "./imports/bootstrap"

import Bootstrap from "@/system/Bootstrap";

Vue.config.productionTip = false;

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')


(async () => {

    await (new Bootstrap()).boot()

    new Vue({
                router,
                render: h => h(App)
            }).$mount('#app')

})()
