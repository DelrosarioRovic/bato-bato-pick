import Link from "next/link";

const MenuItem = ({ item, url }) => {
  return (
    <Link href={url} className="border p-5 font-bold text-white rounded-full">
      {item}
    </Link>
  );
};

export default MenuItem;
