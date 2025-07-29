"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, AlertTriangle, Info, TrendingUp, Shield, Users } from "lucide-react"



export function ProjectDetailsModal({ project, isOpen, onClose }) {
  if (!project) return null

  const getStatusColor = (status) => {
    switch (status) {
      case "validated":
        return "text-green-600"
      case "pending":
        return "text-orange-600"
      case "manual":
        return "text-yellow-600"
      default:
        return "text-gray-600"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "validated":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "pending":
        return <AlertTriangle className="w-5 h-5 text-orange-600" />
      case "manual":
        return <Info className="w-5 h-5 text-yellow-600" />
      default:
        return <Info className="w-5 h-5 text-gray-600" />
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            {getStatusIcon(project.status)}
            {project.name}
            <Badge variant="outline">{project.token}</Badge>
          </DialogTitle>
          <DialogDescription>
            Project ID: {project.id} • Category: {project.category}
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="validation">Validation</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Validation Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Progress value={project.score} className="flex-1" />
                    <span className="text-2xl font-bold">{project.score}%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    <span className="text-lg font-semibold">{project.riskLevel}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`flex items-center gap-2 ${getStatusColor(project.status)}`}>
                    {getStatusIcon(project.status)}
                    <span className="text-lg font-semibold capitalize">{project.status}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Project Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600 mb-1">Token Symbol</h4>
                    <p className="text-lg">{project.token}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600 mb-1">Category</h4>
                    <p className="text-lg">{project.category}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600 mb-1">Validation Date</h4>
                    <p className="text-lg">{project.validationDate}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600 mb-1">Project ID</h4>
                    <p className="text-lg font-mono">{project.id}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="validation" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Validation Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Smart Contract Security</span>
                    <div className="flex items-center gap-2">
                      <Progress value={92} className="w-24" />
                      <span className="text-sm font-medium">92%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Team Verification</span>
                    <div className="flex items-center gap-2">
                      <Progress value={88} className="w-24" />
                      <span className="text-sm font-medium">88%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tokenomics Analysis</span>
                    <div className="flex items-center gap-2">
                      <Progress value={95} className="w-24" />
                      <span className="text-sm font-medium">95%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Community Engagement</span>
                    <div className="flex items-center gap-2">
                      <Progress value={78} className="w-24" />
                      <span className="text-sm font-medium">78%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Smart contract audited by certified auditors</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>No critical vulnerabilities found</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <span>Minor optimization recommendations pending</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="community" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Community Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="text-2xl font-bold">12.5K</p>
                      <p className="text-sm text-gray-600">Community Members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold">+15%</p>
                      <p className="text-sm text-gray-600">Growth Rate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
