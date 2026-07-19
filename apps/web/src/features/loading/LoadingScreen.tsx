import LoadingLogo from "./components/LoadingLogo";
import LoadingProgress from "./components/LoadingProgress";

export default function LoadingScreen() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        flex-col
        items-center
        justify-center
        bg-slate-950
      "
    >
      <LoadingLogo />

      <LoadingProgress />

      <p className="mt-6 text-sm tracking-widest text-slate-500">
        LOADING...
      </p>
    </div>
  );
}