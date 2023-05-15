import { createApp } from 'vue'
import App from './App.vue'
// import 'ant-design-vue/dist/antd.css';
createApp(App).mount('#app');
let a = '12'
let b = []
a.replaceAll('1', '3')
b.includes((item) => item === 1)
console.log(a ?? b, '1111111111')

