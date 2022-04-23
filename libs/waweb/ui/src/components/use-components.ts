import React, {
  ComponentType,
  createContext,
  createElement,
  HtmlHTMLAttributes,
  useContext,
  useMemo
} from 'react';
import { View, views } from './registry';
import { Components, MergeComponents, UiProviderProps } from './types';

// export type Components<T> = Record<string, ComponentType<T>>;

const Context = createContext({});

const emptyObject: Components = {};

/**
 * Get current components from the  Context.
 *
 * @param {Components|MergeComponents} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
export function useComponents(components: Components | MergeComponents): Components {
  const contextComponents = useContext(Context);
  // Memoize to avoid unnecessary top-level context changes
  return useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents);
    }

    return { ...contextComponents, ...components };
  }, [contextComponents, components]);
}

export function useView<P>(view: View, props: P) {
  const View = views[view];
  return createElement(View, props);
}

/**
 * Provider for  context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
export function UiProvider({ children, components, disableParentContext }: UiProviderProps) {
  let allComponents = useComponents(components);

  if (disableParentContext) {
    allComponents = (components as Components) ?? emptyObject;
  }

  return createElement(Context.Provider, { value: allComponents }, children);
}
