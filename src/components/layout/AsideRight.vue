<template lang="pug">
	div.main
		h1 {{ artist }}
		figure
			img( :src="tracks[0].album.images[0].url" )
		h3 Otras canciones
		ul
			li( v-for="t in artistsTracks" @click="setTrack( t )")
				span {{ t.name | maxLetters }}

</template>

<script>
import trackService from '@/services/track.js'

export default {
	data(){
		return {
			tracks: [],
			artistsTracks: [],
			artist: '' 
		}
	},
	created (){
		this.$bus.$on('set-artis-track', (artist) => {
			this.artist = artist
		})
	},

	watch: {
		artist(){
			if (! this.artist ) this.tracks = []
			

			trackService.search ( this.artist )
			.then( res => {
					this.tracks = res.tracks.items
				
				})
		},
		tracks() {
			if (! this.artist ) this.tracks = []
			this.artistsTracks = this.tracks.filter( track => track.album.artists[0].name == this.artist )
		}
	},
	methods: {
		setTrack( track ) {
			this.$bus.$emit( 'set-track', track)
		}
	},
	filters: {
		maxLetters ( text ) {
			let max = 50
			return text.split('').splice(0, max).join('')
		}
	}



}
	
</script>

<style scoped lang="stylus">
	.main
		display flex
		flex-direction column
		align-items center
		justify-content flex-start
		max-width 35vw
		
	figure
		width 200px
		
	img
		width 100%
		obeject-fit cover
		
	ul
		list-style none
		padding 0
		max-height 40vh
		overflow auto
		border-top 1px dashed
		
		&::-webkit-scrollbar
			display none
			
	span
		cursor pointer
		text-decoration  none
		color inherit

		&:hover
			color #41B883
		&:active
			color #385B7F

</style>