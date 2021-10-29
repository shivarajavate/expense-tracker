import "./Card.css";

const Card = (props) => {
	const className = `card ${props.className}`;
	return (
		<div id={props.id} className={className}>{props.children}</div>
	);
};

export default Card;
