import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function AddButton(){
    return <Button size={'icon'} className="rounded-full variant bg-amber-700 fixed bottom-20 right-5">
        <PlusIcon>

        </PlusIcon>
    </Button>

}