import { useMemo, useState } from "react"
import { Search, Plus, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { statusBadgeClass, statusLabels } from "@/lib/messageStyles"
import { formatRelativeTime } from "@/lib/formatRelativeTime"
import { cn } from "@/lib/utils"
import type { Message, MessageStatus } from "@/types/message"

const PAGE_SIZE = 5

interface MessagesListProps {
    messages: Message[]
    selectedId?: string
    onSelect: (message: Message) => void
    onNewMessage?: () => void
}

export function MessagesList({
    messages,
    selectedId,
    onSelect,
    onNewMessage,
}: MessagesListProps) {
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState<MessageStatus | "all">("all")
    const [category, setCategory] = useState<string>("all")
    const [page, setPage] = useState(1)

    const categories = useMemo(
        () => Array.from(new Set(messages.map((m) => m.category))),
        [messages]
    )

    const filtered = useMemo(() => {
        return messages.filter((m) => {
            const q = search.toLowerCase()
            const matchesSearch =
                !q ||
                m.sender.name.toLowerCase().includes(q) ||
                m.subject.toLowerCase().includes(q)
            const matchesStatus = status === "all" || m.status === status
            const matchesCategory = category === "all" || m.category === category
            return matchesSearch && matchesStatus && matchesCategory
        })
    }, [messages, search, status, category])

    const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
    const currentPage = Math.min(page, totalPages)
    const pageItems = filtered.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    )

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
                <div className="relative min-w-48 flex-1">
                    <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            setPage(1)
                        }}
                        placeholder="Search messages..."
                        className="pl-8"
                    />
                </div>

                <Select
                    value={status}
                    onValueChange={(v) => {
                        setStatus(v as MessageStatus | "all")
                        setPage(1)
                    }}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="All Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="replied">Replied</SelectItem>
                        <SelectItem value="closed">Closed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                    </SelectContent>
                </Select>

                <Select
                    value={category}
                    onValueChange={(v) => {
                        setCategory(v ?? "all")
                        setPage(1)
                    }}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((c) => (
                            <SelectItem key={c} value={c}>
                                {c}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Button onClick={onNewMessage}>
                    <Plus data-icon="inline-start" />
                    New Message
                </Button>
            </div>

            <Card className="!py-0 overflow-hidden">
                <div className="divide-y divide-border">
                    {pageItems.map((m) => {
                        const isSelected = m.id === selectedId
                        const initials = m.sender.name
                            .split(" ")
                            .map((p) => p[0])
                            .join("")
                            .slice(0, 2)
                        return (
                            <button
                                key={m.id}
                                onClick={() => onSelect(m)}
                                className={cn(
                                    "flex w-full items-start gap-3 border-l-2 border-transparent px-4 py-3 text-left transition-colors hover:bg-muted/50",
                                    isSelected && "border-l-primary bg-primary/5"
                                )}
                            >
                                <Avatar>
                                    <AvatarImage src={m.sender.avatarUrl} alt={m.sender.name} />
                                    <AvatarFallback>{initials}</AvatarFallback>
                                </Avatar>
                                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="truncate text-sm font-medium">{m.sender.name}</span>
                                        <span className="shrink-0 text-xs text-muted-foreground">
                                            {formatRelativeTime(m.createdAt)}
                                        </span>
                                    </div>
                                    <span className="truncate text-sm text-primary">{m.subject}</span>
                                    <span className="truncate text-sm text-muted-foreground">{m.preview}</span>
                                </div>
                                <Badge className={cn("mt-0.5 shrink-0", statusBadgeClass[m.status])}>
                                    {statusLabels[m.status]}
                                </Badge>
                            </button>
                        )
                    })}
                    {pageItems.length === 0 && (
                        <div className="p-6 text-center text-sm text-muted-foreground">
                            No messages found.
                        </div>
                    )}
                </div>
            </Card>

            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground">
                <span>
                    Showing {filtered.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1} to{" "}
                    {Math.min(currentPage * PAGE_SIZE, filtered.length)} of {filtered.length} messages
                </span>
                <div className="flex items-center gap-1">
                    <Button
                        variant="outline"
                        size="icon-sm"
                        disabled={currentPage === 1}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                        <ChevronLeft />
                    </Button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <Button
                            key={p}
                            variant={p === currentPage ? "default" : "outline"}
                            size="icon-sm"
                            onClick={() => setPage(p)}
                        >
                            {p}
                        </Button>
                    ))}
                    <Button
                        variant="outline"
                        size="icon-sm"
                        disabled={currentPage === totalPages}
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    >
                        <ChevronRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}