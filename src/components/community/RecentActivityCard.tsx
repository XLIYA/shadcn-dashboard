import { Megaphone } from "lucide-react"
import { Card, CardHeader, CardTitle, CardAction, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import type { ActivityItem } from "@/types/community"

export function RecentActivityCard({ items }: { items: ActivityItem[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardAction>
          <Button variant="link" size="sm">View All</Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {items.map((item) => {
          const initials = item.actorName.split(" ").map((p) => p[0]).join("").slice(0, 2)
          return (
            <div key={item.id} className="flex items-start gap-3">
              {item.actorAvatarUrl || item.actorName !== "System" ? (
                <Avatar size="sm">
                  <AvatarImage src={item.actorAvatarUrl} alt={item.actorName} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              ) : (
                <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Megaphone className="size-3.5" />
                </div>
              )}
              <div className="flex flex-col text-sm">
                <span>
                  {item.actorName !== "System" && (
                    <span className="font-medium">{item.actorName} </span>
                  )}
                  <span className="text-muted-foreground">{item.action}</span>{" "}
                  {item.targetLabel && (
                    <span className="font-medium text-primary">{item.targetLabel}</span>
                  )}
                </span>
                <span className="text-xs text-muted-foreground">{item.timeLabel}</span>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}