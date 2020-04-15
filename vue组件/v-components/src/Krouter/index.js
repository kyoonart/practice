// 实现hash模式的vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
class VueRouterx {
    constructor(options) {
        this.$options = options,
            this.app = new Vue({
                data: {
                    current: '/'
                }
            })
    }
    init() {
        this.bindEvents(); //监听url的变化
        this.createRouterMap(); //解析路由配置
        this.initComponent() //实现两个组件
    }
    bindEvents() {
        window.addEventListener('load', this.onHashChange.bind(this));
        window.addEventListener('hashchange', this.onHashChange.bind(this));
    };
    createRouterMap(options) {
        options.routers.forEach(item => {
            this.routerMap[item.path] = item.component
        });
    };
    initComponent() {
        Vue.component('router-link', {
            props: { to: String },
            render(h) {
                return h('a', { attrs: { href: '#' + this.to } }, [
                    this.$slots.defalut
                ]);
            },
        });
        Vue.component('router-view', {
            render: (h) => {
                const comp = this.routerMap[this.app.current];
                console.log(this.routerMap[this.app.current].component);
                return h(comp)
            },
        })
    };
    onHashChange() {
        this.app.current = window.location.hash.slice(1) || '/';
    }

}

VueRouterx.install = function(Vue) {
    // 混入
    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
                this.$options.router.init()
            }
        },
    })

}
Vue.use(VueRouterx)
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }

]

const router = new VueRouter({
    routes
})

export default router