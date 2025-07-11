import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Building2Icon, FileIcon, User2, User2Icon } from "lucide-react";

export function SearchResultContainerStaffDocs() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row gap-3">
          <Avatar className="size-16">
            <AvatarImage src={undefined} alt="user image" />
            <AvatarFallback>
              <User2Icon />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <CardTitle className="uppercase">Humphreys Oduno</CardTitle>
            <CardDescription>tinhumug960@gmail.com</CardDescription>
            <CardTitle>IT Officer</CardTitle>
          </div>
        </div>
      </CardHeader>

      <CardFooter className=" text-muted-foreground italic">
        Uploaded 10 files
      </CardFooter>
    </Card>
  );
}

export function SearchResultContainerBuildingPlan() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row gap-3">
          <Building2Icon className=" fill-amber-700 text-amber-50 size-14" />
          <div className="flex flex-col gap-0.5">
            <CardTitle className="uppercase">okuja jaspher</CardTitle>
            <CardDescription>monday 16th-06-2025</CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
export function SearchResultContainerLetters() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row gap-3">
          <FileIcon className="fill-amber-200 text-amber-50 size-15" />
          <div className="flex flex-col gap-0.5">
            <CardTitle className="uppercase">SENDER: Apio Lucky</CardTitle>
            <CardTitle className="uppercase">RECEIVER: Town Clerk</CardTitle>
            <CardDescription>
              FWD: Principal Human Resouce, Mayor
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h1 className="uppercase">Request to advertise in Mayor's garden</h1>
        <h6 className="text-end text-muted-foreground text-sm">
          Received on 17th-6-2025
        </h6>
      </CardContent>
    </Card>
  );
}
