import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Period",
    value: "YTD 2025",
    icon: "📅",
    color: "text-blue-600",
    description: "Year-to-date performance summary for 2025.",
  },
  {
    title: "Total Projects",
    value: "1,234",
    icon: "📊",
    color: "text-green-600",
    description: "The total number of projects counted.",
  },
  {
    title: "Validated Projects",
    value: "856",
    icon: "✅",
    color: "text-purple-600",
    description: "Projects successfully validated by SABZA.",
  },
  {
    title: "Projects Supported",
    value: "3",
    icon: "🏗️",
    color: "text-orange-600",
    description: "Active projects currently receiving support.",
  },
  {
    title: "SABZA Score",
    value: "A (Verified)",
    icon: "🛡️",
    color: "text-green-600",
    description: "Official SABZA verified rating for this period.",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="group relative h-full [perspective:1000px]"
        >
          <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

            {/* Front Side */}
            <div className="h-full [backface-visibility:hidden]">
              <Card className="border border-gray-200 shadow-sm h-full">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{stat.icon}</span>
                      <p className="text-sm font-medium text-gray-600">
                        {stat.title}
                      </p>
                    </div>
                    <p className={`text-2xl font-bold ${stat.color}`}>
                      {stat.value}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Back Side */}
            <div className="absolute inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <Card className="border border-gray-200 shadow-sm h-full bg-gray-50 flex items-center justify-center">
                <CardContent className="p-6 flex items-center justify-center">
                  <p className="text-center text-gray-700 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
