import Link from "next/link";

const Layout = ({ children }) => (
  <div className="flex mt-20 justify-center h-screen">
    <div className="grid grid-cols-3 gap-8">
      <div className="flex flex-col">
        <Link href="/401k-contribution-calculator">
          <a className="underline text-blue-600 hover:text-blue-800">
            401k Contribution Calculator
          </a>
        </Link>
        <Link href="/retirement-priority-calculator">
          <a className="underline text-blue-600 hover:text-blue-800">
            Retirement Priority Calculator
          </a>
        </Link>
      </div>
      <div className="col-span-2">{children}</div>
    </div>
  </div>
);

export default Layout;
