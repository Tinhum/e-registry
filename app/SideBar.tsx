import { Button } from "@/components/ui/button";
import { FileIcon, Settings, Users2 } from "lucide-react";
import Link from "next/link";

export default function Sidebar(){
    return <div className="  flex sticky top-0 flex-col gap-2 p-3 bg-sidebar border-e w-[180px] h-full pt-12">
        <Button asChild >
            <Link href={"/file/all-files"}>
            <FileIcon/>
            All files</Link>
            
            </Button>
        <Button asChild >
            <Link href={"/staff/all-staffs"}>
            
              <Users2/>
            All staffs</Link>
          
            </Button>
        <Button asChild >
            <Link  href={"/settings"}>
             <Settings/>
            Settings
            </Link>
           
            </Button>
    </div>
}