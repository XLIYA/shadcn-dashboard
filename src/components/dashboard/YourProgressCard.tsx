import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import type { ProgressItem } from '@/types/dashboard'


interface YourProgressCardProps {
  items: ProgressItem[]
}

export function YourProgressCard({ items }: YourProgressCardProps) {
  return (
    <Card className="flex-1 border p-4 gap-3">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-base">Your Progress</p>
        <a href="#" className="text-xs text-indigo-600 font-medium hover:underline">
          View All
        </a>
      </div>

      <div className="flex flex-col gap-4 justify-center flex-1 space-x-5">
        {items.map(item => (
          <div key={item.label} className="flex items-center gap-3">
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${item.iconBg ?? ''}`}>
              {item.icon ? (
                <item.icon className={`h-4 w-4 ${item.iconColor}`} />
              ) : (
                <span
                  className={`text-[10px] font-bold text-white rounded ${item.badgeBg} h-full w-full flex items-center justify-center`}
                >
                  {item.badge}
                </span>
              )}
            </div>

            <p className="text-sm w-40 shrink-0">{item.label}</p>

            <Progress value={item.value} className="h-2 flex-1" />

            <p className="text-xs text-muted-foreground w-8 text-right">{item.value}%</p>
          </div>
        ))}
      </div>
    </Card>
  )
}