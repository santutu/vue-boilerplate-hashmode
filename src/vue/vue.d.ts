import {VueRouter} from "vue-router/types/router";

declare module 'vue/types/vue' {
    // 3. Vue에 보강할 내용을 선언하세요.

    interface Vue {
        $isDev : boolean,
        $isProd : boolean,
        $isTest : boolean,
        $test : ()=>void,
        $router: VueRouter,
        $window: jQuery<Window>
    }
}
