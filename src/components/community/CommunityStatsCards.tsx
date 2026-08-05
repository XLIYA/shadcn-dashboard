import type { ReactNode } from "react"
import { Users, GraduationCap, User, UsersRound, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { CommunityStats } from "@/types/community"

interface StatItemProps {
  icon: ReactNode
  iconClass: string
  label: string
  value: string | number
  changeLabel?: string
}

function StatItem({ icon, iconClass, label, value, changeLabel }: StatItemProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3">
        <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-full", iconClass)}>
          {icon}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm text-muted-foreground">{label}</span>
          <span className="text-2xl font-semibold leading-none">{value}</span>
          {changeLabel && (
            <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="size-3" />
              {changeLabel}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function CommunityStatsCards({ stats }: { stats: CommunityStats }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatItem
        icon={<Users className="size-5 text-primary" />}
        iconClass="bg-primary/10"
        label="Total Members"
        value={stats.totalMembers.toLocaleString()}
        changeLabel={stats.totalChangeLabel}
      />
      <StatItem
        icon={<GraduationCap className="size-5 text-emerald-600 dark:text-emerald-400" />}
        iconClass="bg-emerald-500/10"
        label="Students"
        value={stats.students.toLocaleString()}
        changeLabel={stats.studentsChangeLabel}
      />
      <StatItem
        icon={<User className="size-5 text-amber-600 dark:text-amber-400" />}
        iconClass="bg-amber-500/10"
        label="Instructors"
        value={stats.instructors}
        changeLabel={stats.instructorsChangeLabel}
      />
      <StatItem
        icon={<UsersRound className="size-5 text-blue-600 dark:text-blue-400" />}
        iconClass="bg-blue-500/10"
        label="Active Groups"
        value={stats.activeGroups}
        changeLabel={stats.activeGroupsChangeLabel}
      />
    </div>
  )
}