import { useState } from "react"
import { Calendar, Tag, MoreVertical, Paperclip, Smile, Send } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { statusBadgeClass, statusLabels } from "@/lib/messageStyles"
import { cn } from "@/lib/utils"
import type { Message } from "@/types/message"

interface MessageDetailPanelProps {
  message?: Message
  onSendReply?: (message: Message, reply: string) => void
}

export function MessageDetailPanel({ message, onSendReply }: MessageDetailPanelProps) {
  const [reply, setReply] = useState("")

  if (!message) {
    return (
      <Card className="flex h-full min-h-64 items-center justify-center text-sm text-muted-foreground">
        Select a message to view details
      </Card>
    )
  }

  const initials = message.sender.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)

  const handleSend = () => {
    if (!reply.trim()) return
    onSendReply?.(message, reply.trim())
    setReply("")
  }

  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between px-(--card-spacing)">
        <h3 className="font-heading text-base font-medium">{message.subject}</h3>
        <Button variant="ghost" size="icon-sm">
          <MoreVertical />
        </Button>
      </div>

      <div className="flex items-center gap-3 px-(--card-spacing)">
        <Avatar>
          <AvatarImage src={message.sender.avatarUrl} alt={message.sender.name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium">{message.sender.name}</span>
          <span className="text-xs text-muted-foreground">{message.sender.email}</span>
        </div>
        <Badge className={cn("ml-auto", statusBadgeClass[message.status])}>
          {statusLabels[message.status]}
        </Badge>
      </div>

      <div className="flex flex-wrap items-center gap-4 px-(--card-spacing) text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Calendar className="size-3.5" />
          {new Date(message.createdAt).toLocaleString()}
        </span>
        <span className="flex items-center gap-1">
          <Tag className="size-3.5" />
          {message.category}
        </span>
      </div>

      <Separator />

      <div className="flex-1 overflow-y-auto whitespace-pre-line px-(--card-spacing) text-sm text-foreground">
        {message.body}
      </div>

      <div className="flex flex-col gap-2 px-(--card-spacing) pb-(--card-spacing)">
        <span className="text-sm font-medium">Reply</span>
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Type your reply..."
          rows={4}
          className="w-full resize-none rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon-sm">
              <Paperclip />
            </Button>
            <Button variant="ghost" size="icon-sm">
              <Smile />
            </Button>
          </div>
          <Button onClick={handleSend} disabled={!reply.trim()}>
            <Send data-icon="inline-start" />
            Send Reply
          </Button>
        </div>
      </div>
    </Card>
  )
}