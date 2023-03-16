import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider, QueryCache } from 'react-query'
import EmbeddedOnlyPage from './components/embedded-only-page'

const queryCache = new QueryCache()
export const queryClient = new QueryClient({ queryCache })

ReactDOM.render(<QueryClientProvider client={queryClient} contextSharing={true}>
	<EmbeddedOnlyPage />
</QueryClientProvider>, document.getElementById('app'))
