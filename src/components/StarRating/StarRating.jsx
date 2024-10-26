const StarRating = ({ rating, left, top, right, bottom }) => {
	const getStarClass = (index) => {
		const wholeNumber = Math.floor(rating);
		const remainder = rating - wholeNumber;
		if (index < wholeNumber) {
			return "star full";
		} else if (index === wholeNumber) {
			if (remainder >= 0.75) {
				return "star three-quarters";
			} else if (remainder >= 0.5) {
				return "star half";
			} else if (remainder >= 0.25) {
				return "star quarter";
			}
		}
		return "star empty";
	};

	return (
		<div
			className="star-rating"
			style={{
				left: `${left}px`,
				top: `${top}px`,
				right: `${right}px`,
				bottom: `${bottom}px`,
			}}
			title={`${rating}/5 Rating`}
		>
			{[...Array(5)].map((_, index) => (
				<div key={index} className={getStarClass(index)}></div>
			))}
		</div>
	);
};

export default StarRating;
