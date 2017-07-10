
import Vue from 'vue';
import '../font/css/font-awesome.min.css'
import ZtButton from '../packages/button/index.js'
Vue.use(ZtButton);
new Vue({
    el: '#app',
    methods:{
        clickaa(){
            alert(111)
        }
    }
});