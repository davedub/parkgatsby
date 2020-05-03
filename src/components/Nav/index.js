import React from 'react';
import { Link } from 'gatsby';

export default class Nav extends React.Component {
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
			{ name: 'About', to: '/about' },
			{ name: 'Page 2', to: '/page-2' },
			{ name: 'Contact', to: '/contact-us' }
		];
		return (
				<nav className="navbar">
				<ul className="navlink">
					<li className="navlink-li">
						{this.renderLinks(links)}
					</li>
				</ul>
				</nav>
		);
	}
}
