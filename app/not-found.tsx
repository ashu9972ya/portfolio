import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <main tabIndex={-1} id="main" className="shell page-main not-found">
      <p className="eyebrow">404 / A WRONG TURN</p>
      <h1>
        This page took
        <br />a <span className="serif-word">detour.</span>
      </h1>
      <p>Let’s get you back to the good stuff.</p>
      <Link href="/" className="button button-dark">
        <ArrowLeft size={18} aria-hidden="true" /> Back to home
      </Link>
    </main>
  );
}
