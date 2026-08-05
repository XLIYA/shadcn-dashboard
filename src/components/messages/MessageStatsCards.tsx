import type { ReactNode } from "react"
import { MessageSquare, Mail, CheckCircle2, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { MessageStats } from "@/types/message"

interface StatItemProps {
  icon: ReactNode
  iconClass: string
  label: string
  value: string | number
  changeLabel?: string
  changeClass?: string
  showTrendIcon?: boolean
}

function StatItem({
  icon,
  iconClass,
  label,
  value,
  changeLabel,
  changeClass,
  showTrendIcon = true,
}: StatItemProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3">
        <div className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl", iconClass)}>
          {icon}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm text-muted-foreground">{label}</span>
          <span className="text-2xl font-semibold leading-none">{value}</span>
          {changeLabel && (
            <span className={cn("flex items-center gap-1 text-xs", changeClass)}>
              {showTrendIcon && <TrendingUp className="size-3" />}
              {changeLabel}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function MessageStatsCards({ stats }: { stats: MessageStats }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <StatItem
        icon={<MessageSquare className="size-5 text-primary" />}
        iconClass="bg-primary/10"
        label="Total Messages"
        value={stats.total.toLocaleString()}
        changeLabel={stats.totalChangeLabel}
        changeClass="text-emerald-600 dark:text-emerald-400"
      />
      <StatItem
        icon={<Mail className="size-5 text-amber-600 dark:text-amber-400" />}
        iconClass="bg-amber-500/10"
        label="Unread Messages"
        value={stats.unread}
        changeLabel="Need your attention"
        changeClass="text-amber-600 dark:text-amber-400"
        showTrendIcon={false}
      />
      <StatItem
        icon={<CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-400" />}
        iconClass="bg-emerald-500/10"
        label="Replied Today"
        value={stats.repliedToday}
        changeLabel={stats.repliedTodayChangeLabel}
        changeClass="text-emerald-600 dark:text-emerald-400"
      />
    </div>
  )
}