import { useUser } from "./hooks/useUser";

const SingleUser = () => {
  const userRq = useUser(1);

  return (
    <div>
      <p>{userRq.loading ? "Loading" : "Not loading"}</p>
    </div>
  );
};

export default SingleUser;
