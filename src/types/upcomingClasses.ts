import { Atom } from 'lucide-react'
import type { UpcomingClassItem } from '../types/dashboard'

export const upcomingClasses: UpcomingClassItem[] = [
  {
    icon: Atom,
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-500',
    title: 'React Advanced',
    teacher: 'Prof. John Smith',
    time: 'Tomorrow\n10:00 AM',
    status: 'Online',
  },
  {
    icon: null,
    label: 'TS',
    iconBg: 'bg-blue-600',
    iconColor: 'text-white',
    title: 'TypeScript Basics',
    teacher: 'Prof. Sarah Johnson',
    time: 'Wed, May 21\n2:00 PM',
    status: 'Online',
  },
  {
    icon: null,
    label: 'JS',
    iconBg: 'bg-yellow-400',
    iconColor: 'text-black',
    title: 'JavaScript ES6+',
    teacher: 'Prof. Mike Brown',
    time: 'Fri, May 23\n11:00 AM',
    status: 'Offline',
  },
]