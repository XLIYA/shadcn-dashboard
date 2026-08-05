export type MemberRole = "Admin" | "Instructor" | "Student"
export type MemberStatus = "active" | "pending" | "inactive"

export interface Member {
  id: string
  name: string
  email: string
  avatarUrl?: string
  role: MemberRole
  status: MemberStatus
  joinedAt: string // ISO date
  groupsCount: number
}

export interface CommunityStats {
  totalMembers: number
  totalChangeLabel?: string
  students: number
  studentsChangeLabel?: string
  instructors: number
  instructorsChangeLabel?: string
  activeGroups: number
  activeGroupsChangeLabel?: string
}

export interface TopGroup {
  id: string
  name: string
  membersCount: number
  icon: "react" | "design" | "data" | "discussion" | "announcement"
}

export interface ActivityItem {
  id: string
  actorName: string
  actorAvatarUrl?: string
  action: string // e.g. "joined the group", "posted in", "updated her profile"
  targetLabel?: string // e.g. "UI/UX Design", "React Developers"
  timeLabel: string // e.g. "2 hours ago"
}