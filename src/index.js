import Vue from "vue";
import App from "./App.vue"
import store from "./vuex/store";
import router from "./router/router";

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')