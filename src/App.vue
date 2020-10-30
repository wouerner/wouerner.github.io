<template>
    <div class="w-container">
        <div>
            <img alt="Vue logo" src="./assets/logo.png">
            <h1>Wouerner Brandão</h1>
            <div class="navbar-nav mr-auto">
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
            </div>
        </div>
        <div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
body{
background-color: black;
}

.w-container{
    display: grid;
    grid-template-columns: auto auto;
    /*grid-template-rows: 25% 100px auto;*/
}
</style>
