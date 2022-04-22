import { Metadata } from './Metadata';

/**
 * Base type for all stackbit models.
 */
export interface IModel {
  readonly type: string;
  readonly __metadata: Metadata;
}

/**
 * A trait applied to all other Pages
 */
export interface IPage extends IModel {
  readonly layout: string;
  readonly title: string;
  readonly slug: string | null;
  readonly content: string | null;
  readonly sections: ISectionElement[];
}

/**
 * A trait applied to all block elements
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
// export interface IBlockElement extends IModel {}

/**
 * A trait applied to clickable actions, such as a
 * button or link
 */
// export interface IActionElement extends IBlockElement {
//   readonly label: string;
//   readonly url: string;
// }

/**
 * A trait applied to all section elements
 */
export interface ISectionElement extends IModel {
  readonly name: string | null;
  readonly slot: string;
  readonly heading: string | null;
  readonly subheading: string | null;
}
