import React, { PureComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from 'clsx';

import styles from './hybrid-homepage.module.scss';

import { backgrounds } from '../../base-ui.surfaces/background';
import { centerColumn, wideColumn } from '../../base-ui.layout/page-frame';

import { CarouselSection } from '../../waweb.sections/carousel-section';
import { CtaSection } from '../../waweb.sections/cta';
import { EnterpriseSection } from '../../waweb.sections/enterprise-section';
import { CommunitySection } from '../../waweb.sections/community';
import { ComponentsAdvantages } from '../../waweb.sections/component-advantages';
import { IndependentTeams } from '../../waweb.sections/independent-teams';
import { TalkToExperts } from '../../waweb.sections/talk-to-experts';
import { Hero } from '../../waweb.sections/hero';
import { DevelopComponents } from '../../waweb.sections/develop-components';
import { ReuseComponents } from '../../waweb.sections/reuse-components';
import { BuildTogether } from '../../waweb.sections/build-together';
import { DiscoverComponents } from '../../waweb.sections/discover-components';
import { EnterpriseLogos } from '../../waweb.marketing/enterprise-logos';

export type HybridHomepageProps = {
  /** placeholder for content, after the first purple background fold. */
  communityScopes?: ReactNode;
  /** placeholder for content, at the bottom of the first purple background fold */
  mainCta?: ReactNode;
  /** show github star count at the community section */
  githubStars?: number;
  /** handles 'book meeting' call to action */
  onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Full, responsive page, showing the many benefits of bit, in a simple application.
 *
 * Developing this component in isolation allowed us to use new technology not available in the consuming project,
 * namely TypeScript and @testing-library/react.
 * @name HybridHomepage
 */
export class HybridHomepage extends PureComponent<HybridHomepageProps> {
  override render() {
    const {
      communityScopes = null,
      mainCta,
      githubStars,
      onBookMeeting,
      className,
      ...rest
    } = this.props;

    return (
      <div {...rest} className={classNames(backgrounds.bedrock, className)}>
        <div
          className={classNames(
            styles['purpleBackground'],
            styles['purpleFold'],
            styles['margin180']
          )}
        >
          <Hero className={classNames(styles['landingSection'])} />

          {mainCta}
        </div>

        {communityScopes}

        <EnterpriseSection className={classNames(centerColumn, styles['margin100'])} />

        <EnterpriseLogos className={styles['margin130']} />

        <CarouselSection className={classNames(wideColumn)} />

        <div className={styles['uEllipse']}></div>

        <div
          className={classNames(
            styles['greyBackground'],
            styles['greyBgPadding'],
            styles['foldMargin']
          )}
        >
          <DevelopComponents className={classNames(centerColumn, styles['foldMargin'])} />

          <ComponentsAdvantages className={classNames(centerColumn)} />
        </div>

        <ReuseComponents className={classNames(centerColumn, styles['foldMargin'])} />

        <TalkToExperts
          className={classNames(centerColumn, styles['foldMargin'])}
          onBookMeeting={onBookMeeting}
        />

        <div
          className={classNames(
            styles['greyBackground'],
            styles['greyBgPadding'],
            styles['foldMargin']
          )}
        >
          <BuildTogether className={classNames(centerColumn)} />
        </div>

        <DiscoverComponents className={classNames(centerColumn, styles['foldMargin'])} />

        <div
          className={classNames(
            styles['greyBackground'],
            styles['greyBgPadding'],
            styles['foldMargin']
          )}
        >
          <IndependentTeams className={classNames(centerColumn)} />
        </div>

        <CommunitySection
          className={classNames(centerColumn, styles['foldMargin'])}
          githubStars={githubStars}
        />

        <CtaSection className={classNames(centerColumn, styles['foldMargin'])} />
      </div>
    );
  }
}

export default HybridHomepage;
