import { useState } from "react"
import { MessageStatsCards } from "@/components/messages/MessageStatsCards"
import { MessagesList } from "@/components/messages/MessagesList"
import { MessageDetailPanel } from "@/components/messages/MessageDetailPanel"
import { messages as initialMessages, messageStats } from "@/data/messages"
import type { Message } from "@/types/message"

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [selectedId, setSelectedId] = useState<string | undefined>(initialMessages[0]?.id)

  const selectedMessage = messages.find((m) => m.id === selectedId)

  const handleSendReply = (message: Message, reply: string) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === message.id
          ? { ...m, status: "replied", body: `${m.body}\n\n---\nAdmin reply: ${reply}` }
          : m
      )
    )
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="font-heading text-2xl font-semibold">Messages</h1>
        <p className="text-sm text-muted-foreground">
          Manage and respond to messages from students and instructors.
        </p>
      </div>

      <MessageStatsCards stats={messageStats} />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.6fr_1fr]">
        <MessagesList
          messages={messages}
          selectedId={selectedId}
          onSelect={(m) => setSelectedId(m.id)}
        />
        <MessageDetailPanel message={selectedMessage} onSendReply={handleSendReply} />
      </div>
    </div>
  )
}