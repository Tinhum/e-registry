import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "All staffs",
  description:'A list of all lira city council staffs'
};
export default function Page() {
  return (
    <div className="p-4">
      {/* breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          {/* home item  */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator/>
          {/* staff item */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/staff"}>staff</Link>
          </BreadcrumbItem>
                    <BreadcrumbSeparator/>

          {/* all staffs item  */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/staff/all-staffs"}>All staffs</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* table showing all users */}
      
    </div>
  );
}
