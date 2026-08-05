export type MessageStatus = "new" | "replied" | "closed" | "pending"

export interface MessageSender {
  id: string
  name: string
  email: string
  avatarUrl?: string
}

export interface Message {
  id: string
  sender: MessageSender
  subject: string
  preview: string
  body: string
  status: MessageStatus
  category: string
  createdAt: string // ISO date
}

export interface MessageStats {
  total: number
  totalChangeLabel?: string
  unread: number
  repliedToday: number
  repliedTodayChangeLabel?: string
}