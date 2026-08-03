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

const typeColors: Record<string, { bg: string; text: string }> = {
  Class:    { bg: '#7c6ff7', text: '#fff' },
  Lecture:  { bg: '#dcfce7', text: '#15803d' },
  Lab:      { bg: '#fef9c3', text: '#a16207' },
  Exam:     { bg: '#fee2e2', text: '#dc2626' },
  Meeting:  { bg: '#dbeafe', text: '#1d4ed8' },
  Workshop: { bg: '#ffedd5', text: '#c2410c' },
  Quiz:     { bg: '#f3e8ff', text: '#7e22ce' },
}

const dotColors: Record<string, string> = {
  Class:    '#7c6ff7',
  Lecture:  '#22c55e',
  Lab:      '#eab308',
  Exam:     '#ef4444',
  Meeting:  '#3b82f6',
  Workshop: '#f97316',
  Quiz:     '#a855f7',
}

const legendItems = [
  { type: 'Class',   color: '#7c6ff7' },
  { type: 'Lecture', color: '#22c55e' },
  { type: 'Lab',     color: '#eab308' },
  { type: 'Exam',    color: '#ef4444' },
  { type: 'Meeting', color: '#3b82f6' },
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
    <div style={{ minHeight: '100vh', background: '#f9fafb', padding: '32px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 700, color: '#111827', margin: 0 }}>Calendar</h1>
            <p style={{ fontSize: 13, color: '#6b7280', marginTop: 4 }}>Manage your schedule and upcoming events.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={btnStyle}>Today</button>
            <button style={iconBtnStyle}><ChevronLeft size={15} color="#374151" /></button>
            <button style={iconBtnStyle}><ChevronRight size={15} color="#374151" /></button>
            <select style={{ ...btnStyle, paddingRight: 28, appearance: 'auto' }}>
              <option>May 2025</option>
            </select>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 14px', fontSize: 13, background: '#7c6ff7', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontWeight: 500 }}>
              <Plus size={14} />
              Add Event
            </button>
          </div>
        </div>

        {/* Main row: big calendar + right sidebar */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>

          {/* Big Calendar */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
            {/* Day headers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: '1px solid #f3f4f6' }}>
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                <div key={d} style={{ padding: '10px 0', textAlign: 'center', fontSize: 12, fontWeight: 600, color: '#9ca3af' }}>{d}</div>
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
          <div style={{ width: 280, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>

            {/* Today's Schedule */}
            <div style={cardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>Today's Schedule</span>
                <button style={{ fontSize: 12, color: '#7c6ff7', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {todayEvents.map(e => (
                  <div key={e.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ fontSize: 12, color: '#6b7280', width: 60, flexShrink: 0, paddingTop: 2 }}>{e.time}</span>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: dotColors[e.type], marginTop: 4, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>{e.title}</span>
                        <span style={{ fontSize: 10, padding: '2px 6px', borderRadius: 4, background: typeColors[e.type].bg, color: typeColors[e.type].text, fontWeight: 600 }}>
                          {e.type}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3, fontSize: 11, color: '#9ca3af' }}>
                        {e.online ? <Video size={11} /> : <MapPin size={11} />}
                        {e.location}
                      </div>
                    </div>
                    <button style={{ fontSize: 11, border: '1px solid #e5e7eb', borderRadius: 6, padding: '3px 10px', background: '#fff', color: '#374151', cursor: 'pointer', flexShrink: 0 }}>
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini Calendar (shadcn) */}
            <div className="mini-calendar" style={{ background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', padding: 12 }}>
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
        <div style={{ marginTop: 20, display: 'flex', gap: 20, alignItems: 'flex-start' }}>

          {/* Upcoming Events */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', padding: '20px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>Upcoming Events</span>
              <button style={{ fontSize: 12, color: '#7c6ff7', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                  {['Event','Type','Date','Time','Location','Action'].map(h => (
                    <th key={h} style={{ textAlign: 'left', paddingBottom: 10, fontSize: 12, fontWeight: 500, color: '#9ca3af' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {upcomingEvents.map(e => (
                  <tr key={e.id} style={{ borderBottom: '1px solid #f9fafb' }}>
                    <td style={{ padding: '12px 12px 12px 0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <CalendarIcon size={14} color="#6b7280" />
                        </div>
                        <span style={{ fontWeight: 500, color: '#111827' }}>{e.title}</span>
                      </div>
                    </td>
                    <td style={{ padding: '12px 12px 12px 0' }}>
                      <span style={{ fontSize: 11, padding: '3px 8px', borderRadius: 4, background: typeColors[e.type].bg, color: typeColors[e.type].text, fontWeight: 600 }}>
                        {e.type}
                      </span>
                    </td>
                    <td style={{ padding: '12px 12px 12px 0', color: '#374151' }}>
                      <div style={{ fontWeight: 500 }}>{formatDate(e.date)}</div>
                      <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>{getRelativeDay(e.date)}</div>
                    </td>
                    <td style={{ padding: '12px 12px 12px 0', color: '#374151' }}>{e.time}</td>
                    <td style={{ padding: '12px 12px 12px 0', color: '#374151' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        {e.online ? <Video size={12} color="#9ca3af" /> : <MapPin size={12} color="#9ca3af" />}
                        {e.location}
                      </div>
                    </td>
                    <td style={{ padding: '12px 0' }}>
                      <button style={{ fontSize: 12, border: '1px solid #e5e7eb', borderRadius: 6, padding: '4px 12px', background: '#fff', color: '#374151', cursor: 'pointer' }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div style={{ width: 280, flexShrink: 0, background: '#fff', borderRadius: 12, border: '1px solid #e5e7eb', padding: '16px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 20px' }}>
              {legendItems.map(({ type, color }) => (
                <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: color, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: '#374151' }}>{type}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const btnStyle: React.CSSProperties = {
  padding: '6px 12px',
  fontSize: 13,
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  background: '#fff',
  color: '#374151',
  cursor: 'pointer',
}

const iconBtnStyle: React.CSSProperties = {
  padding: '6px 8px',
  border: '1px solid #e5e7eb',
  borderRadius: 8,
  background: '#fff',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
}

const cardStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 12,
  border: '1px solid #e5e7eb',
  padding: 16,
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
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
      {cells.map((cell, i) => {
        const key = cell.date.toDateString()
        const dots = eventDays[key] ?? []
        const isToday = cell.date.toDateString() === today.toDateString()
        const isSelected = selected && cell.date.toDateString() === selected.toDateString()

        return (
          <div
            key={i}
            onClick={() => onSelect(cell.date)}
            style={{
              minHeight: 80,
              padding: '8px 10px',
              borderBottom: '1px solid #f3f4f6',
              borderRight: '1px solid #f3f4f6',
              cursor: 'pointer',
              background: !cell.current ? '#fafafa' : '#fff',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 6 }}>
              <span style={{
                width: 26, height: 26,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%',
                fontSize: 13,
                fontWeight: isToday ? 700 : 400,
                background: isToday ? '#7c6ff7' : isSelected ? '#f3f4f6' : 'transparent',
                color: isToday ? '#fff' : cell.current ? '#111827' : '#d1d5db',
              }}>
                {cell.date.getDate()}
              </span>
            </div>
            <div style={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {dots.slice(0, 3).map((type, j) => (
                <div key={j} style={{ width: 6, height: 6, borderRadius: '50%', background: dotColors[type] }} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
