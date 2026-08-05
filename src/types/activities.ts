import { Check, FileText, UserPlus } from 'lucide-react'
import type { ActivityItem } from '../types/dashboard'

export const activities: ActivityItem[] = [
  {
    icon: Check,
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    title: 'Completed Assignment: React Components',
    time: '2 hours ago',
  },
  {
    icon: FileText,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    title: 'Submitted Quiz: JavaScript Basics',
    time: '1 day ago',
  },
  {
    icon: UserPlus,
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-500',
    title: 'Joined Course: Context API Masterclass',
    time: '3 days ago',
  },
]