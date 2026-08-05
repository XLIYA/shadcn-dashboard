import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'

interface CalendarHeaderProps {
  monthLabel: string
  onToday: () => void
  onPrevMonth: () => void
  onNextMonth: () => void
}

export function CalendarHeader({ monthLabel, onToday, onPrevMonth, onNextMonth }: CalendarHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-6">
      <div>
        <h1 className="text-[22px] font-bold text-gray-900 m-0">Calendar</h1>
        <p className="text-[13px] text-gray-500 mt-1">Manage your schedule and upcoming events.</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onToday}
          className="px-3 py-1.5 text-[13px] border border-gray-200 rounded-lg bg-white text-gray-700 cursor-pointer"
        >
          Today
        </button>
        <button
          onClick={onPrevMonth}
          className="p-1.5 border border-gray-200 rounded-lg bg-white cursor-pointer flex items-center"
        >
          <ChevronLeft size={15} className="text-gray-700" />
        </button>
        <button
          onClick={onNextMonth}
          className="p-1.5 border border-gray-200 rounded-lg bg-white cursor-pointer flex items-center"
        >
          <ChevronRight size={15} className="text-gray-700" />
        </button>
        <select className="px-3 py-1.5 pr-7 text-[13px] border border-gray-200 rounded-lg bg-white text-gray-700 cursor-pointer appearance-auto">
          <option>{monthLabel}</option>
        </select>
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] bg-[#7c6ff7] text-white border-none rounded-lg cursor-pointer font-medium">
          <Plus size={14} />
          Add Event
        </button>
      </div>
    </div>
  )
}