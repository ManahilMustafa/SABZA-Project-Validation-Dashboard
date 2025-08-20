import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Header } from "@/components/header"
import { StatsCards } from "@/components/stats-cards"
import { DashboardTabs } from "@/components/dashboard-tabs"

export default function DashboardPage() {
  const { user, isLoading } = useAuth0()
  const [activeTab, setActiveTab] = useState("search")

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading Error</h1>
          <p className="text-gray-600 mb-4">Unable to load user data. Please try logging in again.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Refresh Page
          </button>
        </div>
      </div>
    )
  }

  // Render main dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SABZA Project Validation Dashboard</h1>
          <p className="text-gray-600">Secure blockchain-based project validation for investors and token issuers</p>
        </div>
        <StatsCards />
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  )
}
