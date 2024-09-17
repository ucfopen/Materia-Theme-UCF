import React from 'react'
import Header from '../../../../../../src/components/header'
import Summary from '../../../../../../src/components/widget-summary'
import EmbedFooter from '../../../../../../src/components/widget-embed-footer'

const EmbeddedOnlyPage = () => {
	return (
		<>
			<Header />
			<div className="container">
				<section className="page">
					<Summary />

					<div className="detail icon-offset">
						<h2 className="unavailable-text">Only Playable in Webcourses</h2>
						<span className="unavailable-subtext">
							This widget can only be launched from within your course in Webcourses. If you launched it from Webcourses and see this message,
							try visiting the assignment or module page and launching it again. When in doubt, review the support options below to contact Webcourses Support.
						</span>
					</div>
					<EmbedFooter />
				</section>
			</div>
		</>
	)
}

export default EmbeddedOnlyPage
