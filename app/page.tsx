import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Searchcontainer from "./search-container";
import AddButton from "./add-button";
import AiButton from "./ai-button";
import  { SearchResultContainerBuildingPlan, SearchResultContainerLetters, SearchResultContainerStaffDocs } from "./search-result-container";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-6 w-full">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/"}>Home</Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Search container */}
      <div className="flex justify-center w-full">
        <Searchcontainer/>
      </div>
      {/* Search results */}
      <SearchResultContainerStaffDocs/>
      <SearchResultContainerBuildingPlan/>
      <SearchResultContainerLetters/>
      {/* Add button */}
      <AddButton/>
      {/* AI button */}
      <AiButton/>
    </div>
   
  );
}
