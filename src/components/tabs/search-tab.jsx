import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

// Mock data updated to match the image and include token symbols
const mockProjects = [
  {
    id: "test_175J2979132K",
    token: "TSP",
    name: "Test Solar Project",
    description: "Test project for validation",
    owner: "0x2C4E3C17E17D8941B0CB3A184A23B583CC0E96E5",
    submissionDate: "10/08/2025",
    validationDate: "17/08/2025",
    validator: "SAKZA Validator",
    validatorAddress: "0x2C4E3C17E17D8941B0CB3A184A23B583CC0E96E5",
    status: "Validated",
    expectedHash: "0x123C5D17F818E06A7634C2B4B27C34D821D391F034A7B5E14810D7014C7A3982",
    actualHash: "0x2F7819B34A9C4C66C93AE7B3B59D0E7D2F818E06A7634C2B4B27C34D821D391F",
    blockchainDocument: "IPFS Document",
    documentHash: "SHA-256",
    documentHashValue: "7A119A21C1C4C7E69B4D565C13D604C2C895C9E6B5D2D0C4C68B991C260D04A",
  },
  {
    id: "PROJ002",
    token: "NMB",
    name: "NFT Marketplace Beta",
    description: "NFT marketplace test validation",
    owner: "0x789XYZ999",
    submissionDate: "2025-08-12",
    validator: "XYZ Validator",
    status: "Pending",
    expectedHash: "0x123456789ABC",
    actualHash: "0x123456789ABC",
    blockchainDocument: "IPFS Document",
    documentHash: "SHA-256",
    documentHashValue: "0x123456789ABC",
  },
]

export function SearchTab() {
  const [tokenSearch, setTokenSearch] = useState("")
  const [projectIdSearch, setProjectIdSearch] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)
  const [notFound, setNotFound] = useState(false)

  const handleSearch = (searchType) => {
    let result = null
    setNotFound(false)
    setSelectedProject(null)

    if (searchType === "token" && tokenSearch.trim()) {
      result = mockProjects.find(
        (p) => p.token.toLowerCase() === tokenSearch.toLowerCase()
      )
    } else if (searchType === "id" && projectIdSearch.trim()) {
      result = mockProjects.find(
        (p) => p.id.toLowerCase() === projectIdSearch.toLowerCase()
      )
    }

    if (result) {
      setSelectedProject(result)
    } else {
      setNotFound(true)
    }
  }

  return (
    <div className="bg-[#f0f2f5] min-h-screen p-8">
      {/* Search Header */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Search for Projects</h2>
        <p className="text-gray-600">Find projects by token symbol or project ID</p>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Search by Token */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Search by Token Symbol</label>
              <div className="flex gap-3">
                <Input
                  placeholder="Enter token symbol (e.g., TSP)"
                  value={tokenSearch}
                  onChange={(e) => setTokenSearch(e.target.value)}
                  className="flex-1"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch("token")}
                />
                <Button onClick={() => handleSearch("token")} className="bg-blue-600 hover:bg-blue-700">
                  Search by Token
                </Button>
              </div>
            </div>

            {/* Search by Project ID */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">Search by Project ID</label>
              <div className="flex gap-3">
                <Input
                  placeholder="Enter project ID (e.g., test_175J2979132K)"
                  value={projectIdSearch}
                  onChange={(e) => setProjectIdSearch(e.target.value)}
                  className="flex-1"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch("id")}
                />
                <Button onClick={() => handleSearch("id")} className="bg-green-600 hover:bg-green-700">
                  Search by Project ID
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Result Card */}
        {selectedProject && (
          <Card className="border border-gray-200 shadow-lg">
            <div className="bg-white p-6 space-y-6 rounded-lg">
              {/* Top Success Banner */}
              <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded-md font-medium text-sm">
                ✅ Project found: {selectedProject.id}
              </div>

              {/* Title + Description + Status Badges */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedProject.name}</h3>
                  <div className="flex gap-2 text-xs font-semibold">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-600">
                      Validated
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                      Under Progress
                    </span>
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-600">
                      Ready for Review
                    </span>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-600">
                      Valid
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">Description: {selectedProject.description}</p>
              </div>

              {/* Project Info Boxes */}
              <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-700">
                <div className="p-4 border rounded bg-gray-50">
                  <p className="text-gray-500 text-xs">Project ID</p>
                  <p className="font-semibold break-all">{selectedProject.id}</p>
                </div>
                <div className="p-4 border rounded bg-gray-50">
                  <p className="text-gray-500 text-xs">Project Owner</p>
                  <p className="font-semibold break-all">{selectedProject.owner}</p>
                </div>
                <div className="p-4 border rounded bg-gray-50">
                  <p className="text-gray-500 text-xs">Submission Date</p>
                  <p className="font-semibold break-all">{selectedProject.submissionDate}</p>
                </div>
                <div className="p-4 border rounded bg-gray-50">
                  <p className="text-gray-500 text-xs">SAKZA Validator</p>
                  <p className="font-semibold break-all">{selectedProject.validator}</p>
                  <p className="text-xs text-gray-500 break-all">{selectedProject.validatorAddress}</p>
                </div>
                <div className="p-4 border rounded bg-gray-50">
                    <p className="text-gray-500 text-xs">Validation Date</p>
                    <p className="font-semibold break-all">{selectedProject.validationDate}</p>
                </div>
              </div>

              {/* Hash Comparison */}
              <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 space-y-2">
                <h4 className="font-semibold text-base mb-2">Hash Comparison</h4>
                <div className="text-xs text-gray-700 space-y-1">
                  <p className="font-medium">Expected Hash (Gemini):</p>
                  <p className="text-blue-600 font-mono break-all">{selectedProject.expectedHash}</p>
                </div>
                <div className="text-xs text-gray-700 space-y-1">
                  <p className="font-medium">Actual Hash (SAKZA):</p>
                  <p className="text-blue-600 font-mono break-all">{selectedProject.actualHash}</p>
                </div>
                <div className="mt-4 flex items-center text-green-700 font-medium text-sm">
                  <span className="text-lg mr-2">✅</span>
                  Hash Match - Document Integrity Verified
                </div>
              </div>
              
              {/* Blockchain Verification */}
              <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-base">Blockchain Verification</h4>
                  <Button className="bg-blue-600 hover:bg-blue-700">Verify Proof on Blockchain</Button>
                </div>
                <div className="bg-white p-4 border rounded-lg text-sm space-y-1">
                  <p className="text-gray-700 font-semibold">{selectedProject.blockchainDocument}</p>
                  <p className="text-gray-700 font-semibold">Document Hash ({selectedProject.documentHash})</p>
                  <p className="text-gray-500 break-all">{selectedProject.documentHashValue}</p>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Not Found */}
        {notFound && (
          <div className="text-center text-red-600 font-medium p-4 bg-red-100 rounded-lg">
            ❌ No Project Found
          </div>
        )}
      </div>
    </div>
  )
}