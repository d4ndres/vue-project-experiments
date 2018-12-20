<template lang="pug">
  header.header
    .logo
      figure.figure
        img.img( src='https://vuejs.org/images/logo.png' )
      h1 Vue Music
    h2 Tus mejores canciones

</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
  
  .header
    background: #191919
    color: #fff
    padding 3vh 0
    display flex
    justify-content space-around

  .logo
    display flex
    
    & h1
      display flex
      flex-direction column
      justify-content flex-end
         
  h2
    display flex
    flex-direction column
    justify-content flex-end
      

  .figure
    width: 50px
  .img
    max-width 100%

</style>
