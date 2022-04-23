import React from 'react';
import classNames from 'clsx';
import styles from './label.module.scss';

export type LabelProps = {
  /**
   * override label background color
   */
  color?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Short text block with background.
 *
 * ### CSS variables:
 * The following variables apply to this component
 * -   `--bit-accent-color` (background color)
 * -   `--primary-label-text` (text color)
 * -   `--primary-label-width` (max-width)
 * -   `--primary-label-height` (height)
 */
export function Label({ color, className, ...rest }: LabelProps) {
  return (
    <div
      className={classNames(styles.label, className)}
      style={{ background: color }}
      data-bit-id="teambit.base-ui/elements/label"
      {...rest}
    />
  );
}