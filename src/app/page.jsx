

import { useState } from "react"
import { Header } from "@/components/header"
import { StatsCards } from "@/components/stats-cards"
import { DashboardTabs } from "@/components/dashboard-tabs"


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("search")

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Title Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">SABZA Project Validation Dashboard </h1>
          <p className="text-gray-600">Secure blockchain-based project validation for investors and token issuers</p>
        </div>

        <StatsCards />
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
     
      </div>
    </div>
  )
}
