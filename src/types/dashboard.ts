import type { LucideIcon } from 'lucide-react'

export interface StatItem {
  icon: LucideIcon
  value: string
  label: string
  color: string
}

export interface UpcomingClassItem {
  icon: LucideIcon | null
  iconBg: string
  iconColor: string
  title: string
  teacher: string
  time: string
  status: 'Online' | 'Offline'
  label?: string
}

export interface ActivityItem {
  icon: LucideIcon
  iconBg: string
  iconColor: string
  title: string
  time: string
}

export interface ProgressItem {
  icon: LucideIcon | null
  iconBg?: string
  iconColor?: string
  label: string
  value: number
  badge?: string
  badgeBg?: string
}