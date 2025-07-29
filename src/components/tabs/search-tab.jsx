

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for demonstration
const mockProjects = [
  {
    id: "PROJ001",
    name: "DeFi Protocol Alpha",
    token: "DPA",
    status: "validated",
    score: 95,
    category: "DeFi",
  },
  {
    id: "PROJ002",
    name: "NFT Marketplace Beta",
    token: "NMB",
    status: "pending",
    score: 78,
    category: "NFT",
  },
]

export function SearchTab() {
  const [tokenSearch, setTokenSearch] = useState("")
  const [projectIdSearch, setProjectIdSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleTokenSearch = () => {
    if (tokenSearch.trim()) {
      const results = mockProjects.filter((project) => project.token.toLowerCase().includes(tokenSearch.toLowerCase()))
      setSearchResults(results)
    }
  }

  const handleProjectIdSearch = () => {
    if (projectIdSearch.trim()) {
      const results = mockProjects.filter((project) => project.id.toLowerCase().includes(projectIdSearch.toLowerCase()))
      setSearchResults(results)
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "validated":
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-green-200">Validated</Badge>
      case "pending":
        return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200">Pending</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Search for Validated Projects</h2>
        <p className="text-gray-600">Find projects by token symbol or project ID</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Search by Token Symbol</label>
          <div className="flex gap-3">
            <Input
              placeholder="Enter token symbol (e.g., SCC)"
              value={tokenSearch}
              onChange={(e) => setTokenSearch(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => e.key === "Enter" && handleTokenSearch()}
            />
            <Button onClick={handleTokenSearch} className="bg-blue-600 hover:bg-blue-700">
              Search by Token
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Search by Project ID</label>
          <div className="flex gap-3">
            <Input
              placeholder="Enter project ID"
              value={projectIdSearch}
              onChange={(e) => setProjectIdSearch(e.target.value)}
              className="flex-1"
              onKeyPress={(e) => e.key === "Enter" && handleProjectIdSearch()}
            />
            <Button onClick={handleProjectIdSearch} className="bg-green-600 hover:bg-green-700">
              Search by Project ID
            </Button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Results</h3>
          <div className="space-y-4">
            {searchResults.map((project) => (
              <Card key={project.id} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <h4 className="font-semibold text-lg text-gray-900">{project.name}</h4>
                        <Badge variant="outline" className="text-gray-600">
                          {project.token}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">Project ID: {project.id}</p>
                      <p className="text-sm text-gray-600">Category: {project.category}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      {getStatusBadge(project.status)}
                      <p className="text-sm text-gray-600">Score: {project.score}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
