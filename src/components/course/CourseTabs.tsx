
import { Plus, Search, SlidersHorizontal } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


interface Props {
    value: string;
    setValue: (value: string) => void;
    search: string;
    setSearch: (value: string) => void;
  }

  export default function CourseTabs({
    value,
    setValue,
    search,
    setSearch,
  }: Props) {
  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">

    <Tabs value={value} onValueChange={setValue}>
      <TabsList>
        <TabsTrigger value="all">All Courses</TabsTrigger>
        <TabsTrigger value="progress">In Progress</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
      </TabsList>
    </Tabs>
  
    <div className="flex items-center gap-3">
  
      <div className="relative w-72">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
  
        <Input
          className="pl-10"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
  
      <Button variant="outline">
        <SlidersHorizontal className="mr-2 h-4 w-4" />
        Filter
      </Button>
  
      <Button>
        <Plus className="mr-2 h-4 w-4" />
        Add Course
      </Button>
  
    </div>
  
  </div>
  );
}