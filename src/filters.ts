import Vue from 'vue'

Vue.filter('shortAddress', (v: string) => {
  return v.substring(0, 6) + '......' + v.substring(v.length - 5, v.length - 1)
})