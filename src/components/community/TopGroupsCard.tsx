import { Atom, Palette, BarChart3, MessageCircle, Megaphone } from "lucide-react"
import { Card, CardHeader, CardTitle, CardAction, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { TopGroup } from "@/types/community"


const iconMap = {
  react: { Icon: Atom, className: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  design: { Icon: Palette, className: "bg-pink-500/10 text-pink-600 dark:text-pink-400" },
  data: { Icon: BarChart3, className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  discussion: { Icon: MessageCircle, className: "bg-primary/10 text-primary" },
  announcement: { Icon: Megaphone, className: "bg-amber-500/10 text-amber-600 dark:text-amber-400" },
} as const

export function TopGroupsCard({ groups }: { groups: TopGroup[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Groups</CardTitle>
        <CardAction>
          <Button variant="link" size="sm">View All</Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {groups.map((g) => {
          const { Icon, className } = iconMap[g.icon]
          return (
            <div key={g.id} className="flex items-center gap-3">
              <div className={cn("flex size-9 shrink-0 items-center justify-center rounded-full", className)}>
                <Icon className="size-4.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{g.name}</span>
                <span className="text-xs text-muted-foreground">{g.membersCount} members</span>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}