import type { MemberRole, MemberStatus } from "@/types/community"


export const roleBadgeClass: Record<MemberRole, string> = {
  Admin: "border-transparent bg-primary/10 text-primary",
  Instructor: "border-transparent bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Student: "border-transparent bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
}

export const statusDotClass: Record<MemberStatus, string> = {
  active: "bg-emerald-500",
  pending: "bg-amber-500",
  inactive: "bg-muted-foreground",
}

export const statusLabel: Record<MemberStatus, string> = {
  active: "Active",
  pending: "Pending",
  inactive: "Inactive",
}