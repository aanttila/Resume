import ResumeService from "../services/ResumeService";

export default function Languages() {
  const languages = ResumeService.getLanguages();

  if (languages.length > 0) {
    return (
      <div className="space-y-2">
        <h2 className="font-bold text-xl text-sky-300">Languages</h2>
        <div>
          {languages.join(", ")}
        </div>
      </div>
    );
  }
}
