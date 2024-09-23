import ResumeService from "../services/ResumeService";

export default function Demographics() {
  const demographics = ResumeService.getDemographics();

  return (
    <div>
      <h1 className="font-extrabold text-2xl text-sky-500">{demographics.firstName} {demographics.lastName}</h1>

      {demographics.address?.state && demographics.address?.postalCode &&
        <div>
          {demographics.address.city && `${demographics.address.city}, `} 
          {demographics.address.state}
          {" "}
          {demographics.address.postalCode}
        </div>
      }
    </div>
  );
}
