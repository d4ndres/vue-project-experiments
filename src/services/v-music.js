import trae from 'trae'
import configService from './config.js'

const vMusicService = trae.create({
	baseUrl: configService.apiUrl
})
export default vMusicService