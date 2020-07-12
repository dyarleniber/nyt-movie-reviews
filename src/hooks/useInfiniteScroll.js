import { useEffect } from 'react';

const useInfiniteScroll = callback => {
  useEffect(() => {
    const handleScroll = () => {
      const { innerHeight } = window;

      const {
        documentElement: { scrollTop, offsetHeight },
      } = document;

      if (innerHeight + scrollTop === offsetHeight) {
        callback();
      }
    };

    const { addEventListener, removeEventListener } = window;

    addEventListener('scroll', handleScroll);

    return () => removeEventListener('scroll', handleScroll);
  }, [callback]);
};

export default useInfiniteScroll;
