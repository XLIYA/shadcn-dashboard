import { dotClasses, typeClasses } from '@/lib/eventStyles'
import type { CalendarEvent } from '@/types/event'
import { MapPin, Video } from 'lucide-react'

interface TodayScheduleProps {
  events: CalendarEvent[]
}

export function TodaySchedule({ events }: TodayScheduleProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-3.5">
        <span className="text-[13px] font-semibold text-gray-900">Today's Schedule</span>
        <button className="text-xs text-[#7c6ff7] bg-transparent border-none cursor-pointer">View All</button>
      </div>
      <div className="flex flex-col gap-4">
        {events.map(e => (
          <div key={e.id} className="flex items-start gap-2.5">
            <span className="text-xs text-gray-500 w-[60px] flex-shrink-0 pt-0.5">{e.time}</span>
            <div className={`w-2 h-2 rounded-full mt-1 flex-shrink-0 ${dotClasses[e.type]}`} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-nowrap">
                <span className="text-[13px] font-semibold text-gray-900 truncate">{e.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold flex-shrink-0 ${typeClasses[e.type]}`}>
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
  )
}