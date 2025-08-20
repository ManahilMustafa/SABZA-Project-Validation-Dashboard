import './App.css'
import { Header } from '@/components/header'
import Dashboard from './app/page'
import ErrorDisplay from './components/error-display'
import LoadingSpinner from './components/loading-spinner'
import LoginPage from './app/login/page'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0()

  // Show loading spinner while Auth0 SDK is initializing
  if (isLoading) {
    return <LoadingSpinner />
  }

  // Show error page if an authentication error occurred
  if (error) {
    return <ErrorDisplay error={error} />
  }

  // If not loading and no error, check authentication status
  if (isAuthenticated) {
    return <Dashboard />
  } else {
    return <LoginPage />
  }
}

export default App
