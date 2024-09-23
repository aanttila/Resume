import ResumeService from "../services/ResumeService";

export default function Summary() {
  const summary = ResumeService.getSummary();

  if (summary) {
    return (
      <div className="mt-2">{summary}</div>
    );
  }
}
