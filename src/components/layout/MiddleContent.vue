<template lang="pug">
	div.main
		div.name-song
			p {{ track.name ? track.name : 'cancion' }}
		figure
			img( :src="track.album.images[0].url" )
		
		div.description
			figure
				img( :src="track.album.images[0].url" )
			div.name-artist
				p {{ track.name ? track.album.artists[0].name : 'Artista' }}
				div.time
					span {{ track.duration_ms }}
		a.link( target="_blank" :href="theLink" )
			p go to spotify

		div.player
			audio(
				controls
				autoplay
				:src="track.preview_url")
</template>

<script>

export default{
	data() {
		return{
			track: {}
		}
	},
	created (){
		this.$bus.$on('set-track', (track) => {
			this.track = track
		})
	},
	computed: {
		theLink () {
			return this.track.uri.replace("spotify:track:", "https://open.spotify.com/track/");
		}
	}
		
}
</script>

<style scoped lang="stylus">
	.main
		display flax
		flex-direction column
		align-items center
		padding 10px
		border-left 1px solid #000
		border-right 1px solid #000
		max-width 30vw


	.name-song
		font-size 1.8rem
		
	
	.name-artist
		padding-left 10px
		
	figure
		width 300px
		
	img
		width 100%
		obeject-fit cover
		
	.description
		display flex
		margin 10px 0 0 0
		align-self flex-start
		

		figure
			width 50px
			
	.link
		text-decoration  none
		// padding 1px 
		color inherit
		// text-align end

		&:hover
			color #41B883
		&:active
			color #385B7F
</style>


