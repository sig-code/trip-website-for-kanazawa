import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import GoldFall from "./components/GoldFall";

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <GoldFall />
      <Header />
      <main>
        <Hero />
        <Timeline />
      </main>
      {/* Footer */}
      <footer className="text-center py-8 pb-[calc(env(safe-area-inset-bottom)+2rem)] text-slate-400 text-xs">
        <p>2026年2月23日〜24日</p>
        <p className="mt-1">♥ 金沢の旅</p>
      </footer>
    </div>
  );
}

export default App;
