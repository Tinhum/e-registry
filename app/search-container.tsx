import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function Searchcontainer(){
    return<div className="relative">
        <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-200"/>
        <Input placeholder="search here..." className="ps-10"/>
        
    </div>
}