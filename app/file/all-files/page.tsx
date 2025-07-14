import { SearchResultContainerBuildingPlan } from "@/app/search-result-container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/lib/prisma";
import { Building2Icon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "All files",
  description:
    "display all kinds of files that have reached lira city council registry",
};
export default async function Page() {
  const buildingPlans = await prisma.buildingplan.findMany();
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
          <BreadcrumbSeparator />
          {/* file item */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/file"}>File</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {/* all files item  */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/file/all-files"}>All files</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* page content */}
      <div className="flex gap-2 flex-wrap">
        {buildingPlans.map((buildingPlan) => (
          <Card>
            <CardHeader>
              <div className="flex flex-row gap-3">
                <Avatar className="size-[150px] rounded-none">
                  <AvatarImage src={buildingPlan.imageUrl} alt="buildig plan" />
                  <AvatarFallback className=" fill-amber-700 text-amber-50 size-14">
                    PLan
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col gap-0.5">
                  <CardTitle className="uppercase">
                    {buildingPlan.owner}
                  </CardTitle>
                  <CardDescription>monday 16th-06-2025</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
