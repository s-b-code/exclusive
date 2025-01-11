import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="page-container flex flex-col items-center justify-center space-y-20">
      <div className="flex flex-col items-center justify-center space-y-10">
        <h1 className="text-9xl font-medium">404 Not Found</h1>
        <p className="text-base">Unable to find the page.</p>
      </div>
      <Link href={"/"} className={buttonVariants()}>
        Back to home page
      </Link>
    </div>
  );
}
