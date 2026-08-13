import { getCourses } from "@/api/courseApi";
import CourseCard from "@/components/course/CourseCard";
import CourseStats from "@/components/course/CourseStats";
import CourseTabs from "@/components/course/CourseTabs";
import type { Course } from "@/types/course";
import { useQueries, useQuery } from "@tanstack/react-query";

import { useEffect, useMemo, useState } from "react";

export default function Courses() {
  // const [courses, setCourses] = useState<Course[]>([]);
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
  console.log(data);

  const filteredCourses = useMemo(() => {
    return data?.filter((course: Course) => {
      const matchesTab = tab === "all" || course.status === tab;

      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [tab, search, data]);

  if (isLoading) {
    return <p> Loading </p>
  }
  if(isError){
    return <p>{error.message}</p>
  }

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
        {filteredCourses?.map((course: Course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <CourseStats
        total={data?.length}
        progress={data?.filter((c: Course) => c.status === "progress").length}
        completed={data?.filter((c: Course) => c.status === "completed").length}
        wishlist={data?.filter((c: Course) => c.status === "wishlist").length}
      />
    </div>
  );
}
