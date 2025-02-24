import { createCompiler, type MDXOptions } from '@fumadocs/mdx-remote';
import * as fs from 'node:fs/promises';
import type { LoadedConfig } from '@/utils/config';
import { remarkInclude } from '@/mdx-plugins/remark-include';
import {
  remarkStructure,
  type StructuredData,
} from 'fumadocs-core/mdx-plugins';
import { createMDXSource, _runtime } from '@/runtime/index';
import type { RuntimeAsync } from '@/runtime/types';

async function initCompiler(config: LoadedConfig, collection: string) {
  let mdxOptions: MDXOptions | undefined;

  const col = config.collections.get(collection);
  if (col?.type === 'doc') mdxOptions = col.mdxOptions as MDXOptions;
  else if (col?.type === 'docs')
    mdxOptions = col.docs?.mdxOptions as MDXOptions;

  if (!mdxOptions) {
    const options =
      typeof config.global?.mdxOptions === 'function'
        ? await config.global.mdxOptions()
        : config.global?.mdxOptions;
    const remarkPlugins = options?.remarkPlugins ?? [];

    mdxOptions = {
      ...options,
      remarkPlugins: (v) =>
        typeof remarkPlugins === 'function'
          ? [remarkInclude, ...remarkPlugins(v), remarkStructure]
          : [remarkInclude, ...v, ...remarkPlugins, remarkStructure],
    };
  }

  return createCompiler(mdxOptions);
}

export const _runtimeAsync: RuntimeAsync = {
  doc(files, collection, config) {
    const init = initCompiler(config, collection);

    return files.map(({ info: file, data: frontmatter }) => {
      return {
        ...frontmatter,
        _file: file,
        async load() {
          const compiler = await init;
          const out = await compiler.compile({
            source: (await fs.readFile(file.absolutePath)).toString(),
            filePath: file.absolutePath,
          });

          return {
            body: out.body,
            toc: out.toc,
            structuredData: out.vfile.data.structuredData as StructuredData,
            _exports: out.exports ?? {},
          };
        },
      };
    }) as any;
  },
  docs(docs, metas, collection, config) {
    const parsedDocs = this.doc(docs, collection, config);
    const parsedMetas = _runtime.meta(metas);

    return {
      docs: parsedDocs,
      meta: parsedMetas,
      toFumadocsSource() {
        return createMDXSource(parsedDocs, parsedMetas);
      },
    } as any;
  },
};

export { buildConfig } from '@/config/build';
