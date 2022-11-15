import React from 'react'
import Header from '../../../../../../src/components/header'
import Summary from '../../../../../../src/components/widget-summary'

const EmbeddedOnlyPage = () => {
	return (
		<>
			<Header />
			<div className="container">
				<section className="page">
					<Summary />

					<div className="detail icon-offset">
						<h2 className="unavailable-text">Only Playable in Webcourses</h2>
						<span className="unavailable-subtext">Your instructor has not made this widget available outside of Webcourses.</span>
					</div>
				</section>
			</div>
		</>
	)
}

export default EmbeddedOnlyPage
