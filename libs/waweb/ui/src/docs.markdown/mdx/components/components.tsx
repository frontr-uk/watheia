// import type { MDXProvider } from '@mdx-js/react';

import { BlockQuote } from '../../../docs.ui/block-quote';
import { Bold } from '../../../docs.ui/bold';
import { ExternalLink } from '../../../docs.routing/external-link';
import { h1, h2, h3, h4, h5, h6 } from '../../heading';
import { Image } from '../../../docs.ui/image';
import { InlineCode } from '../../../docs.ui/inline-code';
import { Italic } from '../../../docs.ui/italic';
import { Ol } from '../../../docs.ui/ol';
import { Paragraph } from '../../../docs.ui/paragraph';
import { Separator } from '../../../docs.ui/separator';
import { Snippet } from '../../hybrid-live-code-snippet';
import { Sup } from '../../../docs.ui/sup';
import { Table } from '../../../docs.ui/table/base-table';
import { Td } from '../../../docs.ui/table/td';
import { Tr } from '../../../docs.ui/table/tr';
import { Ul } from '../../../docs.ui/ul';

export const defaultMdxComponents = {
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
  pre: ({ children }: { children: any }) => children, // code provides its own built in `pre`
  sup: Sup,
  table: Table,
  tr: Tr,
  td: Td,
  blockquote: BlockQuote
};
