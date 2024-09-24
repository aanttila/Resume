import ResumeService from "../services/ResumeService"

export default function Experience() {
  const experience = ResumeService.getExperience();

  if (experience.length > 0) {
    return (
      <div className="mt-2">
        <h2 className="font-bold text-xl text-sky-300">Experience</h2>

        {experience.map((e, index) =>
          <div key={index} className="mt-4 first-of-type:mt-0">
            <div className="lg:grid lg:grid-cols-4 lg:gap-2 lg:font-semibold">
              <div className="font-semibold">{e.company}</div>
              <div>{e.title}</div>
              <div className="font-extralight lg:font-semibold text-xs lg:text-base">
                {e.dates}
                {e.location &&
                  <span className="lg:hidden">&nbsp; {e.location}</span>
                }
              </div>
              <div className="hidden lg:block">{e.location}</div>
            </div>

            {e.duties.length > 0 &&
              <ul className="list-disc pl-5">
                {e.duties.map((d, index) =>
                  <li key={index}>{d}</li>
                )}
              </ul>
            }
          </div>
        )}
      </div>
    );
  }
}
