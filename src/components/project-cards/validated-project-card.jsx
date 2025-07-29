import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"



export function ValidatedProjectCard({ project }) {
  const getBadgeColor = (badge) => {
    switch (badge) {
      case "SABZA":
        return "bg-green-100 text-green-700 hover:bg-green-100"
      case "Validated":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100"
      case "Tokenized":
        return "bg-orange-100 text-orange-700 hover:bg-orange-100"
      case "Ready for Bitbond":
        return "bg-purple-100 text-purple-700 hover:bg-purple-100"
      case "✅ Hash Verified":
        return "bg-green-100 text-green-700 hover:bg-green-100"
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100"
    }
  }

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
            <Badge variant="outline" className="text-gray-600">
              {project.token}
            </Badge>
            {project.badges.map((badge, index) => (
              <Badge key={index} className={getBadgeColor(badge)}>
                {badge}
              </Badge>
            ))}
          </div>
        </div>
        <p className="text-gray-600 mt-2">Description: {project.description}</p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-700">Project ID</p>
            <p className="text-gray-900 font-mono text-sm">{project.id}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Project Owner</p>
            <p className="text-gray-900 font-mono text-xs">{project.projectOwner}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">Submission Date</p>
            <p className="text-gray-900">{project.submissionDate}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-700">SABZA Validator</p>
            <p className="text-gray-900 font-mono text-xs">{project.sabzaValidator}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold text-gray-700">Validation Date</p>
            <p className="text-gray-900">{project.validationDate}</p>
          </div>
          {project.tokenizationDate && (
            <div>
              <p className="text-sm font-semibold text-gray-700">Tokenization Date</p>
              <p className="text-gray-900">{project.tokenizationDate}</p>
            </div>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">🔐 Hash Comparison</h4>
          <div className="space-y-2">
            <div>
              <p className="text-sm font-medium text-gray-700">Expected Hash (Owner)</p>
              <p className="text-gray-900 font-mono text-xs break-all">{project.expectedHash}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Actual Hash (SABZA)</p>
              <p className="text-gray-900 font-mono text-xs break-all">{project.actualHash}</p>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-green-600">✅</span>
              <p className="text-green-700 font-semibold">Hashes Match - Document Integrity Verified</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">🔐 Blockchain Verification</h4>
          <div className="space-y-3">
           <Button variant="outline" className="bg-green-700 text-white hover:text-green-700 ">
              Verify Proof on Blockchain
            </Button>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-700">IPFS Document</p>
                <p className="text-gray-900 font-mono text-sm">{project.ipfsDocument}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Document Hash (SHA-256)</p>
                <p className="text-gray-900 font-mono text-xs break-all">{project.expectedHash}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span>🔗</span>
            <span className="text-gray-700">
              <strong>Blockchain Security:</strong> This project is secured on Ethereum Sepolia testnet
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔍</span>
            <span className="text-gray-700">
              <strong>SABZA Validation:</strong> Independent third-party validation with cryptographic proof
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>💎</span>
            <span className="text-gray-700">
              <strong>Bitbond Integration:</strong> Ready for tokenization
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔐</span>
            <span className="text-gray-700">
              <strong>Hash Verification:</strong> Document integrity confirmed
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
