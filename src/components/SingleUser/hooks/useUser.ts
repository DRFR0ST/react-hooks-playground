import { useRef } from "react";

/**
 * TODO: Return a defined data structure that is gonna be returned from the hook.
 * TODO: Fetch user data from API and memoize.
 * TODO: Set loading state.
 * TODO: Set error state.
 */
export const useUser = () => {
  type State = {
    data: any;
    loading: boolean;
    error: string | null;
  };

  const stateRef = useRef(null as unknown as State);
  
  const fetch = async () => {
    
  }

  if (stateRef.current === null) {
    // Runs only once!
    stateRef.current = {
      data: null,
      loading: true,
      error: null,
    };
  }

  return stateRef.current;
};
