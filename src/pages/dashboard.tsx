import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    MapPin,
    Users,
    BookOpen,
    GraduationCap,
    TrendingUp,
    Atom,
    Check,
    FileText,
    UserPlus,
    Box,
} from "lucide-react";
import { useState } from "react";

const stats = [
    { icon: Users, value: "125", label: "Students", color: "text-blue-500" },
    { icon: BookOpen, value: "18", label: "Courses", color: "text-green-600" },
    { icon: GraduationCap, value: "8", label: "Teachers", color: "text-violet-600" },
    { icon: TrendingUp, value: "92%", label: "Progress", color: "text-emerald-500" },
];

const upcomingClasses = [
    {
        icon: Atom,
        iconBg: "bg-sky-100",
        iconColor: "text-sky-500",
        title: "React Advanced",
        teacher: "Prof. John Smith",
        time: "Tomorrow\n10:00 AM",
        status: "Online",
    },
    {
        icon: null,
        label: "TS",
        iconBg: "bg-blue-600",
        iconColor: "text-white",
        title: "TypeScript Basics",
        teacher: "Prof. Sarah Johnson",
        time: "Wed, May 21\n2:00 PM",
        status: "Online",
    },
    {
        icon: null,
        label: "JS",
        iconBg: "bg-yellow-400",
        iconColor: "text-black",
        title: "JavaScript ES6+",
        teacher: "Prof. Mike Brown",
        time: "Fri, May 23\n11:00 AM",
        status: "Offline",
    },
];

const activities = [
    {
        icon: Check,
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        title: "Completed Assignment: React Components",
        time: "2 hours ago",
    },
    {
        icon: FileText,
        iconBg: "bg-blue-100",
        iconColor: "text-blue-500",
        title: "Submitted Quiz: JavaScript Basics",
        time: "1 day ago",
    },
    {
        icon: UserPlus,
        iconBg: "bg-violet-100",
        iconColor: "text-violet-500",
        title: "Joined Course: Context API Masterclass",
        time: "3 days ago",
    },
];

const progressItems = [
    { icon: Atom, iconBg: "bg-sky-100", iconColor: "text-sky-500", label: "React Development", value: 75 },
    { icon: null, label: "TypeScript Fundamentals", value: 45, badge: "TS", badgeBg: "bg-blue-600" },
    { icon: Box, iconBg: "bg-green-100", iconColor: "text-green-600", label: "Node.js & Express", value: 60 },
];

