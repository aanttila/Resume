import ResumeService from "../services/ResumeService"

export default function Experience() {
  const experience = ResumeService.getExperience();

  if (experience.length > 0) {
    return (
      <div className="mt-4">
        <h2 className="font-bold -mb-2 text-xl text-sky-300">Experience</h2>

        {experience.map((e, index) =>
          <div key={index} className="mt-4">
            <div className="grid grid-cols-4 md:font-semibold md:space-x-2">
              <div className="col-span-4 font-semibold md:col-span-1">{e.company}</div>
              <div className="col-span-2 md:col-span-1">{e.title}</div>
              <div>{e.dates}</div>
              <div>{e.location}</div>
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
