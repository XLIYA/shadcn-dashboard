import type { CalendarEvent } from '../types/event'

export const today = new Date(2025, 4, 20)

export const events: CalendarEvent[] = [
  // --- ۲۰ می (امروز) ---
  { id: 1, title: 'React Advanced',    type: 'Class',    time: '10:00 AM', location: 'Room A-201',     date: new Date(2025, 4, 20) },
  { id: 2, title: 'TypeScript Basics', type: 'Lecture',  time: '02:00 PM', location: 'Online Meeting', online: true, date: new Date(2025, 4, 20) },
  { id: 3, title: 'JavaScript ES6+',   type: 'Lab',      time: '04:30 PM', location: 'Room B-305',     date: new Date(2025, 4, 20) },

  // --- رویدادهای دیگر ماه (برای تطابق دات‌های تقویم با موکاپ) ---
  { id: 4,  title: 'Frontend Fundamentals', type: 'Class',    time: '09:00 AM', location: 'Room A-101', date: new Date(2025, 4, 5) },
  { id: 5,  title: 'UI Design Workshop',    type: 'Workshop', time: '01:00 PM', location: 'Room C-102', date: new Date(2025, 4, 9) },
  { id: 6,  title: 'State Management',      type: 'Class',    time: '10:30 AM', location: 'Room A-201', date: new Date(2025, 4, 12) },
  { id: 7,  title: 'CSS Deep Dive',         type: 'Lecture',  time: '11:00 AM', location: 'Room B-204', date: new Date(2025, 4, 14) },
  { id: 8,  title: 'Component Patterns',    type: 'Class',    time: '03:00 PM', location: 'Room A-201', date: new Date(2025, 4, 14) },
  { id: 9,  title: 'Sprint Review',         type: 'Lecture',  time: '10:00 AM', location: 'Online',     online: true, date: new Date(2025, 4, 30) },

  // --- رویدادهای پیش‌رو ---
  { id: 10, title: 'React Workshop',  type: 'Workshop', time: '10:00 AM', location: 'Room A-201', date: new Date(2025, 4, 21) },
  { id: 11, title: 'Midterm Exam',    type: 'Exam',      time: '09:00 AM', location: 'Exam Hall',  date: new Date(2025, 4, 28) },
  { id: 12, title: 'JavaScript Quiz', type: 'Quiz',       time: '11:00 AM', location: 'Online',    online: true, date: new Date(2025, 5, 1) },
  { id: 13, title: 'Team Meeting',    type: 'Meeting',    time: '02:00 PM', location: 'Online',    online: true, date: new Date(2025, 5, 3) },
]