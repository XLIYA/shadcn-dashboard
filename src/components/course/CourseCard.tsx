
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import {
  MoreHorizontal,
  PlaySquare,
  BarChart3,
} from "lucide-react";
import type { Course } from "@/types/course";

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <Card className="p-5 rounded-2xl hover:shadow-lg transition-all duration-300 cursor-pointer">

      {/* Header */}

      <div className="flex justify-between">

        <div className="flex gap-4">

          <img
            src={course.image}
            alt={course.title}
            className="w-16 h-16 rounded-xl bg-slate-50 p-2"
          />

          <div>

            <div className="flex items-center gap-2">

              <h2 className="font-bold text-lg">
                {course.title}
              </h2>

              {course.premium && (
                <Badge className="bg-violet-100 text-violet-700">
                  Premium
                </Badge>
              )}

            </div>

            <div className="flex items-center gap-2 mt-2">

              <Avatar className="w-7 h-7">

                <AvatarImage src="https://i.pravatar.cc/150?img=8" />

              </Avatar>

              <p className="text-sm text-gray-500">

                {course.teacher}

              </p>

            </div>

          </div>

        </div>

        <MoreHorizontal
          className="text-gray-500"
          size={20}
        />

      </div>

      {/* Description */}

      <p className="text-gray-500 text-sm mt-5 leading-6">

        {course.description}

      </p>

      {/* Progress */}

      <div className="mt-6">

        <div className="flex justify-between mb-2">

          <span className="font-semibold">

            {course.progress}%

          </span>

        </div>

        <Progress
          value={course.progress}
          className="h-2"
        />

      </div>

      {/* Footer */}

      <div className="flex justify-between items-center mt-6">

        <div className="flex gap-4 text-gray-500">

          <div className="flex items-center gap-1">

            <PlaySquare size={16} />

            <span className="text-sm">

              {course.lessons} Lessons

            </span>

          </div>

          <div className="flex items-center gap-1">

            <BarChart3 size={16} />

            <span className="text-sm">

              {course.level}

            </span>

          </div>

        </div>

        <Button variant="outline">

          Continue

        </Button>

      </div>

    </Card>
  );
}