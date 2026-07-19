import { lazy, Suspense } from "react";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import MainLayout from "@/core/layout/MainLayout";

import LoadingScreen from "@/features/loading/LoadingScreen";

const HomePage = lazy(() => import("@/features/home/HomePage"));
const AboutPage = lazy(() => import("@/features/about/AboutPage"));
const SkillsPage = lazy(() => import("@/features/skills/SkillsPage"));
const ProjectsPage = lazy(() => import("@/features/projects/ProjectsPage"));

const ProjectDetailsPage = lazy(() =>
  import("@/features/projects/pages/ProjectDetailsPage")
);

const ResumePage = lazy(() => import("@/features/resume/pages/ResumePage"));
const ContactPage = lazy(() => import("@/features/contact/ContactPage"));
const NotFoundPage = lazy(() => import("@/features/not-found/NotFoundPage"));

export default function AppRouter() {
  const location = useLocation();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/skills"
            element={<SkillsPage />}
          />

          <Route
            path="/projects"
            element={<ProjectsPage />}
          />

          <Route
            path="/projects/:slug"
            element={<ProjectDetailsPage />}
          />

          <Route
            path="/resume"
            element={<ResumePage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Route>

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </Suspense>
  );
}