import Link from "next/link";

const Layout = ({ children }) => (
  <div className="flex items-center justify-center h-screen">
    <div className="grid grid-cols-3 gap-8">
      <div>
        <Link href="/401k-contribution-calculator">
          <a className="underline text-blue-600 hover:text-blue-800">
            401k Contribution Calculator
          </a>
        </Link>
      </div>
      <div className="col-span-2">{children}</div>
    </div>
  </div>
);

export default Layout;
