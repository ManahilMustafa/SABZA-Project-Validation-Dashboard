import { Button } from "@/components/ui/button"
import { ValidatedProjectCard } from "@/components/project-cards/validated-project-card"

const validatedProjects = [
  {
    id: "test_1752957911206",
    name: "Test Solar Project",
    token: "TST",
    description: "Test project for validation",
    projectOwner: "0x2caf7A87d1709941bDdb284A200B5f3CEd4eE845",
    submissionDate: "7/20/2025",
    sabzaValidator: "0x2caf7A87d1709941bDdb284A200B5f3CEd4eE845",
    validationDate: "7/20/2025",
    expectedHash: "7e5cb1ed2cb3ff94f48a8d3c53def25e273c0ebd015d2a550d92a720269452b6",
    actualHash: "7e5cb1ed2cb3ff94f48a8d3c53def25e273c0ebd015d2a550d92a720269452b6",
    ipfsDocument: "QmTest123MockCIDForTesting",
    status: "validated",
    badges: ["SABZA", "Validated", "Ready for Bitbond", "✅ Hash Verified"],
  },
  {
    id: "solar_1753173315014",
    name: "Solar Clean Energy Initiative 2024",
    token: "SOLAR24",
    description: "Revolutionary solar panel technology for clean energy generation with verified carbon credits",
    projectOwner: "0x2caf7A87d1709941bDdb284A200B5f3CEd4eE845",
    submissionDate: "7/22/2025",
    sabzaValidator: "0x2caf7A87d1709941bDdb284A200B5f3CEd4eE845",
    validationDate: "7/22/2025",
    tokenizationDate: "7/22/2025",
    expectedHash: "71abc320a1a206906c7749cab74d52a69ed4f31d2e48de4e76870e5ab7fdd2bd",
    actualHash: "71abc320a1a206906c7749cab74d52a69ed4f31d2e48de4e76870e5ab7fdd2bd",
    ipfsDocument: "QmdgWk4Lw9rYHy1NqYXKbWXQ7fkxnUeo9e6tQeUaDZtvcS",
    status: "tokenized",
    badges: ["Tokenized", "Ready for Bitbond", "✅ Hash Verified"],
  },
]

export function ValidatedProjectsTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">All Validated Projects</h2>
          <p className="text-gray-600 mt-1">✅ SABZA Validated Projects (5 found)</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <span className="text-green-600">🔄</span>
          Refresh Validated Projects
        </Button>
      </div>

      <div className="space-y-6">
        {validatedProjects.map((project) => (
          <ValidatedProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
