import { About } from "~/components/About";
import { Header } from "~/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <Header />

      <About />
    </main>
  );
}
