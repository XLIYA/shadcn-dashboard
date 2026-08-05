import { Users, BookOpen, GraduationCap, TrendingUp } from 'lucide-react'
import type { StatItem } from '../types/dashboard'

export const stats: StatItem[] = [
  { icon: Users, value: '125', label: 'Students', color: 'text-blue-500' },
  { icon: BookOpen, value: '18', label: 'Courses', color: 'text-green-600' },
  { icon: GraduationCap, value: '8', label: 'Teachers', color: 'text-violet-600' },
  { icon: TrendingUp, value: '92%', label: 'Progress', color: 'text-emerald-500' },
]