import React from "react";
import PropTypes from 'prop-types';
import clsx from "clsx";
import {Flex, Box} from '@rebass/grid'

import styles from './Body.module.scss';

export default class Body extends React.Component {
	static propTypes = {
		children: PropTypes.node,
		sidebar: PropTypes.node,
		offsetTop: PropTypes.bool,
		sidebarWidth: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
			PropTypes.arrayOf(
				PropTypes.oneOfType([
					PropTypes.string,
					PropTypes.number
				]),
			),
		]),
	};
	static defaultProps = {
		offsetTop: false,
		sidebarWidth: 1 / 4,
	};

	render() {
		const {children, sidebar, offsetTop, sidebarWidth} = this.props;

		return (
			<Flex className={clsx(styles.body, offsetTop && styles['offset-top'])}>
				{
					sidebar && (
						<Box className={styles.sidebar} width={sidebarWidth}>
							{sidebar}
						</Box>
					)
				}

				<Box flex='1 1 auto'>
					{children}
				</Box>
			</Flex>
		)
	}
}
