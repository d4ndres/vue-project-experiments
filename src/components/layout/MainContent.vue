<template lang="pug">
	div
		vm-aside-left
		vm-middel-content
		vm-aside-right

</template>
<script>
import VmAsideLeft from './AsideLeft.vue'
import VmAsideRight from './AsideRight.vue'
import VmMiddelContent from './MiddleContent.vue'

export default {
	components: { VmAsideLeft, VmAsideRight, VmMiddelContent}
}
</script>
<style scoped lang="stylus">

	div
		display flex	
		justify-content center
		flex-direction row
		flex 1
	

		

</style>
