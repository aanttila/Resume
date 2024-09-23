import Demographics from "./components/Demographics";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Platforms from "./components/Platforms";
import Summary from "./components/Summary";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] mx-16 my-8">
      <main className="space-y-8">
        <div>
          <Demographics />
          <Summary />
        </div>
        <Languages />
        <Platforms />
        <Technologies />
        <Experience />
        <Education />
      </main>

      <hr className="border-slate-700 my-8" />
      
      <footer className="text-xs text-slate-400">
        Made with Next.js, React, Tailwind CSS, and TypeScript.
      </footer>
    </div>
  );
}
