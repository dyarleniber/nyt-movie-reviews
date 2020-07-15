import { renderHook } from '@testing-library/react-hooks';

import useInfiniteScroll from '../../hooks/useInfiniteScroll';

describe('useInfiniteScroll hook', () => {
  const originalInnerHeight = window.innerHeight;

  afterEach(() => {
    window.innerHeight = originalInnerHeight;

    jest.restoreAllMocks();
  });

  it('should add scroll event listener', () => {
    delete window.innerHeight;
    window.innerHeight = 0;

    const events = {};

    jest
      .spyOn(window, 'addEventListener')
      .mockImplementation((event, handle) => {
        events[event] = handle;
      });

    const callback = jest.fn();

    renderHook(() => useInfiniteScroll(callback));

    expect(window.addEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function)
    );

    events.scroll();

    expect(callback).toHaveBeenCalled();
  });
});
