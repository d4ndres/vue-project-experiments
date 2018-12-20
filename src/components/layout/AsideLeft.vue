<template lang="pug">
	div.main
		div
			div.search
				input(v-model="searchQuery" type="text" placeholder="Busca Canciones" )
				button(@click="clearTracksList") &times
			
			div.tracks-list
				div.track( v-for="t in tracks" @click="setTrack(t)")
					figure
						img( :src="t.album.images[0].url" )
					div
						p 
							strong {{ t.name | maxLetters}}
						p {{ t.album.artists[0].name }}

			div.more-tracks( v-show=" true " ) V

</template>
<script>
	import trackService from '@/services/track.js'

	export default {
		data(){
			return {
				tracks: [],
				searchQuery: ''

			}
		},
		methods: {
			clearTracksList () {
				this.tracks = []
				this.searchQuery = ''
			},
			setTrack(track) {
				this.$bus.$emit('set-track', track)
				this.$bus.$emit('set-artis-track', track.album.artists[0].name )
			}
		},
		watch: {
			searchQuery(){
				if (! this.searchQuery ) {
					this.tracks = []
					 
				}

				trackService.search ( this.searchQuery )
				.then( res => {
						this.tracks = res.tracks.items
					
					})
			}
		},
		filters: {
			maxLetters ( text ) {
				let max = 34
				return text.split('').splice(0, max).join('')
			}
		}
	}
</script>

<style scoped lang="stylus">
	
	.more-tracks
		display flex
		justify-content center
		color #fff
		// background-image linear-gradient(to top, rgba(255,255,255,0) ,#000 100%)
		background #000
		border-radius 0 0 20px 20px
	
	.search
		margin 15px 0
		
	.tracks-list
		border solid 1px rgba(0,0,0,.1)
		// height 65vh
		height 65vh
		// border solid
		overflow auto
		
		&::-webkit-scrollbar
			width 7px
			background rgba(0,0,0,.1)
			
		&::-webkit-scrollbar-thumb
			width 8px
			background rgba(0,0,0,.5)
		
	input
		font-size 1.8rem
		padding 0 10px
		border-radius 30px 0 0 30px
		border solid 1px
		border-right none
		outline none
		box-shadow 6px 4px 8px 0 #000
		
	
	button
		font-size 1.8rem
		border-radius 0 30px 30px 0
		padding 0 10px
		border solid 1px
		background-color #fff
		border-left none	
		box-shadow 5px 4px 8px 0 #000
		outline none

	.main
		display inline-block
		padding 0 10px
		// display flex
		// justify-content center
	
	figure
		width 50px
		height 50px
		padding 0 10px

	.track
		cursor pointer
		display flex
		justify-content flex-start
		border solid #000 1px
		border-radius 30px
		padding 5px 0
		margin 5px 0
	img
		width 100%
		border-radius 50%
		object-fit cover

</style>