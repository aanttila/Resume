import ResumeService from "../services/ResumeService";

export default function Education() {
  const educations = ResumeService.getEducation();

  if (educations.length > 0) {
    return (
      <div className="mt-4">
        <h2 className="font-bold -mb-2 text-xl text-sky-300">Education</h2>
      
        {educations.map((e, index) =>
          <div key={index} className="mt-4">
            <div className="grid grid-cols-4 md:space-x-2">
              <div className="col-span-3 md:col-span-1 font-semibold md:font-normal">{e.school}</div>
              <div className="text-right md:hidden">{e.dates}</div>
              <div className="col-span-3 md:col-span-1">
                {e.major}
                {e.honors &&
                  <span className="italic">, {e.honors}</span>
                }
              </div>
              <div className="hidden md:block">{e.dates}</div>
              <div className="text-right md:text-left">{e.location}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
