import React, { HTMLAttributes } from 'react';

import classNames from 'clsx';

import { Paragraph } from '../../base-ui.text/paragraph';
import { PossibleSizes } from '../../base-ui.theme/sizes';
import { marginCenter } from '../../base-ui.layout/align';
import { textColumn } from '../../base-ui.layout/page-frame';

import { H2 } from '../../waweb.elements/heading';
import { Image } from '../../waweb.elements/image';

import styles from './develop-components.module.scss';

/**
 * @name DevelopComponents
 * @description
 * A section of static content, showing how Bit breaks down complicated websites.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function DevelopComponents(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} data-bit-id="waweb.sections/develop-components">
      <div className={classNames(textColumn, marginCenter)}>
        <H2 size={PossibleSizes.sm}>
          Split app development to independent components and teams
        </H2>
        <Paragraph size={PossibleSizes.lg} className={classNames(styles['subtitle'])}>
          Say goodbye to monolithic web apps, and hello to component-driven apps composed of
          independent components built by autonomous teams working side by side.
        </Paragraph>
      </div>
      <Image alt="bit" src="homepage-bit/assets/booking-breakdown.png" fullWidth />
    </div>
  );
}
