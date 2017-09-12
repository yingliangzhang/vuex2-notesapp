import Vue from 'vue'
import store from './store/index'
import App from './components/App.vue'

const app = new Vue({
  store, // inject store to all children
  el: 'app',
  components: { App }
})