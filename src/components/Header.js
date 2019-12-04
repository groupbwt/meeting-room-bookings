import React from "react";
import PropTypes from 'prop-types';
import {Alignment, Navbar} from "@blueprintjs/core";

import styles from './Header.module.scss';

export default class Header extends React.Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		fixedToTop: PropTypes.bool,
		children: PropTypes.node,
	};
	static defaultProps = {
		fixedToTop: false,
	};

	render() {
		const {title, fixedToTop} = this.props;

		return (
			<Navbar className={styles.navbar} fixedToTop={fixedToTop}>
				<Navbar.Group align={Alignment.LEFT}>
					<Navbar.Heading>{title}</Navbar.Heading>
				</Navbar.Group>

				{
					this.props.children && (
						<Navbar.Group align={Alignment.RIGHT}>
							{this.props.children}
						</Navbar.Group>
					)
				}
			</Navbar>
		)
	}
}
