import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Period",
    value: "YTD 2025",
    icon: "📅",
    color: "text-blue-600",
  },
  {
    title: "Total Projects",
    value: "1,234",
    icon: "📊",
    color: "text-green-600",
  },
  {
    title: "Validated Projects",
    value: "856",
    icon: "✅",
    color: "text-purple-600",
  },
  {
    title: "Projects Supported",
    value: "3",
    icon: "🏗️",
    color: "text-orange-600",
  },
  {
    title: "SABZA Score",
    value: "A (Verified)",
    icon: "🛡️",
    color: "text-green-600",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="border border-gray-200 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{stat.icon}</span>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              </div>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
