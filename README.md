## Introduction

This is an application designed to illustrate basic Next.js, React, Tailwind, and TypeScript usage through a resume application.

## TODO
[X] Create the skeleton  
[X] Choose the styling  
[X] Convert my resume to a hard-coded set of elements  
[X] Migrate each section into its own component  
[X] Convert the hard-coded content to JSON and update each component to be dynamic  
[X] Create a resume-template.json file  
[X] Push to GitHub  
[X] Add deployments to Vercel  
[ ] Add caching to ResumeService? This may not be necessary for prod builds  
[ ] Add "more information" to experience  
[ ] Convert from a JSON file to a Postgres database?  
[ ] Pick different fonts?  
[ ] Add a contact options, including demographics updates  

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
