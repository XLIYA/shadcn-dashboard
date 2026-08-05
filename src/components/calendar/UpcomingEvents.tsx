import { formatDate, getRelativeDay } from '@/lib/date'
import { typeClasses } from '@/lib/eventStyles'
import type { CalendarEvent } from '@/types/event'
import { Calendar as CalendarIcon, MapPin, Video } from 'lucide-react'


const COLUMNS = ['Event', 'Type', 'Date', 'Time', 'Location', 'Action']

interface UpcomingEventsProps {
  events: CalendarEvent[]
  today: Date
}

export function UpcomingEvents({ events, today }: UpcomingEventsProps) {
  return (
    <div className="flex-1 bg-white rounded-xl border border-gray-200 px-6 py-5">
      <div className="flex justify-between items-center mb-4">
        <span className="text-[13px] font-semibold text-gray-900">Upcoming Events</span>
        <button className="text-xs text-[#7c6ff7] bg-transparent border-none cursor-pointer">View All</button>
      </div>
      <table className="w-full border-collapse text-[13px]">
        <thead>
          <tr className="border-b border-gray-100">
            {COLUMNS.map(h => (
              <th key={h} className="text-left pb-2.5 text-xs font-medium text-gray-400">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {events.map(e => (
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
                <div className="text-[11px] text-gray-400 mt-0.5">{getRelativeDay(e.date, today)}</div>
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
  )
}