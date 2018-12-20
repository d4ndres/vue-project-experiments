<template lang="pug">
	div
		span.name 2018 by D4ndres
		ul
			li 
				span 
					a( target="_blank" href="https://codepen.io/d4ndres/")  codepen
			li 
				span 
					a( href="https://github.com/d4ndres" ) GitHub
			li 
				span 
					a( href="https://d4ndres.github.io/portafolio/") portafolio

</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
	
	div
		background-color #191919
		color #fff
		min-height 5vh
		display flex
		justify-content space-between
		align-items center
	
	.name
		padding-left 20px

	ul 
		list-style none
		padding 0
		

	li
		display inline-block		
		padding 0 10px
		border-right solid 1px 
		
		&:last-child
			
			border-right none 

	a
		text-decoration  none
		color inherit

		&:hover
			color #41B883
		&:active
			color #385B7F
		
</style>
