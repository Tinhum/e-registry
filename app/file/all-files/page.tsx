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
  title: "All files",
  description:
    "display all kinds of files that have reached lira city council registry",
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
          {/* file item */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/file"}>File</Link>
          </BreadcrumbItem>
                    <BreadcrumbSeparator/>

          {/* all files item  */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/file/all-files"}>All files</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
            {/* table showing all files */}

    </div>
  );
}
