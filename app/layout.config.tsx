import { type LinkItemType } from 'fumadocs-ui/layouts/docs';
import {
  AlbumIcon,
  Book,
  BadgeDollarSign,
  Rotate3d,
  Settings,
  Logs,
  LayoutTemplate,
  Server,
  Compass,
} from 'lucide-react';
import Image from 'next/image';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { FumadocsIcon } from '@/app/layout.client';
import Logo from '@/public/logo.png';
import Preview from '@/public/logo.png';

export const linkItems: LinkItemType[] = [
  {
    icon: <AlbumIcon />,
    text: 'Blog',
    url: '/blog',
    active: 'nested-url',
  },
  {
    text: 'Roadmap',
    url: '/Roadmap',
    icon: <Compass />,
    active: 'url',
  },
  {
    text: 'Changelogs',
    url: '/changelogs',
    icon: <Logs />,
  },
  {
    type: 'icon',
    url: 'https://github.com/brimblehq/',
    text: 'Github',
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    external: true,
  },
];

export const logo = (
  <>
    <Image
      alt="Brimble"
      src="/logo.png"
      width={100} // Set the width to 100 pixels
      height={100} // Set the height to 100 pixels
      sizes="100px"
      className="hidden w-20 md:w-24 [.uwu_&]:block"
      aria-label="Brimble"
    />

    <FumadocsIcon
      className="size-4 [.uwu_&]:hidden [header_&]:size-5"
      fill="currentColor"
    />
  </>
);

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        {logo}
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          Brimble
        </span>
      </>
    ),
    transparentMode: 'top',
  },
  links: [
    {
      type: 'menu',
      text: 'Documentation',
      url: '/quickstart',
      items: [
        {
          menu: {
            banner: (
              <div className="-mx-3 -mt-3">
                <Image
                  src={Preview}
                  alt="Perview"
                  className="rounded-t-lg object-cover"
                  style={{
                    maskImage:
                      'linear-gradient(to bottom,white 60%,transparent)',
                  }}
                />
              </div>
            ),
            className: 'md:row-span-2',
          },
          icon: <Book />,
          text: 'Getting Started',
          description: 'Begin your journey with Brimble in minutes',
          url: '/quickstart',
        },
        {
          icon: <BadgeDollarSign />,
          text: 'Pricing',
          description: 'Add interactive experience to your docs.',
          url: '/pricing',
          menu: {
            className: 'lg:col-start-2',
          },
        },
        {
          icon: <Server />,
          text: 'Frameworks',
          description:
            'Generate interactive playgrounds and docs for your OpenAPI schema.',
          url: '/frameworks',
          menu: {
            className: 'lg:col-start-2',
          },
        },
        {
          icon: <Rotate3d />,
          text: 'Incremental Migration',
          description: 'Learn the writing format/syntax of Fumadocs.',
          url: '/incremental-migration',
          menu: {
            className: 'lg:col-start-3 lg:row-start-1',
          },
        },
        {
          icon: <Settings />,
          text: 'Builds',
          description: 'See the available layouts of Fumadocs UI.',
          url: '/builds',
          menu: {
            className: 'lg:col-start-3',
          },
        },
      ],
    },
    ...linkItems,
  ],
};
