import { IModel, IPage } from './types';
import sourcebitDataClient from './sourcebit-data-client';
import { SourcebitDataCache } from 'sourcebit-target-next';
// import { not } from 'lodash';

export const matchPageObject = (it: IModel) => it.__metadata.modelType === 'page';

export type ObjectFilter = (value: IModel, index?: number, array?: IModel[]) => value is IModel;

export type PageFilter = (value: IPage, index?: number, array?: IPage[]) => value is IPage;

/**
 * Filter predicate to match page objects
 *
 * @param model
 * @returns
 */
export const matchPages = (model: IModel) => model.__metadata.modelName === 'Page';

/**
 * Wrapper API to sourcebit data cache
 */
export class StackbitApi {
  private readonly _objects: IModel[];
  private readonly _pages: IPage[];
  private readonly _props: Record<string, unknown>;

  private static _singleton: StackbitApi;

  static async get(): Promise<StackbitApi> {
    if (!StackbitApi._singleton) {
      StackbitApi._singleton = new StackbitApi(await sourcebitDataClient.getData());
    }

    return StackbitApi._singleton;
  }

  constructor(data: SourcebitDataCache) {
    this._props = data.props;
    this._objects = data.objects.filter((it) => !matchPageObject(it));

    // TODO We need to figure out why `pages` field in stackbit
    // cache always resolves to `[]`. Until then, we must
    // manually perform the same logic here.
    this._pages = data.objects.filter(matchPageObject);
  }

  /**
   * Returns the resolved global context props
   * @returns
   */
  get props(): Record<string, unknown> {
    return this._props;
  }

  /**
   * Contains a list of all page objects
   * @returns
   */
  get objects(): IModel[] {
    return this._objects;
  }

  /**
   * TODO We need to figure out why `pages` field in stackbit
   *      cache always resolves to `[]`. Until then, we must
   *      manually perform the same logic here.
   * @returns {IPage[]}
   */
  get pages(): IPage[] {
    return this._pages;
  }

  /**
   * Extract objects from the data cache by matching the "layout" property.
   *
   * @param {string} type Name of the model
   * @returns {array} Sourcebit data objects
   */
  // pagesByLayout<T extends IPage>(layout: string): T[] {
  //   return this.getPages().filter((it) => (it as T)?.layout === layout) as T[];
  // }

  /**
   * Find a single model from the data cache by matching the "type"
   * property. Returns only the first match, or throws
   * if missing.
   *
   * @param {string} type Name of the model
   * @returns {IModel} First matching object
   */
  // modelByType<T extends IModel>(type: string): T {
  //   const model = this.getObjects().find((it) => it.type === type) as T;
  //   if (!model) {
  //     throw new Error(`A model with type (${type}) could not be located in the cache.`);
  //   }

  //   return model;
  // }
}
