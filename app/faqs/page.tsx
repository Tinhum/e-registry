import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  title: "FAQs",
  description: "Frequently asked questions",
};
export default function Page() {
  return (
    <div className="p-4 w-full">
      {/* breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          {/* home item  */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {/* staff item */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/FAQs"}>FAQs</Link>
          </BreadcrumbItem>
        
         
        </BreadcrumbList>
      </Breadcrumb>
      {/* page content */}
      <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10">Frequently Asked Questions</h2>

        <Accordion type="multiple" className="w-full space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the e-Registry used for?</AccordionTrigger>
            <AccordionContent>
              The e-Registry is a digital system used by Lira City Council to securely manage letters, building plans, and staff records. It streamlines workflows and improves access to critical information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Who can access the e-Registry system?</AccordionTrigger>
            <AccordionContent>
              Authorized staff of Lira City Council with valid credentials can access the system. Access levels vary based on department and role.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How are building plans handled?</AccordionTrigger>
            <AccordionContent>
              Building plans are submitted electronically, reviewed by planning officers, and stored in a searchable format. The system tracks submission status and approval history.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is my data secure in the e-Registry?</AccordionTrigger>
            <AccordionContent>
              Yes. The system uses role-based access control, data encryption, and audit logging to ensure the safety and integrity of stored records.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Can letters be searched or filtered?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Users can search letters by date, reference number, sender, or department. This makes retrieval quick and efficient.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>How are staff records managed?</AccordionTrigger>
            <AccordionContent>
              Each staff member has a digital profile containing appointment history, job role, documents, and performance records. HR can update and audit these files as needed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
    </div>
  );
}
