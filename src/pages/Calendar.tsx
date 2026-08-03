import { useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Video, Plus, Calendar as CalendarIcon } from 'lucide-react'
import { Calendar } from '@/components/ui/calendar'

const today = new Date(2025, 4, 20)

const events: {
  id: number
  title: string
  type: 'Class' | 'Lecture' | 'Lab' | 'Exam' | 'Meeting' | 'Workshop' | 'Quiz'
  time: string
  location: string
  online?: boolean
  date: Date
}[] = [
  { id: 1, title: 'React Advanced',    type: 'Class',    time: '10:00 AM', location: 'Room A-201', date: new Date(2025, 4, 20) },
  { id: 2, title: 'TypeScript Basics', type: 'Lecture',  time: '02:00 PM', location: 'Online Meeting', online: true, date: new Date(2025, 4, 20) },
  { id: 3, title: 'JavaScript ES6+',   type: 'Lab',      time: '04:30 PM', location: 'Room B-305', date: new Date(2025, 4, 20) },
  { id: 4, title: 'React Workshop',    type: 'Workshop', time: '10:00 AM', location: 'Room A-201', date: new Date(2025, 4, 21) },
  { id: 5, title: 'Midterm Exam',      type: 'Exam',     time: '09:00 AM', location: 'Exam Hall',  date: new Date(2025, 4, 28) },
  { id: 6, title: 'JavaScript Quiz',   type: 'Quiz',     time: '11:00 AM', location: 'Online',    online: true, date: new Date(2025, 5, 1) },
  { id: 7, title: 'Team Meeting',      type: 'Meeting',  time: '02:00 PM', location: 'Online',    online: true, date: new Date(2025, 5, 3) },
]

// رنگ بج نوع رویداد (بک‌گراند + متن)
const typeClasses: Record<string, string> = {
  Class:    'bg-[#7c6ff7] text-white',
  Lecture:  'bg-green-100 text-green-700',
  Lab:      'bg-yellow-100 text-yellow-700',
  Exam:     'bg-red-100 text-red-600',
  Meeting:  'bg-blue-100 text-blue-700',
  Workshop: 'bg-orange-100 text-orange-700',
  Quiz:     'bg-purple-100 text-purple-700',
}

// رنگ نقطه (دات) کوچک کنار هر رویداد
const dotClasses: Record<string, string> = {
  Class:    'bg-[#7c6ff7]',
  Lecture:  'bg-green-500',
  Lab:      'bg-yellow-500',
  Exam:     'bg-red-500',
  Meeting:  'bg-blue-500',
  Workshop: 'bg-orange-500',
  Quiz:     'bg-purple-500',
}

const legendItems = [
  { type: 'Class' },
  { type: 'Lecture' },
  { type: 'Lab' },
  { type: 'Exam' },
  { type: 'Meeting' },
]

