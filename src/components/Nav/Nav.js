import React from 'react';
import { Link } from 'gatsby';

export class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isOpened: false };
	}

	handleClose = () => this.setState({ isOpened: false });
	handleOpen = () => this.setState({ isOpened: true });

	renderLinks = (links, onClick) => {
		return links.map(link => (
			<Link
				key={link.to}
				className={link.to}
				to={link.to}
				title={link.name}
				onClick={onClick}>
				{link.name}
			</Link>
		));
	};

	render() {
		const links = [
			{ name: 'Home', to: '/' },
			{ name: 'About', to: '/about' }
		];
		return (
			<div className="grid">
				<nav className="main-nav -desktop col md-9 md-push-2">
					{this.renderLinks(links)}
				</nav>
			</div>
		);
	}
}
