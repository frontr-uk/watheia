import { render } from '@testing-library/react';

import BlogView from './blog-view';

describe('watheia.base-ui/blog', () => {
  it('should render without crashing', () => {
    const { container } = render(<BlogView />);
    expect(container).toBeInstanceOf(HTMLElement);
    expect(container).toMatchSnapshot();
  });
});
