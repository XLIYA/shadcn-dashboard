import type { Message, MessageStats } from "@/types/message"

const now = Date.now()
const minutesAgo = (m: number) => new Date(now - m * 60_000).toISOString()
const daysAgo = (d: number) => new Date(now - d * 86_400_000).toISOString()

export const messages: Message[] = [
  {
    id: "1",
    sender: {
      id: "u1",
      name: "Ali Ahmadi",
      email: "ali.ahmadi@example.com",
      avatarUrl: "https://i.pravatar.cc/150?img=12",
    },
    subject: "Registration Question",
    preview:
      "Hello, I can't complete my registration for the React Advanced course. It shows an ...",
    body:
      "Hello Admin,\n\nI can't complete my registration for the React Advanced course. It shows an error after payment. Please help me resolve this issue.\n\nThanks!\nAli",
    status: "new",
    category: "Registration",
    createdAt: minutesAgo(2),
  },
  {
    id: "2",
    sender: {
      id: "u2",
      name: "Sara Mohammadi",
      email: "sara.mohammadi@example.com",
      avatarUrl: "https://i.pravatar.cc/150?img=32",
    },
    subject: "Assignment Submission",
    preview: 'I\'ve uploaded my assignment but it is still showing as "Not Submitted".',
    body:
      'Hi,\n\nI\'ve uploaded my assignment but it is still showing as "Not Submitted". Could you please check?\n\nThanks,\nSara',
    status: "replied",
    category: "Assignment",
    createdAt: daysAgo(1),
  },
  {
    id: "3",
    sender: {
      id: "u3",
      name: "Amir Hosseini",
      email: "amir.hosseini@example.com",
      avatarUrl: "https://i.pravatar.cc/150?img=51",
    },
    subject: "Course Access Issue",
    preview: "I cannot access Lesson 4. It says I do not have permission.",
    body: "Hello,\n\nI cannot access Lesson 4. It says I do not have permission.\n\nRegards,\nAmir",
    status: "closed",
    category: "Course Access",
    createdAt: daysAgo(2),
  },
  {
    id: "4",
    sender: {
      id: "u4",
      name: "Neda Ahmadi",
      email: "neda.ahmadi@example.com",
      avatarUrl: "https://i.pravatar.cc/150?img=45",
    },
    subject: "Payment Confirmation",
    preview: "I made the payment 3 days ago but it is not updated in my dashboard.",
    body:
      "Hi,\n\nI made the payment 3 days ago but it is not updated in my dashboard. Please check.\n\nNeda",
    status: "pending",
    category: "Payment",
    createdAt: daysAgo(3),
  },
  {
    id: "5",
    sender: {
      id: "u5",
      name: "Mohammad Rezaei",
      email: "mohammad.rezaei@example.com",
      avatarUrl: "https://i.pravatar.cc/150?img=15",
    },
    subject: "Certificate Download",
    preview: "How can I download my completion certificate?",
    body: "Hello,\n\nHow can I download my completion certificate?\n\nThanks,\nMohammad",
    status: "replied",
    category: "Certificate",
    createdAt: daysAgo(4),
  },
]

export const messageStats: MessageStats = {
  total: 1284,
  totalChangeLabel: "12% from last week",
  unread: 32,
  repliedToday: 18,
  repliedTodayChangeLabel: "8% from yesterday",
}