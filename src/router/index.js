import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import ProductList from '@/views/ProductList.vue'
import Product from '@/views/Product.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/product', component: ProductList },
    { path: '/product/:id', component: Product, props: true }
  ]
})

export default router
