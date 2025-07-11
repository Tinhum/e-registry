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
  title: "About",
  description: "Read about e-registry and for more details",
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
          <BreadcrumbSeparator />
          {/* staff item */}
          <BreadcrumbItem>
            <BreadcrumbLink></BreadcrumbLink>
            <Link href={"/About"}>About</Link>
          </BreadcrumbItem>
        
         
        </BreadcrumbList>
      </Breadcrumb>
      {/* page content */}
      <section className="bg-white py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">About the e-Registry</h2>
        <p className="text-lg mb-8 leading-relaxed">
          The <strong>e-Registry System</strong> is a digital platform developed for <strong>Lira City Council</strong> to streamline the management of official records. It provides secure, efficient, and centralized access to <strong>letters, building plans</strong>, and <strong>staff records</strong>, enhancing transparency and service delivery across departments.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Letters Management</h3>
            <p className="text-sm text-gray-700">
              Digitally stores incoming and outgoing correspondence. Enables easy tracking, retrieval, and archiving of official letters, minimizing paperwork and improving communication flow.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">Building Plans</h3>
            <p className="text-sm text-gray-700">
              Provides a structured repository for submitted building plans, with search and status tracking functionalities to support planning and development processes.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-yellow-700 mb-2">Staff Records</h3>
            <p className="text-sm text-gray-700">
              Maintains up-to-date digital profiles of city council staff, including appointments, roles, and performance records, promoting efficient HR operations.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h4 className="text-2xl font-semibold text-gray-800 mb-4">Why e-Registry?</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Enhances data security and accessibility</li>
            <li>Reduces paper-based workflows</li>
            <li>Improves accountability and audit readiness</li>
            <li>Supports informed decision-making</li>
            <li>Enables faster service delivery to citizens</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
}
