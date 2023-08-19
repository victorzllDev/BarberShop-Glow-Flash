import { PropTypes } from 'prop-types'

function ImagePoster({ img }) {
	return (
		<img
			src={img}
			alt="Image Poster"
			className="h-full w-full object-cover object-center"
		/>
	)
}

ImagePoster.propTypes = {
	img: PropTypes.string.isRequired,
}

export default ImagePoster
