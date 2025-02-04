import ResumeService from "../services/ResumeService";

export default function Technologies() {
  const platforms = ResumeService.getPlatforms();

  if (platforms.length > 0) {
    return (
      <div className="mt-2">
        <h2 className="font-bold text-xl text-sky-300">Platforms</h2>

        {platforms.map((p, index) =>
          // biome-ignore lint/suspicious/noArrayIndexKey: platform has no id and is rarely changed
          <div key={index} className="mt-4 first-of-type:mt-0">
            <h3 className="font-medium">{p.name}</h3>
            <p className="text-slate-400">{p.services.join(", ")}</p>
          </div>
        )}
      </div>
    );
  }
}
