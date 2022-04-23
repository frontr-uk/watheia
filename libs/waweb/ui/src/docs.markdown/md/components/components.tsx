import React, { ReactNode } from 'react';

import { BlockQuote } from '../../../docs.ui/block-quote';
import { Bold } from '../../../docs.ui/bold';
import { ExternalLink } from '../../../docs.routing/external-link';
import { Image } from '../../../docs.ui/image';
import { Italic } from '../../../docs.ui/italic';
import { Ol } from '../../../docs.ui/ol';
import { Paragraph } from '../../../docs.ui/paragraph';
import { Separator } from '../../../docs.ui/separator';
import { Sup } from '../../../docs.ui/sup';
import { Table } from '../../../docs.ui/table/base-table';
import { Td } from '../../../docs.ui/table/td';
import { Tr } from '../../../docs.ui/table/tr';
import { Ul } from '../../../docs.ui/ul';

import { h1, h2, h3, h4, h5, h6 } from '../../heading';
import { Code } from './code';

// inline functions removes unwanted props, that should not become html attributes

export const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,

  a: ExternalLink,
  blockquote: BlockQuote,
  code: Code,
  em: Italic,
  hr: Separator,
  img: Image,
  p: Paragraph,
  // code includes it's own pre tag
  pre: ({ children }: { children: ReactNode }) => <>{children}</>,
  strong: Bold,
  sup: Sup,
  table: Table,
  thematicBreak: Separator,
  td: ({ isHeader, ...rest }: any) => <Td {...rest} />,
  tr: Tr,
  // th: ({ isHeader, ...rest }: any) => <Th {...rest} />,
  // li: ({ ordered, depth, checked, ...rest}: any) => <li {...rest}/>,
  ol: ({ ordered, depth, ...rest }: any) => <Ol {...rest} />,
  ul: ({ ordered, depth, ...rest }: any) => <Ul {...rest} />
};
