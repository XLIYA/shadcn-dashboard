import { Atom, Box } from 'lucide-react'
import type { ProgressItem } from '../types/dashboard'

export const progressItems: ProgressItem[] = [
  { icon: Atom, iconBg: 'bg-sky-100', iconColor: 'text-sky-500', label: 'React Development', value: 75 },
  { icon: null, label: 'TypeScript Fundamentals', value: 45, badge: 'TS', badgeBg: 'bg-blue-600' },
  { icon: Box, iconBg: 'bg-green-100', iconColor: 'text-green-600', label: 'Node.js & Express', value: 60 },
]