import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <h1>Page Not found</h1>
      <h3>Check if you are in the correct page.</h3>
      <Link href="/">Click here to go Home</Link>
    </div>
  );
};

export default PageNotFound;