function getRelativeDay(date: Date): string {
  const diff = Math.round((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  if (diff === 0) return 'Today'
  if (diff === 1) return 'Tomorrow'
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  return `Next ${days[date.getDay()]}`
}

function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function CalendarPage() {
  const [selected, setSelected] = useState<Date | undefined>(today)
  const [month, setMonth] = useState<Date>(today)

  const todayEvents = events.filter(e => e.date.toDateString() === today.toDateString())
  const upcomingEvents = events
    .filter(e => e.date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime())

  const eventDays = events.reduce<Record<string, string[]>>((acc, e) => {
    const key = e.date.toDateString()
    if (!acc[key]) acc[key] = []
    acc[key].push(e.type)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-[22px] font-bold text-gray-900 m-0">Calendar</h1>
            <p className="text-[13px] text-gray-500 mt-1">Manage your schedule and upcoming events.</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-[13px] border border-gray-200 rounded-lg bg-white text-gray-700 cursor-pointer">
              Today
            </button>
            <button className="p-1.5 border border-gray-200 rounded-lg bg-white cursor-pointer flex items-center">
              <ChevronLeft size={15} className="text-gray-700" />
            </button>
            <button className="p-1.5 border border-gray-200 rounded-lg bg-white cursor-pointer flex items-center">
              <ChevronRight size={15} className="text-gray-700" />
            </button>
            <select className="px-3 py-1.5 pr-7 text-[13px] border border-gray-200 rounded-lg bg-white text-gray-700 cursor-pointer appearance-auto">
              <option>May 2025</option>
            </select>
            <button className="flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] bg-[#7c6ff7] text-white border-none rounded-lg cursor-pointer font-medium">
              <Plus size={14} />
              Add Event
            </button>
          </div>
        </div>

        {/* Main row: big calendar + right sidebar */}
        <div className="flex gap-5 items-start">

          {/* Big Calendar */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Day headers */}
            <div className="grid grid-cols-7 border-b border-gray-100">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                <div key={d} className="py-2.5 text-center text-xs font-semibold text-gray-400">{d}</div>
              ))}
            </div>
            <MainCalendarGrid
              month={month}
              selected={selected}
              onSelect={setSelected}
              eventDays={eventDays}
              today={today}
            />
          </div>

          {/* Right sidebar */}
          <div className="w-[280px] flex-shrink-0 flex flex-col gap-4">

            {/* Today's Schedule */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex justify-between items-center mb-3.5">
                <span className="text-[13px] font-semibold text-gray-900">Today's Schedule</span>
                <button className="text-xs text-[#7c6ff7] bg-transparent border-none cursor-pointer">View All</button>
              </div>
              <div className="flex flex-col gap-4">
                {todayEvents.map(e => (
                  <div key={e.id} className="flex items-start gap-2.5">
                    <span className="text-xs text-gray-500 w-[60px] flex-shrink-0 pt-0.5">{e.time}</span>
                    <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${dotClasses[e.type]}`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[13px] font-semibold text-gray-900">{e.title}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${typeClasses[e.type]}`}>
                          {e.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-0.5 text-[11px] text-gray-400">
                        {e.online ? <Video size={11} /> : <MapPin size={11} />}
                        {e.location}
                      </div>
                    </div>
                    <button className="text-[11px] border border-gray-200 rounded-md px-2.5 py-0.5 bg-white text-gray-700 cursor-pointer flex-shrink-0">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini Calendar (shadcn) */}
            <div className="mini-calendar bg-white rounded-xl border border-gray-200 p-3">
              <Calendar
                mode="single"
                selected={selected}
                onSelect={setSelected}
                month={month}
                onMonthChange={setMonth}
                className="w-full p-0 bg-white"
              />
            </div>

          </div>
        </div>

        {/* Bottom row: Upcoming Events + Legend */}
        <div className="mt-5 flex gap-5 items-start">

          {/* Upcoming Events */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 px-6 py-5">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[13px] font-semibold text-gray-900">Upcoming Events</span>
              <button className="text-xs text-[#7c6ff7] bg-transparent border-none cursor-pointer">View All</button>
            </div>
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="border-b border-gray-100">
                  {['Event','Type','Date','Time','Location','Action'].map(h => (
                    <th key={h} className="text-left pb-2.5 text-xs font-medium text-gray-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {upcomingEvents.map(e => (
                  <tr key={e.id} className="border-b border-gray-50">
                    <td className="py-3 pr-3 pl-0">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <CalendarIcon size={14} className="text-gray-500" />
                        </div>
                        <span className="font-medium text-gray-900">{e.title}</span>
                      </div>
                    </td>
                    <td className="py-3 pr-3 pl-0">
                      <span className={`text-[11px] px-2 py-0.5 rounded font-semibold ${typeClasses[e.type]}`}>
                        {e.type}
                      </span>
                    </td>
                    <td className="py-3 pr-3 pl-0 text-gray-700">
                      <div className="font-medium">{formatDate(e.date)}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">{getRelativeDay(e.date)}</div>
                    </td>
                    <td className="py-3 pr-3 pl-0 text-gray-700">{e.time}</td>
                    <td className="py-3 pr-3 pl-0 text-gray-700">
                      <div className="flex items-center gap-1">
                        {e.online ? <Video size={12} className="text-gray-400" /> : <MapPin size={12} className="text-gray-400" />}
                        {e.location}
                      </div>
                    </td>
                    <td className="py-3 pl-0">
                      <button className="text-xs border border-gray-200 rounded-md px-3 py-1 bg-white text-gray-700 cursor-pointer">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="w-[280px] flex-shrink-0 bg-white rounded-xl border border-gray-200 p-4">
            <div className="flex flex-wrap gap-x-5 gap-y-2.5">
              {legendItems.map(({ type }) => (
                <div key={type} className="flex items-center gap-1.5">
                  <div className={`w-2.5 h-2.5 rounded-[3px] flex-shrink-0 ${dotClasses[type]}`} />
                  <span className="text-xs text-gray-700">{type}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

// ─── Main Calendar Grid ───────────────────────────────────────────────────────
function MainCalendarGrid({
  month, selected, onSelect, eventDays, today,
}: {
  month: Date
  selected: Date | undefined
  onSelect: (d: Date | undefined) => void
  eventDays: Record<string, string[]>
  today: Date
}) {
  const year = month.getFullYear()
  const mon = month.getMonth()
  const firstDay = new Date(year, mon, 1)
  const startOffset = firstDay.getDay()
  const daysInMonth = new Date(year, mon + 1, 0).getDate()
  const prevMonthDays = new Date(year, mon, 0).getDate()

  const cells: { date: Date; current: boolean }[] = []
  for (let i = startOffset - 1; i >= 0; i--)
    cells.push({ date: new Date(year, mon - 1, prevMonthDays - i), current: false })
  for (let d = 1; d <= daysInMonth; d++)
    cells.push({ date: new Date(year, mon, d), current: true })
  while (cells.length % 7 !== 0)
    cells.push({ date: new Date(year, mon + 1, cells.length - daysInMonth - startOffset + 1), current: false })

  return (
    <div className="grid grid-cols-7">
      {cells.map((cell, i) => {
        const key = cell.date.toDateString()
        const dots = eventDays[key] ?? []
        const isToday = cell.date.toDateString() === today.toDateString()
        const isSelected = selected && cell.date.toDateString() === selected.toDateString()

        return (
          <div
            key={i}
            onClick={() => onSelect(cell.date)}
            className={`min-h-[80px] px-2.5 py-2 border-b border-r border-gray-100 cursor-pointer ${
              cell.current ? 'bg-white' : 'bg-gray-50'
            }`}
          >
            <div className="flex justify-end mb-1.5">
              <span
                className={`w-[26px] h-[26px] flex items-center justify-center rounded-full text-[13px] ${
                  isToday
                    ? 'font-bold bg-[#7c6ff7] text-white'
                    : isSelected
                      ? 'font-normal bg-gray-100 text-gray-900'
                      : `font-normal ${cell.current ? 'text-gray-900' : 'text-gray-300'}`
                }`}
              >
                {cell.date.getDate()}
              </span>
            </div>
            <div className="flex gap-[3px] flex-wrap justify-end">
              {dots.slice(0, 3).map((type, j) => (
                <div key={j} className={`w-1.5 h-1.5 rounded-full ${dotClasses[type]}`} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}