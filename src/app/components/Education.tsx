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
              <div className="col-span-4 font-semibold md:font-normal md:col-span-1">{e.school}</div>
              <div className="col-span-2 md:col-span-1">
                {e.major}
                {e.honors &&
                  <span className="italic">
                    <br className="md:hidden" />
                    <span className="hidden md:inline">, </span>
                    {e.honors}
                  </span>
                }
              </div>
              <div>{e.dates}</div>
              <div>{e.location}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
