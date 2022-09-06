import { useUser } from "./hooks/useUser";

const SingleUser = () => {
  const userRq = useUser();

  return (
    <div>
      <p>{userRq.loading ? "Loading" : "Not loading"}</p>
    </div>
  );
};

export default SingleUser;
