import { api } from "@/api/axios";
import { getEvent } from "@/api/courseApi";
import { CalendarHeader } from "@/components/calendar/CalendarHeader";
import { EventTypeLegend } from "@/components/calendar/EventTypeLegend";
import { MainCalendarGrid } from "@/components/calendar/MainCalendarGrid";
import { MiniCalendarCard } from "@/components/calendar/MiniCalendarCard";
import { TodaySchedule } from "@/components/calendar/TodaySchedule";
import { UpcomingEvents } from "@/components/calendar/UpcomingEvents";
import {  today } from "@/data/events";
import type { CalendarEvent } from "@/types/event";
import type { EventType } from "@/types/event";
import { useEffect, useMemo, useState } from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner"

export default function CalendarPage() {
  const [selected, setSelected] = useState<Date | undefined>(today);
  const [month, setMonth] = useState<Date>(today);
//  connect to api 

 const { data:events, error, isLoading, isError } = useQuery({
    queryKey: ["calendar"],
    queryFn: getEvent ,
  });
  console.log(events);

  const todayEvents = useMemo(
    () => events?.filter((e:CalendarEvent) => e.date.toDateString() === today.toDateString()),
    []
  );

  const upcomingEvents = useMemo(
    () =>
      events?.filter((e:CalendarEvent) => e.date >= today).sort((a:any, b:any) => a.date.getTime() - b.date.getTime()),
    []
  );

  const eventDays = useMemo(
    () =>
      events?.reduce((acc:any, e:CalendarEvent) => {
        const key = e.date.toDateString();
        if (!acc[key]) acc[key] = [];
        acc[key].push(e.type);
        return acc;
      }, {}),
    []
  );

  const monthLabel = month.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const goToToday = () => {
    setSelected(today);
    setMonth(today);
  };

  const goPrevMonth = () => {
    setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
  };

  const goNextMonth = () => {
    setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));
  };
if (isLoading) {
    return <Spinner /> 
  }
  if(isError){
    return <p>{error.message}</p>
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-[1100px] mx-auto">
        <CalendarHeader
          monthLabel={monthLabel}
          onToday={goToToday}
          onPrevMonth={goPrevMonth}
          onNextMonth={goNextMonth}
        />

        {/* Main row: big calendar + right sidebar */}
        <div className="flex gap-5 items-start">
          <MainCalendarGrid
            month={month}
            selected={selected}
            onSelect={setSelected}
            eventDays={eventDays|| []}
            today={today}
          />

          <div className="w-[280px] flex-shrink-0 flex flex-col gap-4">
            <TodaySchedule events={todayEvents||[]} />
            <MiniCalendarCard
              selected={selected}
              onSelect={setSelected}
              month={month}
              onMonthChange={setMonth}
            />
          </div>
        </div>

        {/* Bottom row: Upcoming Events + Legend */}
        <div className="mt-5 flex gap-5 items-start">
          <UpcomingEvents events={upcomingEvents|| []} today={today} />
          <EventTypeLegend />
        </div>
      </div>
    </div>
  );
}
