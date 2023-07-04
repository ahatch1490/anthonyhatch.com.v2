import './assets/main.css'
import './index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {  faStackOverflow, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faPhone);
library.add(faStackOverflow);
library.add(faLinkedin, faGithub);
import App from './App.vue'
import router from './router'

const app = createApp(App)
 app.component("font-awesome-icon", FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
