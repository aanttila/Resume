import Link from 'next/link';

export default function Project() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] mx-4 md:mx-16 my-4 md:my-8">
    <main className="space-y-4">
      <h2 className="font-extrabold text-2xl text-sky-500">Solera Health, Inc.</h2>
      
      <div>
        <h3 className="font-medium">Projects</h3>
        <p className="text-slate-400">Connect</p>
      </div>

      <div>
        <h3 className="font-medium">Technologies</h3>
        <p className="text-slate-400">Node.js, MongoDB</p>
      </div>

      <div>
        <h3 className="font-medium">Azure Technologies</h3>
        <p className="text-slate-400">Application Insights, Functions, Service Bus</p>
      </div>

      <div>
        <h3 className="font-medium">Google Cloud Technologies</h3>
        <p className="text-slate-400">BigQuery, Google Healthcare (FHIR)</p>
      </div>

      <div>
        <h2 className="font-bold text-xl text-sky-300">Summary</h2>
        <div>
          Connect is Solera&apos;s patient program participation software.
          It includes qualification based on vendor contracts, enrollment, and activity tracking integrated with providers and partners.
          There are separate teams for UI, API, and Reporting.
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl text-sky-300">Technical Overview</h2>
        <div>
          The Connect API is written in TypeScript and Node.js, with services handling requests external and internal consumers, including Solera&apos;s UI written in React.
          Services are exposed through HTTPS API endpoints.
          Due to the time savings and rich features of Google Healthcare&apos;s FHIR APIs and data stores, our source of truth is Google Cloud&apso;s FHIR Healthcare repository, which is replicated to BigQuery for reporting and advanced querying.
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xl text-sky-300">Other Information</h2>
        <div>
          I am currently co-leading an effort to update our architecture and technologies.
          While hosting in two different cloud providers is undesirable, the performance impact is nearly imperceptible, making any effort to consolidate cost-prohibitive at this time.
          We are re-organizing our monolithic API, integration tests, and Azure Functions (timer and message triggers) into a set of “domain services”.
          Each domain service is independently deployable and scalable, with improved cohesion, abstraction, modularity, and integration/unit testing.
          We are also taking the opportunity to increase the use of TypeScript&apso;s strengths, isolate and unify data access, introduce exponential retries, and shift from Express to Azure HTTP Functions.
        </div>
      </div>

      <hr className="border-slate-700 my-8" />

      <footer className="text-xs text-slate-400">
        <Link href="/">&lt; Back to résumé</Link>
      </footer>
    </main>
    </div>
  );
}
