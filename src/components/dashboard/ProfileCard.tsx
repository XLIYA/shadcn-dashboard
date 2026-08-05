import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MapPin } from 'lucide-react'

export function ProfileCard() {
  return (
    <Card className="w-96 shrink-0 border p-4 gap-3">
      <Button variant="ghost" className="flex h-auto items-center gap-3 px-1 py-1 justify-start">
        <Avatar className="h-14 w-14">
          <AvatarImage src="/avatar.jpg" />
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        </Avatar>
        <div className="text-left leading-tight space-y-1">
          <div className="flex gap-2 items-center">
            <p className="font-semibold text-sm">Ali Ahmadi</p>
            <Badge className="bg-indigo-200 text-indigo-700 h-5 px-2 text-[10px]">Premium</Badge>
          </div>
          <p className="text-xs text-muted-foreground">Frontend Developer Student</p>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <p className="text-xs">Tehran, Iran</p>
          </div>
        </div>
      </Button>

      <div className="flex justify-around border-t pt-3">
        <div className="text-center">
          <p className="font-bold text-base">12</p>
          <p className="text-xs text-muted-foreground">Courses</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-base">8</p>
          <p className="text-xs text-muted-foreground">Certificates</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-base">245</p>
          <p className="text-xs text-muted-foreground">Points</p>
        </div>
      </div>

      <Button variant="outline" size="sm" className="w-full">
        Edit Profile
      </Button>
    </Card>
  )
}