import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Pin } from "lucide-react"


export const Dashboard = () => {
    return (
        <div>
            <p className="text-3xl font-bold m-2">Dashbord</p>
            <p className="text-gray-600 m-2">Wellcome back , ali Here's what's happening</p>
            <Card className="max-w-120 h-70 border m-2">
                <div>
                    <Button
                        variant="ghost"
                        className="flex m-4 h-auto items-center gap-3 px-2 py-1"
                    >
                        <Avatar className="h-25 w-25">
                            <AvatarImage src="/avatar.jpg" />
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        </Avatar>

                        <div className="text-left leading-tight space-y-2">
                            <div className="flex gap-2">
                                <p className="font-semibold text-sm">Ali Ahmadi</p><Badge className="bg-indigo-200 text-indigo-700">Premium</Badge>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground">Frontend Developer Student</p>
                            </div>
                            <div className="flex">
                                <Pin/><p>Tehran , Iran</p>
                            </div>
                        </div>
                    </Button>
                </div>
            </Card>
        </div >
    )
}