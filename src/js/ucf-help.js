import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query'
import UcfHelpPage from './components/ucf-help-page'

const queryCache = new QueryCache()
export const queryClient = new QueryClient({ queryCache })

ReactDOM.render(<QueryClientProvider client={queryClient} contextSharing={true}>
	<UcfHelpPage />
</QueryClientProvider>, document.getElementById('app'))
