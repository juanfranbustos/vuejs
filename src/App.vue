<template  >
  <div id="app" >
    <Header></Header>
    <transition name="fade">
    <img v-if="esta" src="./assets/logo.png" id="foto">
    </transition>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header';
import Footer from '@/components/footer';

export default {
  name: 'App',
  data () {
    return {
      esta: true
    }
  },
  components: {
    Header,
    Footer
  },
  //Aqui se escucha el evento lanzado por el otro componente
  mounted: function () {
    this.$root.$on('myEvent', (text) => { // here you need to use the arrow function
     this.esta = text;
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /*margin-top: 60px;*/
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
