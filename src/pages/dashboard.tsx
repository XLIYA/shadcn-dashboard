import { DashboardCalendarCard } from "@/components/dashboard/DashboardCalendarCard"
import { ProfileCard } from "@/components/dashboard/ProfileCard"
import { RecentActivitiesCard } from "@/components/dashboard/RecentActivitiesCard"
import { StatisticsCard } from "@/components/dashboard/StatisticsCard"
import { UpcomingClassesCard } from "@/components/dashboard/UpcomingClassesCard"
import { YourProgressCard } from "@/components/dashboard/YourProgressCard"
import { activities } from "@/types/activities"
import { progressItems } from "@/types/progressItems"
import { stats } from "@/types/stats"
import { upcomingClasses } from "@/types/upcomingClasses"


export const Dashboard = () => {
    return (
        <div className="p-2">
            <p className="text-2xl font-bold m-2">Dashboard</p>
            <p className="text-sm text-gray-600 m-2">Welcome back, Ali! Here's what's happening.</p>

            {/* Row 1: Profile + Statistics */}
            <div className="flex gap-4 m-2 items-stretch">
                <ProfileCard />
                <StatisticsCard stats={stats} />
            </div>

            {/* Row 2: Upcoming Classes + Recent Activities */}
            <div className="flex gap-4 m-2 items-stretch">
                <UpcomingClassesCard items={upcomingClasses} />
                <RecentActivitiesCard items={activities} />
            </div>

            {/* Row 3: Your Progress + Calendar */}
            <div className="flex gap-4 m-2 items-stretch">
                <YourProgressCard items={progressItems} />
                <DashboardCalendarCard />
            </div>
        </div>
    )
}