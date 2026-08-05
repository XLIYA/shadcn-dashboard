import { dotClasses, legendItems } from "@/lib/eventStyles";


export function EventTypeLegend() {
  return (
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
  )
}