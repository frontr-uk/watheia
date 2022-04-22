import * as React from 'react';
import { SVGProps } from 'react';

const ShowMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={18} width={18} {...props}>
    <defs>
      <style>{'.a{fill:#6e6e6e}'}</style>
    </defs>
    <title>{'S ShowMenu 18 N'}</title>
    <rect className="a" height={2} rx={0.5} width={14} x={2} y={8} />
    <rect className="a" height={2} rx={0.5} width={14} x={2} y={3} />
    <rect className="a" height={2} rx={0.5} width={14} x={2} y={13} />
  </svg>
);

export default ShowMenu;
