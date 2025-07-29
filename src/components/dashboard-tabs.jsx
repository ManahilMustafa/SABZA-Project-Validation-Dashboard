import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchTab } from "@/components/tabs/search-tab"
import { ValidatedProjectsTab } from "@/components/tabs/validated-projects-tab"
import { PendingProjectsTab } from "@/components/tabs/pending-projects-tab"
import { ManualVerificationTab } from "@/components/tabs/manual-verification-tab"

export function DashboardTabs({ activeTab, setActiveTab }) {
  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto md:overflow-visible">
            <TabsList className="grid grid-cols-4 min-w-[600px] md:min-w-0 w-full mb-8 bg-gray-100">
              <TabsTrigger
                value="search"
                className="data-[state=active]:bg-white text-sm"
              >
                Search Projects
              </TabsTrigger>
              <TabsTrigger
                value="validated"
                className="data-[state=active]:bg-white text-sm"
              >
                Validated Projects
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                className="data-[state=active]:bg-white text-sm"
              >
                Pending Projects
              </TabsTrigger>
              <TabsTrigger
                value="manual"
                className="data-[state=active]:bg-white text-sm"
              >
                Manual Verification
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="search">
            <SearchTab />
          </TabsContent>
          <TabsContent value="validated">
            <ValidatedProjectsTab />
          </TabsContent>
          <TabsContent value="pending">
            <PendingProjectsTab />
          </TabsContent>
          <TabsContent value="manual">
            <ManualVerificationTab />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
