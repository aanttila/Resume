import ResumeService from "../services/ResumeService";

export default function Education() {
  const educations = ResumeService.getEducation();

  if (educations.length > 0) {
    return (
      <div className="space-y-4">
        <h2 className="font-bold -mb-2 text-xl text-sky-300">Education</h2>
      
        {educations.map((e, index) =>
          <div key={index}>
            <div className="flex flex-row space-x-2">
              <div className="basis-1/4">{e.school}</div>
              <div className="basis-1/4">
                {e.major}
                {e.honors &&
                  <span className="italic">, {e.honors}</span>
                }
              </div>
              <div className="basis-1/4">{e.dates}</div>
              <div className="basis-1/4">{e.location}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
