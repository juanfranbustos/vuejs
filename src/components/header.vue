<template>
    <div class="header">
      <h1>Vue js, un framework del futuro</h1>
    </div>
</template>

<script>

export default {
  name: 'Header',
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
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: rgb(202, 224, 248);
  height: 150px;
  width: 100%;
  margin-top: 0;
}
</style>
