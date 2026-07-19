export default function LoadingProgress() {
  return (
    <div className="mt-10 h-2 w-72 overflow-hidden rounded-full bg-slate-800">

      <div
        className="
          h-full
          w-full
          origin-left
          animate-[loading_1.8s_linear_forwards]
          rounded-full
          bg-blue-500
        "
      />

    </div>
  );
}