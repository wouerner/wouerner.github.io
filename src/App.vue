<template>
    <div class="w-container">
        <div class="w-side-bar">
            <div>
            <span class="block">
                <img class="logo-img" alt="logo" src="./assets/logo.png">
            </span>
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
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 5px;
}

.w-side-bar > div{
    display:block;
    height: max-content;
    width: 100%;
    align-self: center;
    background-color: var(--secondary);
    border-radius: 10px;
}

.w-title {
    font-size:22px;
}

.w-menu {
    list-style: none;
    padding: 0;
display: block;
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

.logo-img {
    width: 100px;
    border-radius: 100%;
    z-index: 1;
    position: relative;
}

/*@keyframes blink{
    0%{opacity: 0;}
    50%{opacity: .5;}
    100%{opacity: 1;}
}*/

.block {
    display:block;
    position: relative;
    margin: 0 auto;
    margin-top: 25px;
    /*margin: 300px auto 0;*/

    width: 100px;
    border-radius: 100%;

    width: 100px;
    height: 100px;
    background: linear-gradient(0deg, #000, #272727);
}

.block:before  {
    border-radius: 100%;
    content: '';
    position: absolute;
    left: -2px;
    top: -1px;
    background: linear-gradient(45deg, var(--white), var(--primary));
    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: steam 2s linear infinite;
}

@keyframes steam {
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 100% 0;
        /*background-position: 400% 0;*/
    }
    100% {
        background-position: 0 0;
    }
}

.block:before {
    filter: blur(25px);
}

.w-container{
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: auto;
    height: 100vh;
}
</style>
