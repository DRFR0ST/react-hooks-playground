import { useRef, useState, useEffect } from "react";

/**
 * TODO: Return a defined data structure that is gonna be returned from the hook.
 * TODO: Fetch user data from API and memoize.
 * TODO: Set loading state.
 * TODO: Set error state.
 */
interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  company: ICompany;
  phone: string;
  website: string;
}

export const useUser = (id: number) => {
  type State = {
    data: IUser | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
  };

  const stateRef = useRef(null as unknown as State);
  const [data, setData] = useState<State["data"]>(null);
  const [loading, setLoading] = useState<State["loading"]>(false);
  const [error, setError] = useState<State["error"]>(null);

  // try...catch...finally => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const res = await response.json();
      console.log("Fetch executed", res);
      setData(res);
    } catch (err) {
      const e = err as Error;
      setError(e.message);
    }
    setLoading(false);
  };

  if (stateRef.current === null) {
    // Runs only once!
    stateRef.current = {
      data,
      loading: true,
      error: null,
      refetch: fetchData
    };
    stateRef.current.refetch();
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  stateRef.current.data = data;
  stateRef.current.loading = loading;
  stateRef.current.error = error;
  stateRef.current.refetch = fetchData;

  return stateRef.current;
};
