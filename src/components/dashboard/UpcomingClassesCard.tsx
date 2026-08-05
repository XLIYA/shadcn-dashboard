import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { UpcomingClassItem } from '@/types/dashboard'


interface UpcomingClassesCardProps {
  items: UpcomingClassItem[]
}

export function UpcomingClassesCard({ items }: UpcomingClassesCardProps) {
  return (
    <Card className="flex-1 border p-4 gap-4">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-base">Upcoming Classes</p>
        <a href="#" className="text-xs text-indigo-600 font-medium hover:underline">
          View All
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {items.map(item => (
          <div key={item.title} className="flex items-center gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${item.iconBg}`}>
              {item.icon ? (
                <item.icon className={`h-5 w-5 ${item.iconColor}`} />
              ) : (
                <span className={`text-xs font-bold ${item.iconColor}`}>{item.label}</span>
              )}
            </div>

            <div className="flex-1 leading-tight">
              <p className="text-sm font-medium">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.teacher}</p>
            </div>

            <p className="text-xs text-muted-foreground text-right whitespace-pre-line">{item.time}</p>

            <Badge
              variant="outline"
              className={
                item.status === 'Online'
                  ? 'text-indigo-600 border-indigo-200 bg-indigo-50'
                  : 'text-muted-foreground'
              }
            >
              {item.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}