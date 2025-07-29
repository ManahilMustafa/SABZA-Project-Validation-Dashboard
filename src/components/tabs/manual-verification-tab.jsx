import { Badge } from "@/components/ui/badge"
import { ManualVerificationForm } from "@/components/forms/manual-verification-form"
import { ManualVerificationTable } from "@/components/tables/manual-verification-table"

export function ManualVerificationTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Manual Verification Required</h2>
        <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">3 Projects</Badge>
      </div>

      <ManualVerificationForm />
      <ManualVerificationTable />
    </div>
  )
}
