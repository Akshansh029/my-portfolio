import { Suspense } from "react";

import { getGitHubContributions } from "../../data/github-contributions";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";
import { Panel } from "../panel";

export function GitHubContributions() {
  const contributions = getGitHubContributions();

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </Panel>
  );
}
