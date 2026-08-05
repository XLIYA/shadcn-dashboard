export type EventType =
  | 'Class'
  | 'Lecture'
  | 'Lab'
  | 'Exam'
  | 'Meeting'
  | 'Workshop'
  | 'Quiz'

export interface CalendarEvent {
  id: number
  title: string
  type: EventType
  time: string
  location: string
  online?: boolean
  date: Date
}