export const Dashboard = () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2025, 4, 20));

    return (
        <div className="p-2">
            <p className="text-2xl font-bold m-2">Dashboard</p>
            <p className="text-sm text-gray-600 m-2">Welcome back, Ali! Here's what's happening.</p>

            {/* Row 1: Profile + Statistics */}
            <div className="flex gap-4 m-2 items-stretch">
                <Card className="w-96 shrink-0 border p-4 gap-3">
                    <Button
                        variant="ghost"
                        className="flex h-auto items-center gap-3 px-1 py-1 justify-start"
                    >
                        <Avatar className="h-14 w-14">
                            <AvatarImage src="/avatar.jpg" />
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        </Avatar>
                        <div className="text-left leading-tight space-y-1">
                            <div className="flex gap-2 items-center">
                                <p className="font-semibold text-sm">Ali Ahmadi</p>
                                <Badge className="bg-indigo-200 text-indigo-700 h-5 px-2 text-[10px]">
                                    Premium
                                </Badge>
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

                <Card className="flex-1 border p-4 gap-3">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base">Statistics</p>
                        <Select defaultValue="month">
                            <SelectTrigger className="w-28 h-7 text-xs">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="week">This Week</SelectItem>
                                <SelectItem value="month">This Month</SelectItem>
                                <SelectItem value="year">This Year</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex flex-col gap-1.5 rounded-lg border p-3">
                                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                                <p className="font-bold text-lg">{stat.value}</p>
                                <p className="text-xs text-muted-foreground">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            {/* Row 2: Upcoming Classes + Recent Activities */}
            <div className="flex gap-4 m-2 items-stretch">
                <Card className="flex-1 border p-4 gap-4">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base">Upcoming Classes</p>
                        <a href="#" className="text-xs text-indigo-600 font-medium hover:underline">
                            View All
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        {upcomingClasses.map((item) => (
                            <div key={item.title} className="flex items-center gap-3">
                                <div
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md ${item.iconBg}`}
                                >
                                    {item.icon ? (
                                        <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                                    ) : (
                                        <span className={`text-xs font-bold ${item.iconColor}`}>{item.label}</span>
                                    )}
                                </div>

                                <div className="flex-1 leading-tight">
                                    <p className="text-sm font-medium">{item.title}</p>
                                    <p className="text-xs text-muted-foreground">{item.teacher}</p>
                                </div>

                                <p className="text-xs text-muted-foreground text-right whitespace-pre-line">
                                    {item.time}
                                </p>

                                <Badge
                                    variant="outline"
                                    className={
                                        item.status === "Online"
                                            ? "text-indigo-600 border-indigo-200 bg-indigo-50"
                                            : "text-muted-foreground"
                                    }
                                >
                                    {item.status}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="flex-1 border p-4 gap-4">
                    <p className="font-semibold text-base">Recent Activities</p>

                    <div className="flex flex-col gap-4 flex-1">
                        {activities.map((item) => (
                            <div key={item.title} className="flex items-center gap-3">
                                <div
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
                                >
                                    <item.icon className={`h-4 w-4 ${item.iconColor}`} />
                                </div>
                                <div className="leading-tight">
                                    <p className="text-sm">{item.title}</p>
                                    <p className="text-xs text-muted-foreground">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#" className="text-xs text-indigo-600 font-medium hover:underline">
                        View All Activities
                    </a>
                </Card>
            </div>

            {/* Row 3: Your Progress + Calendar */}
            <div className="flex gap-4 m-2 items-stretch">
                <Card className="flex-1 border p-4 gap-3">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base">Your Progress</p>
                        <a href="#" className="text-xs text-indigo-600 font-medium hover:underline">
                            View All
                        </a>
                    </div>

                    <div className="flex flex-col gap-4 justify-center flex-1 space-x-5">
                        {progressItems.map((item) => (
                            <div key={item.label} className="flex items-center gap-3">
                                <div
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${item.iconBg ?? ""}`}
                                >
                                    {item.icon ? (
                                        <item.icon className={`h-4 w-4 ${item.iconColor}`} />
                                    ) : (
                                        <span
                                            className={`text-[10px] font-bold text-white rounded ${item.badgeBg} h-full w-full flex items-center justify-center`}
                                        >
                                            {item.badge}
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm w-40 shrink-0">{item.label}</p>

                                <Progress value={item.value} className="h-2 flex-1" />

                                <p className="text-xs text-muted-foreground w-8 text-right">{item.value}%</p>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="w-80 shrink-0 border p-4 gap-2">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-base">Calendar</p>
                        <a href="#" className="text-xs text-indigo-600 font-medium hover:underline">
                            View Calendar
                        </a>
                    </div>

                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="p-0 w-full [&_button]:text-indigo-600"
                        classNames={{
                            months: "flex flex-col",
                            month: "space-y-1",

                            month_caption: "flex justify-center items-center h-7 text-xs relative",
                            nav: "flex items-center gap-1",
                            button_previous: "h-5 w-5",
                            button_next: "h-5 w-5",

                            month_grid: "w-full border-collapse",
                            weekdays: "flex",
                            weekday: "w-8 text-[10px] text-muted-foreground font-normal",

                            week: "flex w-full mt-1",

                            day: "h-8 w-8 p-0 text-xs font-normal",
                            today: "text-indigo-600 font-semibold",
                            selected:
                                "bg-indigo-600 text-white hover:bg-indigo-600 hover:text-white",
                        }}
                    />

                    <div className="border-l-2 border-indigo-600 pl-2 mt-1">
                        <p className="text-xs font-medium">React Advanced</p>
                        <p className="text-xs text-muted-foreground">10:00 AM - 12:00 PM</p>
                    </div>
                </Card>
            </div>
        </div>
    );
};