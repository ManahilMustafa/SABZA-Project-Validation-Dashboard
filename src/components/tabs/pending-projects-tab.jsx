import { Button } from "@/components/ui/button"
import { PendingProjectCard } from "@/components/project-cards/pending-project-card"

const pendingProjects = [
  {
    id: "solar_clean_1752955457061",
    name: "Solar Clean Energy Initiative",
    token: "SCC",
    description: "Revolutionary solar panel technology for clean energy generation",
    projectOwner: "0x2caf7A87d1709941bDdb284A200B5f3CEd4eE845",
    submissionDate: "7/20/2025",
    ipfsDocument: "QmMockb34070e427e937a1707c0677d319b9134c9101c6",
    documentHash: "b34070e427e937a1707c0677d319b9134c9101c6bec0b6f1799859712db8e366",
  },
  {
    id: "test_1752956643720",
    name: "Test Solar Project",
    token: "TST",
    description: "Test project for validation",
    projectOwner: "0x2caf7A87d1709941bDdb284A200B5f3CEd4eE845",
    submissionDate: "7/20/2025",
    ipfsDocument: "QmTest123MockCIDForTesting",
    documentHash: "7e5cb1ed2cb3ff94f48a8d3c53def25e273c0ebd015d2a550d92a720269452b6",
  },
  {
    id: "solar_clean_1752957227792",
    name: "Solar Clean Energy Initiative",
    token: "SCC",
    description: "Revolutionary solar panel technology for clean energy generation",
    projectOwner: "0x2caf7A87d1709941bDdb284A200B5f3CEd4eE845",
    submissionDate: "7/20/2025",
    ipfsDocument: "QmMockb34070e427e937a1707c0677d319b9134c9101c6",
    documentHash: "b34070e427e937a1707c0677d319b9134c9101c6bec0b6f1799859712db8e366",
  },
]

export function PendingProjectsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Pending SABZA Validation</h2>
          <p className="text-gray-600 mt-1">⏳ Projects Pending SABZA Validation (3 found)</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <span className="text-orange-600">🔄</span>
          Refresh Pending Projects
        </Button>
      </div>

      <div className="space-y-6">
        {pendingProjects.map((project) => (
          <PendingProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
