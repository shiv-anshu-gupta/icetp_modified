import React from "react";

const FilterSidebar: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-gray-200 text-lg font-semibold">image of user</h1>
      <nav className="px-4 py-8 ">
        <ul className="space-y-4 text-gray-200">
          <li className="">
            <a href="/dashboard" className="text-lg font-semibold ">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/projects" className="text-lg font-semibold ">
              Projects
            </a>
          </li>
          <li>
            <a href="/clients" className="text-lg font-semibold ">
              Clients
            </a>
          </li>
          <li>
            <a href="/proposals" className="text-lg font-semibold ">
              Proposals
            </a>
          </li>
          <li>
            <a href="/invoices" className="text-lg font-semibold ">
              Invoices & Payments
            </a>
          </li>
          <li>
            <a href="/portfolio" className="text-lg font-semibold ">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/settings" className="text-lg font-semibold ">
              Settings
            </a>
          </li>
          <li>
            <a href="/help" className="text-lg font-semibold ">
              Help & Support
            </a>
          </li>
          <li>
            <a href="/logout" className="text-lg font-semibold ">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FilterSidebar;
