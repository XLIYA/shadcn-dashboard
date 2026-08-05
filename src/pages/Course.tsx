import { getCourses } from "@/api/courseApi";
import CourseCard from "@/components/course/CourseCard";
import CourseStats from "@/components/course/CourseStats";
import CourseTabs from "@/components/course/CourseTabs";
import type { Course } from "@/types/course";

import { useEffect, useMemo, useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesTab = tab === "all" || course.status === tab;

      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [tab, search,courses]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();

        setCourses(data);
      } catch (err) {
        console.log(err)
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold">Courses</h1>

        <p className="text-gray-500 mt-2">Explore and manage your courses</p>
      </div>

      <CourseTabs
        value={tab}
        setValue={setTab}
        search={search}
        setSearch={setSearch}
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <CourseStats
        total={courses.length}
        progress={courses.filter((c) => c.status === "progress").length}
        completed={courses.filter((c) => c.status === "completed").length}
        wishlist={courses.filter((c) => c.status === "wishlist").length}
      />
    </div>
  );
}
