import { Outlet } from "react-router-dom";

import Footer from "@/shared/components/layout/Footer";
import Navbar from "@/shared/navigation/Navbar";

import {
  BackToTop,
  ScrollProgress,
} from "@/shared/components/ui";

export default function MainLayout() {
  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        bg-[var(--background)]
        text-[var(--text)]
        antialiased
        transition-colors
        duration-300
      "
    >
      <ScrollProgress />

      <Navbar />

      <main
        id="main-content"
        className="min-w-0 flex-1 pt-20"
      >
        <Outlet />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}