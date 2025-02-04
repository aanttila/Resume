import CompanyService from "@/app/services/CompanyService";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IPageProps {
  params: Promise<{
    name: string
  }>
  // searchParams: {}
}

export default async function Project(props: IPageProps) {
  const params = await props.params;
  const name = decodeURIComponent(params.name);
  const company = CompanyService.getCompany(name);

  if (!company) return notFound();

  return (
    <div className="font-[family-name:var(--font-geist-sans)] mx-4 md:mx-16 my-4 md:my-8">
    <main>
      <h2 className="font-extrabold text-2xl mb-4 text-sky-500">{company.name}</h2>
      
      {company.projects.length > 0 && company.projects.map((project, index) =>
        // biome-ignore lint/suspicious/noArrayIndexKey: project has no id and is rarely changed
        <div key={index} className="mt-4 first-of-type:mt-0 space-y-4">
          <div className="border-b-sky-300 border-b-2">
            <h3 className="font-bold text-sky-300">{project.name}</h3>
          </div>

          {project.technologies.length > 0 &&
            <div>
              <h3 className="font-medium">Technologies</h3>
              <p className="text-slate-400">{project.technologies.join(", ")}</p>
            </div>
          }

          {project.platforms.length > 0 && project.platforms.map((platform, index) =>
            // biome-ignore lint/suspicious/noArrayIndexKey: platform has no id and is rarely changed
            <div key={index}>
              <h3 className="font-medium">{platform.name}</h3>
              <p className="text-slate-400">{platform.services.join(", ")}</p>
            </div>
          )}

          {project.summary.length > 0 &&
            <div>
              <h2 className="font-bold text-l text-sky-300">Summary</h2>
              <div>{project.summary.join(" ")}</div>
            </div>
          }

          {project.technicalOverview.length > 0 &&
            <div>
              <h2 className="font-bold text-l text-sky-300">Technical Overview</h2>
              <div>{project.technicalOverview.join(" ")}</div>
            </div>
          }

          {project.otherInformation.length > 0 &&
            <div>
              <h2 className="font-bold text-l text-sky-300">Other Information</h2>
              <div>{project.otherInformation.join(" ")}</div>
            </div>
          }
        </div>
      )}


      <hr className="border-slate-700 my-8" />

      <footer className="text-xs text-slate-400">
        <Link href="/">&lt; Back to résumé</Link>
      </footer>
    </main>
    </div>
  );
}
