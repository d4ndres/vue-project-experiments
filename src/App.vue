<template lang="pug">
  #app
    vm-header
    vm-main-content
    vm-footer
</template>

<script>
import VmHeader from './components/layout/Header.vue'
import VmMainContent from './components/layout/MainContent.vue'
import VmFooter from './components/layout/Footer.vue'


export default {
  name: 'app',
  components: { VmHeader, VmMainContent, VmFooter },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus">
@import "./css/global.css";

  #app
    display flex
    flex-direction column
    min-height 100vh

  

</style>
