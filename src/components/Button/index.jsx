import { PropTypes } from 'prop-types'

function Button({ children, onClick }) {
	return (
		<button
			onClick={onClick}
			className="rounded bg-zinc-400 p-4 text-lg font-bold duration-300 hover:bg-green-500"
		>
			{children}
		</button>
	)
}

Button.propTypes = {
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func,
}

export default Button
