import type { EventType } from '../types/event'

// رنگ بج نوع رویداد (بک‌گراند + متن)
export const typeClasses: Record<EventType, string> = {
  Class:    'bg-[#7c6ff7] text-white',
  Lecture:  'bg-green-100 text-green-700',
  Lab:      'bg-yellow-100 text-yellow-700',
  Exam:     'bg-red-100 text-red-600',
  Meeting:  'bg-blue-100 text-blue-700',
  Workshop: 'bg-orange-100 text-orange-700',
  Quiz:     'bg-purple-100 text-purple-700',
}

// رنگ نقطه (دات) کوچک کنار هر رویداد / روی سلول تقویم
export const dotClasses: Record<EventType, string> = {
  Class:    'bg-[#7c6ff7]',
  Lecture:  'bg-green-500',
  Lab:      'bg-yellow-500',
  Exam:     'bg-red-500',
  Meeting:  'bg-blue-500',
  Workshop: 'bg-orange-500',
  Quiz:     'bg-purple-500',
}

export const legendItems: { type: EventType }[] = [
  { type: 'Class' },
  { type: 'Lecture' },
  { type: 'Lab' },
  { type: 'Exam' },
  { type: 'Meeting' },
]