import ResumeService from "../services/ResumeService";

export default function Education() {
  const educations = ResumeService.getEducation();

  if (educations.length > 0) {
    return (
      <div className="mt-2">
        <h2 className="font-bold text-xl text-sky-300">Education</h2>
      
        {educations.map((e, index) =>
          <div key={index} className="mt-4 first-of-type:mt-0">
            <div>
              <span className="font-semibold">{e.major}</span>
              {e.honors &&
                <span className="italic">, {e.honors}</span>
              }
              {e.dates &&
                <span className="font-extralight text-xs"> {e.dates}</span>
              }
            </div>
            <div>
              {e.school}
              {e.location &&
                <span className="font-extralight text-xs"> {e.location}</span>
              }
            </div>
          </div>
        )}
      </div>
    );
  }
}
