// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4 fixed bottom-0 w-full flex justify-around md:flex-col md:justify-start md:w-auto md:static">
      <Link href="/dashboard" className="p-2 md:p-4">
        Home
      </Link>
      <Link href="/profile" className="p-2 md:p-4">
        Profile
      </Link>
      <Link href="/settings" className="p-2 md:p-4">
        Settings
      </Link>
    </nav>
  );
};

export default Navbar;
