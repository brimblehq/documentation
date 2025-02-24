'use client';
import type { PageTree } from 'fumadocs-core/server';
import { usePathname } from 'next/navigation';
import { createContext, useContext, type ReactNode, useMemo } from 'react';
import { searchPath } from 'fumadocs-core/breadcrumb';

interface TreeContextType {
  root: PageTree.Root | PageTree.Folder;
}

const TreeContext = createContext<TreeContextType | null>(null);
const PathContext = createContext<PageTree.Node[]>([]);

export function TreeContextProvider({
  children,
  tree,
}: {
  tree: PageTree.Root;
  children: ReactNode;
}): ReactNode {
  const pathname = usePathname();
  const path = useMemo(
    () => searchPath(tree.children, pathname) ?? [],
    [pathname, tree],
  );

  const root = (path.findLast((item) => item.type === 'folder' && item.root) ??
    tree) as PageTree.Root;

  return (
    <TreeContext.Provider value={useMemo(() => ({ root }), [root])}>
      <PathContext.Provider value={path}>{children}</PathContext.Provider>
    </TreeContext.Provider>
  );
}

export function useTreePath(): PageTree.Node[] {
  return useContext(PathContext);
}

export function useTreeContext(): TreeContextType {
  const ctx = useContext(TreeContext);

  if (!ctx)
    throw new Error('You must wrap this component under <DocsLayout />');
  return ctx;
}
