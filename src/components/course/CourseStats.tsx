import { Card } from "@/components/ui/card";

interface Props {
  total: number;
  progress: number;
  completed: number;
  wishlist: number;
}

export default function CourseStats({
  total,
  progress,
  completed,
  wishlist,
}: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

      <Card className="p-6 rounded-2xl">

        <h3 className="text-3xl font-bold">
          {total}
        </h3>

        <p className="text-gray-500 mt-2">
          Total Courses
        </p>

      </Card>

      <Card className="p-6 rounded-2xl">

        <h3 className="text-3xl font-bold">
          {progress}
        </h3>

        <p className="text-gray-500 mt-2">
          In Progress
        </p>

      </Card>

      <Card className="p-6 rounded-2xl">

        <h3 className="text-3xl font-bold">
          {completed}
        </h3>

        <p className="text-gray-500 mt-2">
          Completed
        </p>

      </Card>

      <Card className="p-6 rounded-2xl">

        <h3 className="text-3xl font-bold">
          {wishlist}
        </h3>

        <p className="text-gray-500 mt-2">
          Wishlist
        </p>

      </Card>

    </div>
  );
}