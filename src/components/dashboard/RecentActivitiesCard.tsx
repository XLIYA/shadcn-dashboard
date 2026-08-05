import { Card } from '@/components/ui/card'
import type { ActivityItem } from '@/types/dashboard'


interface RecentActivitiesCardProps {
  items: ActivityItem[]
}

export function RecentActivitiesCard({ items }: RecentActivitiesCardProps) {
  return (
    <Card className="flex-1 border p-4 gap-4">
      <p className="font-semibold text-base">Recent Activities</p>

      <div className="flex flex-col gap-4 flex-1">
        {items.map(item => (
          <div key={item.title} className="flex items-center gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}>
              <item.icon className={`h-4 w-4 ${item.iconColor}`} />
            </div>
            <div className="leading-tight">
              <p className="text-sm">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="text-xs text-indigo-600 font-medium hover:underline">
        View All Activities
      </a>
    </Card>
  )
}