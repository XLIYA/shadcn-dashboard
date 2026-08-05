import type { ActivityItem, CommunityStats, Member, TopGroup } from "@/types/community"

export const communityStats: CommunityStats = {
  totalMembers: 2548,
  totalChangeLabel: "14% from last month",
  students: 2123,
  studentsChangeLabel: "10% from last month",
  instructors: 156,
  instructorsChangeLabel: "5% from last month",
  activeGroups: 48,
  activeGroupsChangeLabel: "8% from last month",
}

export const members: Member[] = [
  {
    id: "1",
    name: "Ali Ahmadi",
    email: "ali.ahmadi@example.com",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
    role: "Admin",
    status: "active",
    joinedAt: "2025-05-20",
    groupsCount: 3,
  },
  {
    id: "2",
    name: "Sara Mohammadi",
    email: "sara.mohammadi@example.com",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
    role: "Instructor",
    status: "active",
    joinedAt: "2025-05-15",
    groupsCount: 5,
  },
  {
    id: "3",
    name: "Amir Hosseini",
    email: "amir.hosseini@example.com",
    avatarUrl: "https://i.pravatar.cc/150?img=51",
    role: "Student",
    status: "active",
    joinedAt: "2025-05-12",
    groupsCount: 2,
  },
  {
    id: "4",
    name: "Neda Ahmadi",
    email: "neda.ahmadi@example.com",
    avatarUrl: "https://i.pravatar.cc/150?img=45",
    role: "Student",
    status: "pending",
    joinedAt: "2025-05-10",
    groupsCount: 1,
  },
  {
    id: "5",
    name: "Mohammad Rezaei",
    email: "m.rezaei@example.com",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
    role: "Instructor",
    status: "active",
    joinedAt: "2025-05-08",
    groupsCount: 4,
  },
  {
    id: "6",
    name: "Zahra Karimi",
    email: "zahra.karimi@example.com",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
    role: "Student",
    status: "inactive",
    joinedAt: "2025-05-05",
    groupsCount: 0,
  },
]

export const totalMembersCount = 2548

export const topGroups: TopGroup[] = [
  { id: "g1", name: "React Developers", membersCount: 482, icon: "react" },
  { id: "g2", name: "UI/UX Design", membersCount: 356, icon: "design" },
  { id: "g3", name: "Data Science", membersCount: 298, icon: "data" },
  { id: "g4", name: "General Discussion", membersCount: 276, icon: "discussion" },
  { id: "g5", name: "Announcements", membersCount: 210, icon: "announcement" },
]

export const recentActivity: ActivityItem[] = [
  {
    id: "a1",
    actorName: "Sara Mohammadi",
    actorAvatarUrl: "https://i.pravatar.cc/150?img=32",
    action: "joined the group",
    targetLabel: "UI/UX Design",
    timeLabel: "2 hours ago",
  },
  {
    id: "a2",
    actorName: "Amir Hosseini",
    actorAvatarUrl: "https://i.pravatar.cc/150?img=51",
    action: "posted in",
    targetLabel: "React Developers",
    timeLabel: "5 hours ago",
  },
  {
    id: "a3",
    actorName: "System",
    action: "New announcement published",
    targetLabel: "System Maintenance",
    timeLabel: "1 day ago",
  },
  {
    id: "a4",
    actorName: "Zahra Karimi",
    actorAvatarUrl: "https://i.pravatar.cc/150?img=47",
    action: "updated her profile",
    timeLabel: "2 days ago",
  },
]