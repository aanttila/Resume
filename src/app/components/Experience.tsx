import ResumeService from "../services/ResumeService"

export default function Experience() {
  const experience = ResumeService.getExperience();

  if (experience.length > 0) {
    return (
      <div className="space-y-4">
        <h2 className="font-bold -mb-2 text-xl text-sky-300">Experience</h2>

        {experience.map((e, index) =>
          <div key={index}>
            <div className="flex flex-row font-medium space-x-2">
              <div className="basis-1/4">{e.company}</div>
              <div className="basis-1/4">{e.title}</div>
              <div className="basis-1/4">{e.dates}</div>
              <div className="basis-1/4">{e.location}</div>
            </div>

            <ul className="list-disc pl-5">
              {e.duties.map((d, index) =>
                <li key={index}>{d}</li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
