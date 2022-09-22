import { userRouter } from "next/router";

const article = () => {
  const router = userRouter();
  const { id } = router.query;

  return <div>This is an article {id}</div>;
};

export default article;
