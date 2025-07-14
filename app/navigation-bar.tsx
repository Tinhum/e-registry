import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className=" border-b px-4 py-2 bg-card/20 backdrop-blur-md z-50 sticky top-0">
      {/* logo */}
      {/* Navigation buttons */}
      <div className="flex gap-1">
        <Button asChild>
          <Link href="/">HOME</Link>
        </Button>
        <Button asChild>
          <Link href={"/about"}>ABOUT</Link>
        </Button>
        <Button asChild>
          <Link href={"/faqs"}>FAQs</Link>
        </Button>
      </div>
      {/* user info */}
    </nav>
  );
}
