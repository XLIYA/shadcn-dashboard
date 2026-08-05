import type { MessageStatus } from "@/types/message"

export const statusLabels: Record<MessageStatus, string> = {
  new: "New",
  replied: "Replied",
  closed: "Closed",
  pending: "Pending",
}

export const statusBadgeClass: Record<MessageStatus, string> = {
  new: "border-transparent bg-primary/10 text-primary",
  replied:
    "border-transparent bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  closed: "border-transparent bg-muted text-muted-foreground",
  pending:
    "border-transparent bg-amber-500/10 text-amber-600 dark:text-amber-400",
}