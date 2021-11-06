import Vue from 'vue'
import {IS_DEV, IS_PROD} from "@/constants";
import _ from "underscore"
import $ from "jquery";

Vue.prototype.$isDev = IS_DEV;
Vue.prototype.$isProd = IS_PROD;
Vue.prototype.$window = $(window);

Vue.prototype.$test = function () {

    console.log(_.random(0, 1))
    // console.log('this is test message')
}
