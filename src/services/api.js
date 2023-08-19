import axios from 'axios'

const token = import.meta.env.VITE_APP_TOKEN_INSTAGRAM
const url = `https://graph.instagram.com/me/media/?access_token=${token}&fields=media_url,media_type,caption,permalink`

export const apiInstagram = axios.create({
	baseURL: url,
})
