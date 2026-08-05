import { useMemo, useState } from "react"
import { Search, Filter, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { roleBadgeClass, statusDotClass, statusLabel } from "@/lib/communityStyles"
import { cn } from "@/lib/utils"
import type { Member, MemberRole } from "@/types/community"


const PAGE_SIZE = 6
type TabValue = "all" | "students" | "instructors" | "groups"

interface MembersTableProps {
  members: Member[]
  totalCount: number
}

export function MembersTable({ members, totalCount }: MembersTableProps) {
  const [tab, setTab] = useState<TabValue>("all")
  const [search, setSearch] = useState("")
  const [role, setRole] = useState<MemberRole | "all">("all")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return members.filter((m) => {
      if (tab === "students" && m.role !== "Student") return false
      if (tab === "instructors" && m.role !== "Instructor") return false
      const q = search.toLowerCase()
      const matchesSearch =
        !q || m.name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q)
      const matchesRole = role === "all" || m.role === role
      return matchesSearch && matchesRole
    })
  }, [members, tab, search, role])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <Card className="!py-0 flex flex-col gap-0 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 px-(--card-spacing) pt-(--card-spacing)">
        <Tabs value={tab} onValueChange={(v) => { setTab(v as TabValue); setPage(1) }}>
          <TabsList>
            <TabsTrigger value="all">All Members</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="instructors">Instructors</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative w-56">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1) }}
              placeholder="Search members..."
              className="pl-8"
            />
          </div>
          <Select value={role} onValueChange={(v) => { setRole((v ?? "all") as MemberRole | "all"); setPage(1) }}>
            <SelectTrigger>
              <SelectValue placeholder="All Roles" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="Instructor">Instructor</SelectItem>
              <SelectItem value="Student">Student</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter data-icon="inline-start" />
            Filter
          </Button>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b text-left text-xs text-muted-foreground">
              <th className="px-(--card-spacing) py-2 font-medium">Member</th>
              <th className="px-2 py-2 font-medium">Role</th>
              <th className="px-2 py-2 font-medium">Status</th>
              <th className="px-2 py-2 font-medium">Joined</th>
              <th className="px-2 py-2 font-medium">Groups</th>
              <th className="px-(--card-spacing) py-2 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pageItems.map((m) => {
              const initials = m.name.split(" ").map((p) => p[0]).join("").slice(0, 2)
              return (
                <tr key={m.id} className="hover:bg-muted/40">
                  <td className="px-(--card-spacing) py-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={m.avatarUrl} alt={m.name} />
                        <AvatarFallback>{initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">{m.name}</span>
                        <span className="text-xs text-muted-foreground">{m.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <Badge className={roleBadgeClass[m.role]}>{m.role}</Badge>
                  </td>
                  <td className="px-2 py-3">
                    <span className="flex items-center gap-1.5">
                      <span className={cn("size-1.5 rounded-full", statusDotClass[m.status])} />
                      {statusLabel[m.status]}
                    </span>
                  </td>
                  <td className="px-2 py-3 text-muted-foreground">
                    {new Date(m.joinedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-2 py-3 text-muted-foreground">{m.groupsCount}</td>
                  <td className="px-(--card-spacing) py-3 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant="ghost" size="icon-sm">
                          <MoreVertical />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit member</DropdownMenuItem>
                        <DropdownMenuItem>Remove member</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              )
            })}
            {pageItems.length === 0 && (
              <tr>
                <td colSpan={6} className="p-6 text-center text-muted-foreground">
                  No members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 px-(--card-spacing) py-(--card-spacing) text-sm text-muted-foreground">
        <span>Showing 1 to {pageItems.length} of {totalCount.toLocaleString()} members</span>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon-sm" disabled={currentPage === 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
            <ChevronLeft />
          </Button>
          {[1, 2, 3].map((p) => (
            <Button key={p} variant={p === currentPage ? "default" : "outline"} size="icon-sm" onClick={() => setPage(p)}>
              {p}
            </Button>
          ))}
          <span className="px-1">...</span>
          <Button variant="outline" size="icon-sm" onClick={() => setPage(totalPages)}>
            {totalPages}
          </Button>
          <Button variant="outline" size="icon-sm" disabled={currentPage === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </Card>
  )
}