import dynamic from 'next/dynamic';
import { BlockQuote } from './base-ui.elements/block-quote';
import { Bold } from './base-ui.elements/bold';
import { InlineCode } from './base-ui.elements/inline-code';
import { Italic } from './base-ui.elements/italic';
import { Ol } from './base-ui.elements/ol';
import pre from './base-ui.elements/pre';
import { Sup } from './base-ui.elements/sup';
import { Table } from './base-ui.elements/table/base-table';
import { Td } from './base-ui.elements/table/td';
import { Tr } from './base-ui.elements/table/tr';
import { Ul } from './base-ui.elements/ul';
import { h1, h2, h3, h4, h5, h6 } from './docs.markdown/heading';
import { Snippet } from './docs.markdown/hybrid-live-code-snippet';
import { ExternalLink } from './docs.routing/external-link';
import { Image } from './docs.ui/image';
import { Paragraph } from './docs.ui/paragraph';
import { Separator } from './docs.ui/separator';
import { Components } from './types';

export const atoms: Components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p: Paragraph,
  code: Snippet,
  a: ExternalLink,
  inlineCode: InlineCode,
  ol: Ol,
  ul: Ul,
  hr: Separator,
  thematicBreak: Separator,
  img: Image,
  strong: Bold,
  em: Italic,
  pre, // code provides its own built in `pre`
  sup: Sup,
  table: Table,
  tr: Tr,
  td: Td,
  blockquote: BlockQuote
};

export const enum View {
  BlogFeed = 'waweb.views/blog-feed',
  DesignExpo = 'waweb.views/design-expo',
  EnterpriseOffering = 'waweb.views/enterprise-offering',
  HybridHomepage = 'waweb.views/hybrid-homepage',
  MockView = 'waweb.views/mock-view',
  Support = 'waweb.views/support'
}

export const views = {
  [View.BlogFeed]: dynamic(() => import('./waweb.views/blog-feed')),
  [View.DesignExpo]: dynamic(() => import('./waweb.views/design-expo')),
  [View.EnterpriseOffering]: dynamic(() => import('./waweb.views/enterprise-offering')),
  [View.HybridHomepage]: dynamic(() => import('./waweb.views/hybrid-homepage')),
  [View.MockView]: dynamic(() => import('./waweb.views/mock-view')),
  [View.Support]: dynamic(() => import('./waweb.views/support'))
} as const;
