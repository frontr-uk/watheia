import React from 'react';
import classNames from 'clsx';
import styles from './tr.module.scss';

export type TrProps = React.HTMLAttributes<HTMLTableRowElement>;

export function Tr({ children, className, ...rest }: TrProps) {
  return (
    <tr {...rest} className={classNames(styles['tr'], className)}>
      {children}
    </tr>
  );
}
