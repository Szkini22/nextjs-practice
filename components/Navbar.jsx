import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-700 p-4 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              My Portfolio
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300">
              Projects
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;