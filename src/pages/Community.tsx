import { Download, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CommunityStatsCards } from "@/components/community/CommunityStatsCards"
import { MembersTable } from "@/components/community/MembersTable"
import { TopGroupsCard } from "@/components/community/TopGroupsCard"
import { RecentActivityCard } from "@/components/community/RecentActivityCard"
import {
  communityStats,
  members,
  totalMembersCount,
  topGroups,
  recentActivity,
} from "@/data/community"

export default function Community() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-semibold">Community</h1>
          <p className="text-sm text-muted-foreground">
            Manage students, instructors and community activities.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Download data-icon="inline-start" />
            Export
          </Button>
          <Button>
            <Plus data-icon="inline-start" />
            Invite Member
          </Button>
        </div>
      </div>

      <CommunityStatsCards stats={communityStats} />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.8fr_1fr]">
        <MembersTable members={members} totalCount={totalMembersCount} />
        <div className="flex flex-col gap-4">
          <TopGroupsCard groups={topGroups} />
          <RecentActivityCard items={recentActivity} />
        </div>
      </div>
    </div>
  )
}