import vMusicService from './v-music'

const trackService = {}

trackService.search = function (q) {
	const type = 'track'

	return vMusicService.get('/search', {
		params: { q, type}

	})
	.then( res => res.data )
}

export default trackService