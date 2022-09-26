import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;
  return <div>Welcome to your individual page {username}</div>;
};

export default Profile;
