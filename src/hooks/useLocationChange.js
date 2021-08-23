/*
It's important to note that all the above fire on the first client route being mounted,
as well as subsequent changes. If that's a problem, use the latter example 
and check that a prevLocation exists before doing anything.
*/

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useLocationChange = (action) => {
  const currLoc = useLocation();
  const prevLoc = usePrevious(currLoc);
  useEffect(() => {
    action(currLoc, prevLoc === undefined ? null : prevLoc);
  }, [currLoc.pathname]);
};

export default useLocationChange;
