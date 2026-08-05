import { Calendar } from '@/components/ui/calendar'

interface MiniCalendarCardProps {
  selected: Date | undefined
  onSelect: (d: Date | undefined) => void
  month: Date
  onMonthChange: (d: Date) => void
}

export function MiniCalendarCard({ selected, onSelect, month, onMonthChange }: MiniCalendarCardProps) {
  return (
    <div className="mini-calendar bg-white rounded-xl border border-gray-200 p-3">
      <Calendar
        mode="single"
        selected={selected}
        onSelect={onSelect}
        month={month}
        onMonthChange={onMonthChange}
        // سایز سلول‌ها به‌صورت پیش‌فرض بزرگ‌تر از چیزیه که تو موکاپ می‌بینیم؛
        // با override کردن --cell-size و کلاس‌های نیو/هفته/کپشن فشرده‌ترش می‌کنیم.
        className="w-full p-0 bg-white [--cell-size:1.85rem] [&_[data-selected-single=true]]:!bg-[#7c6ff7] [&_[data-selected-single=true]]:!text-white"
        classNames={{
          month: 'flex w-full flex-col gap-2',
          month_caption: 'flex h-7 w-full items-center justify-center px-7 text-[13px] font-semibold',
          weekday: 'flex-1 text-[11px] font-medium text-gray-400',
          week: 'mt-1 flex w-full',
          button_previous: 'size-6 p-0',
          button_next: 'size-6 p-0',
          day: 'group/day relative aspect-square h-full w-full rounded-md p-0 text-center select-none text-[12px]',
        }}
      />
    </div>
  )
}