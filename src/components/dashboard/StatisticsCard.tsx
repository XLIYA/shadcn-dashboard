import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import type { StatItem } from '@/types/dashboard'


interface StatisticsCardProps {
  stats: StatItem[]
}

export function StatisticsCard({ stats }: StatisticsCardProps) {
  return (
    <Card className="flex-1 border p-4 gap-3">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-base">Statistics</p>
        <Select defaultValue="month">
          <SelectTrigger className="w-28 h-7 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {stats.map(stat => (
          <div key={stat.label} className="flex flex-col gap-1.5 rounded-lg border p-3">
            <stat.icon className={`h-5 w-5 ${stat.color}`} />
            <p className="font-bold text-lg">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}