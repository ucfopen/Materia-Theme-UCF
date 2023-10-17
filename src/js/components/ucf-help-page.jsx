import React, { useEffect, useRef, useState } from 'react'
import Header from '../../../../../../src/components/header'

import UcfHelpHome from './ucf-help-home'
import UcfHelpForStudents from './ucf-help-for-students'
import UcfHelpForInstructors from './ucf-help-for-instructors'

const HelpPage = () => {

	const [page, setPage] = useState(window.location.hash.match(/#(home|students|instructors){1}$/)?.[1])

	const listenToHashChange = () => {
		const match = window.location.hash.match(/#(home|students|instructors){1}$/)
		if (match != null && match[1] != null) setPage(match[1])
		else setPage('home')
	}
	
	useEffect(() => {
		window.addEventListener('hashchange', listenToHashChange)
	
		return () => {
			window.removeEventListener('hashchange', listenToHashChange)
		}
	}, [])

	let helpContentRender = null
	switch (page) {
		case 'students':
			helpContentRender = <UcfHelpForStudents />
			break
		case 'instructors':
			helpContentRender = <UcfHelpForInstructors />
			break
		default:
			helpContentRender = <UcfHelpHome />
	}

	return (
		<>
			<Header />
			<div className="container">
				<section className="page">
					<h1>Help &amp; Support</h1>
					<section className='content'>
						<nav className='navigation'>
							<ul>
								<li><a href='#home'>Help Home</a></li>
								<li><a href='#students'>For Students</a></li>
								<li><a href='#instructors'>For Instructors</a></li>
							</ul>
						</nav>
						<main>
							{helpContentRender}
						</main>
					</section>
				</section>
			</div>
		</>
	)
}

export default HelpPage
