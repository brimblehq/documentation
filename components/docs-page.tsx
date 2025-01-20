import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from "fumadocs-ui/page"
import { getGithubLastEdit } from "fumadocs-core/server"
import type { PageProps } from "@/lib/source"

export async function DocPage({ page }: PageProps) {
  const lastUpdateRaw = await getGithubLastEdit({
    owner: "brimble",
    repo: "docs",
    path: `content/docs/${page.file.path}`,
  })

  const lastUpdate = lastUpdateRaw ? new Date(lastUpdateRaw) : new Date()

  return (
    <DocsPage
      toc={page.data.toc}
      lastUpdate={new Date(lastUpdate)}
      editOnGithub={{
        owner: "brimble",
        repo: "docs",
        sha: "main",
        path: `content/docs/${page.file.path}`,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      {page.data.description && (
        <DocsDescription>{page.data.description}</DocsDescription>
      )}
      <DocsBody>
        <page.data.body />
      </DocsBody>
    </DocsPage>
  )
}
