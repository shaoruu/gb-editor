import React, { Component } from 'react'
import classes from './HeadlinesButton.module.css'

import HeadlinesPicker from './HeadlinesPicker/HeadlinesPicker'

export default class HeadlinesButton extends Component {
	onMouseDown = event => event.preventDefault()

	onClick = () => this.props.onOverrideContent(HeadlinesPicker)

	render() {
		return (
			<div onMouseDown={this.onMouseDown} className={classes.headlineButtonWrapper}>
				<button onClick={this.onClick} className={classes.headlineButton}>
					H
				</button>
			</div>
		)
	}
}
