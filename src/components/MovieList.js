import React, { useEffect } from 'react';
import { connectHits, Stats } from 'react-instantsearch-dom';
import { toast } from 'react-toastify';

import Hit from './Hit';

const Hits = ({ hits }) => {
  const toastId = React.useRef(null);
  useEffect(() => {
    const notify = () => (toastId.current = toast(<Stats />));
    if (hits) {
      const timeoutId = setTimeout(() => {
        notify();
      }, 2500);
      return () => {
        clearTimeout(timeoutId);
      };
     } 
  }, [hits]);
  return hits.map(hit => <Hit key={hit.objectID} hit={hit} />);
};

export const MovieList = connectHits(Hits);
