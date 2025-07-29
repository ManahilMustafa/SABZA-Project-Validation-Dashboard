import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"


export function PendingProjectCard({ project }) {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
            <Badge variant="outline" className="text-gray-600">
              {project.token}
            </Badge>
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">Pending</Badge>
          </div>
        </div>
        <p className="text-gray-600 mt-2">Description: {project.description}</p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
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
                <p className="text-gray-900 font-mono text-xs break-all">{project.documentHash}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
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
              <strong>Bitbond Integration:</strong> Awaiting validation completion
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
