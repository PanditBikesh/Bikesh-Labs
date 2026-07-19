import useLoading from "@/features/loading/hooks/useLoading";
import LoadingScreen from "@/features/loading/LoadingScreen";
import AppRouter from "@/core/router/AppRouter";

export default function App() {
  const loading = useLoading();

  if (loading) {
    return <LoadingScreen />;
  }

  return <AppRouter />;
}