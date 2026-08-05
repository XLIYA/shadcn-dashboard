import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Calendar } from '@/components/ui/calendar'

export function DashboardCalendarCard() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 4, 20))

  return (
    <Card className="w-80 shrink-0 border p-4 gap-2">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-base">Calendar</p>
        <a href="#" className="text-xs text-indigo-600 font-medium hover:underline">
          View Calendar
        </a>
      </div>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="p-0 w-full [&_button]:text-indigo-600"
        classNames={{
          months: 'flex flex-col',
          month: 'space-y-1',

          month_caption: 'flex justify-center items-center h-7 text-xs relative',
          nav: 'flex items-center gap-1',
          button_previous: 'h-5 w-5',
          button_next: 'h-5 w-5',

          month_grid: 'w-full border-collapse',
          weekdays: 'flex',
          weekday: 'w-8 text-[10px] text-muted-foreground font-normal',

          week: 'flex w-full mt-1',

          day: 'h-8 w-8 p-0 text-xs font-normal',
          today: 'text-indigo-600 font-semibold',
          selected: 'bg-indigo-600 text-white hover:bg-indigo-600 hover:text-white',
        }}
      />

      <div className="border-l-2 border-indigo-600 pl-2 mt-1">
        <p className="text-xs font-medium">React Advanced</p>
        <p className="text-xs text-muted-foreground">10:00 AM - 12:00 PM</p>
      </div>
    </Card>
  )
}