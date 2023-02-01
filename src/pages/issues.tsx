import { type NextPage } from "next";
import Head from "next/head";
import { Octokit } from "octokit";
import SingleRepo from "../components/issues/SingleRepo";

const repos = [
  { owner: "calcom", repo: "cal.com" },
  { owner: "EddieHubCommunity", repo: "LinkFree" },
  { owner: "excalidraw", repo: "excalidraw" },
  { owner: "freeCodeCamp", repo: "freeCodeCamp" },
  { owner: "github", repo: "docs" },
  { owner: "web-scrobbler", repo: "web-scrobbler" },
  { owner: "react-icons", repo: "react-icons" },
  { owner: "open-telemetry", repo: "opentelemetry.io" },
  { owner: "TanStack", repo: "table" },
  { owner: "t3-oss", repo: "create-t3-app" },
];

const Issues: NextPage = () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  });

  return (
    <>
      <Head>
        <title>Issues</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="mx-auto w-9/12 rounded pt-14">
        {repos.map(({ owner, repo }, idx: number) => (
          <SingleRepo owner={owner} repo={repo} key={idx} octokit={octokit} />
        ))}
      </div>
    </>
  );
};

export default Issues;
