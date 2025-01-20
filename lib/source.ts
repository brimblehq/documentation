import { docs, meta } from "@/.source"
import { createMDXSource } from "fumadocs-mdx"
import { loader } from "fumadocs-core/source"
import { TableOfContents } from "fumadocs-core/server"

export const source = loader({
  baseUrl: "/",
  source: createMDXSource(docs, meta),
})

export type PageProps = {
  page: {
    file: {
      path: string
    }
    data: {
      toc?: TableOfContents
      title: string
      description?: string
      body: React.FC
    }
  }
}
