import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const manualProjects = [
  {
    id: "PROJ003",
    name: "Gaming Token Gamma",
    token: "GTG",
    category: "Gaming",
    riskLevel: "High",
    validationDate: "2024-01-18",
  },
]

export function ManualVerificationTable() {
  return (
    <Card className="border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900">Projects Awaiting Manual Verification</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-gray-200">
              <TableHead className="font-semibold text-gray-900">Project Name</TableHead>
              <TableHead className="font-semibold text-gray-900">Token</TableHead>
              <TableHead className="font-semibold text-gray-900">Category</TableHead>
              <TableHead className="font-semibold text-gray-900">Risk Level</TableHead>
              <TableHead className="font-semibold text-gray-900">Submitted Date</TableHead>
              <TableHead className="font-semibold text-gray-900">Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {manualProjects.map((project) => (
              <TableRow key={project.id} className="border-gray-200">
                <TableCell className="font-medium text-gray-900">{project.name}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-gray-600">
                    {project.token}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-600">{project.category}</TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100">{project.riskLevel} Risk</Badge>
                </TableCell>
                <TableCell className="text-gray-600">{project.validationDate}</TableCell>
                <TableCell>
                  <Badge className="bg-red-100 text-red-700 hover:bg-red-100">High Priority</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
