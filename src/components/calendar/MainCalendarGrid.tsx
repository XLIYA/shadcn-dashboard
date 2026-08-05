import { dotClasses } from "@/lib/eventStyles"
import type { EventType } from "@/types/event"
import { isSameDay } from "date-fns"

interface GridCell {
  date: Date
  current: boolean
}

interface MainCalendarGridProps {
  month: Date
  selected: Date | undefined
  onSelect: (d: Date | undefined) => void
  eventDays: Record<string, EventType[]>
  today: Date
}

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function buildCells(month: Date): GridCell[] {
  const year = month.getFullYear()
  const mon = month.getMonth()
  const firstDay = new Date(year, mon, 1)
  const startOffset = firstDay.getDay()
  const daysInMonth = new Date(year, mon + 1, 0).getDate()
  const prevMonthDays = new Date(year, mon, 0).getDate()

  const cells: GridCell[] = []

  // روزهای انتهای ماه قبل
  for (let i = startOffset - 1; i >= 0; i--) {
    cells.push({ date: new Date(year, mon - 1, prevMonthDays - i), current: false })
  }

  // روزهای ماه جاری
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, mon, d), current: true })
  }

  // روزهای ابتدای ماه بعد — با شمارنده‌ی مستقل به‌جای فرمول ترکیبی قبلی
  // (باگ قبلی: تاریخ‌های ماه بعد به‌درستی محاسبه نمی‌شدند چون از طول ماه جاری
  // به‌جای شمارنده‌ی مستقل استفاده می‌شد)
  let nextMonthDay = 1
  while (cells.length % 7 !== 0) {
    cells.push({ date: new Date(year, mon + 1, nextMonthDay), current: false })
    nextMonthDay += 1
  }

  return cells
}

export function MainCalendarGrid({ month, selected, onSelect, eventDays, today }: MainCalendarGridProps) {
  const cells = buildCells(month)

  return (
    <div className="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-7 border-b border-gray-100">
        {WEEKDAYS.map(d => (
          <div key={d} className="py-2.5 text-center text-xs font-semibold text-gray-400">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {cells.map((cell, i) => {
          const dots = eventDays[cell.date.toDateString()] ?? []
          const isToday = isSameDay(cell.date, today)
          const isSelected = selected ? isSameDay(cell.date, selected) : false

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
    </div>
  )
}