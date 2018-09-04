<template>
    <div class="footer">
      <h5>Creado y editado por Juan Fco Bustos</h5>
    </div>
</template>

<script>

export default {
  name: 'Footer',
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
.footer {
  background: rgb(202, 224, 248);
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>
