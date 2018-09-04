<template>
  <div class="hello">
    <h1 >{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>

    <div id="example-1">
      <button  v-on:click="cambiarEsta()">Hazlo desaparecer</button>
    </div>
  </div>
</template>

<script>

import App from '../App';

/*Vue.component('segunda', {
  data: function () {
    return {
      msg: 'Esto no va ni de cara al aire',
      esta: true,
      counter: 0
    }
  },
  methods: {
    cambiarTitulo: function () {
      this.msg = 'cambia'
      alert(this.msg)
      this.updateMessage();
    },

    updateMessage: function () {
      this.msg = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    }
  }
})*/

export default {
  name: 'Segunda',
  data () {
    return {
      msg: 'Hola2',
      esta: true,
      counter: 0
    }
  },
  methods: {
    cambiarTitulo: function () {
      this.msg = 'cambia'
      alert('lo has hecho bien!')
      this.updateMessage();
    },
    updateMessage: function () {
      this.msg = 'updated'
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    },
    cambiarEsta: function() {
      this.esta = !this.esta
      //Aqui se lanza el evento
      this.$root.$emit('myEvent', this.esta);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  paddding: 10px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
