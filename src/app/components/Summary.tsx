import ResumeService from "../services/ResumeService";

export default function Summary() {
  const summary = ResumeService.getSummary();

  if (summary) {
    return (
      <div className="mt-2">
        <h2 className="font-bold text-xl text-sky-300">Summary</h2>
        <div>{summary}</div>
      </div>
    );
  }
}
