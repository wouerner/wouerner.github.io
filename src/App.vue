<template>
    <div class="w-container">
        <div class="w-side-bar">
            <img class="logo animate__animated animate__bounce" alt="logo" src="./assets/logo.png">
            <h1 class="w-title">Wouerner Brandão</h1>
            <ul class="w-menu">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">
                        <i class="fas fa-home"></i> Inicio 
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link">
                        <i class="far fa-envelope"></i> Contato
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/study" class="nav-link">
                        <i class="fas fa-user-graduate"></i> Formação
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/experience" class="nav-link">
                        <i class="far fa-gem"></i> Experiências
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="w-content">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
:root {
  --white: #eeeeee;
  --black: #373a40;
  --primary: #19d3da;
  --secondary: #686d76;
}

body {
    background-color: #373a40;
    min-height: 100vh;
    margin: 0;
    font-family: 'Fira Sans', sans-serif;
}

a {
     text-decoration: none;
     color: var(--primary);
}

i {
     color: var(--primary);
}

#app {
    font-family: 'Fira Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #eeeeee;
    /*  margin-top: 60px;*/
    height: inherit;
}

.w-side-bar {
    background-color: #686d76;
    height: 100%;
    padding: 5px;
}

.w-title {
    font-size:22px;
}

.w-menu {
    list-style: none;
    padding: 0;
}

.w-menu li {
    border-bottom: 1px solid var(--white);
}
.w-menu li:first-child {
    border-top: 1px solid var(--white);
}

.w-menu li:hover {
    background-color: var(--black);
}

.w-menu a {
    display:block;
    padding-top: 10px;
    padding-bottom: 10px;
}

.w-content {
    padding: 5px;
}

.logo {
    width: 100px;
    border-radius: 100%;

}

.w-container{
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: auto;
    height: 100vh;
}
</style>
