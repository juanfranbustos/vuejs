import Vue from 'vue'
import Segunda from '@/components/segunda'

describe('segunda.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Segunda)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Hola2')
  })
})
