<template>
    <div class="w-container">
        <div class="w-side-bar">
            <img class="logo" alt="logo" src="./assets/logo.png">
            <h1 class="w-title">Wouerner Brandão</h1>
                <ul class="w-menu">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/contact" class="nav-link">Contato</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/study" class="nav-link">Formação</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/experience" class="nav-link">Experiencias</router-link>
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
body{
    background-color: #373a40;
    min-height: 100vh;
    margin: 0;
    font-family: 'Fira Sans', sans-serif;
}

a {
     text-decoration: none;
     color: #19d3da;
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
.w-side-bar{
background-color: #686d76;
height: 100%;
padding: 5px;
}
.w-title{
font-size:22px;
}
.w-menu {
 list-style: none;
 padding: 0;
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
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    height: 100vh;
}
</style>
