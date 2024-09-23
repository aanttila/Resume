import ResumeService from "../services/ResumeService";

export default function Technologies() {
  const technologies = ResumeService.getTechnologies();

  if (technologies.length > 0) {
    return (
      <div className="space-y-2">
        <h2 className="font-bold text-xl text-sky-300">Technologies</h2>

        <div>
          <p>
            {technologies.join(", ")}
          </p>
        </div>
      </div>
    );
  }
}
