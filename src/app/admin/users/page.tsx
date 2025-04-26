import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Management | Admin",
  description: "Manage users, roles and permissions",
};

export default function UsersManagementPage() {
  // Mock user data - in a real implementation, this would come from an API
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      createdAt: "2023-05-12",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Instructor",
      status: "Active",
      createdAt: "2023-06-18",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Student",
      status: "Active",
      createdAt: "2023-07-24",
    },
    {
      id: "4",
      name: "Alice Williams",
      email: "alice@example.com",
      role: "Student",
      status: "Inactive",
      createdAt: "2023-08-15",
    },
    {
      id: "5",
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Student",
      status: "Active",
      createdAt: "2023-09-05",
    },
  ];

  // Status badge component
  const StatusBadge = ({ status }: { status: string }) => {
    const bgColor = status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
    return (
      <span className={`px-2 py-1 text-xs rounded-full ${bgColor}`}>
        {status}
      </span>
    );
  };

  // Role badge component
  const RoleBadge = ({ role }: { role: string }) => {
    const colors: Record<string, string> = {
      Admin: "bg-purple-100 text-purple-800",
      Instructor: "bg-blue-100 text-blue-800",
      Student: "bg-gray-100 text-gray-800",
    };
    
    return (
      <span className={`px-2 py-1 text-xs rounded-full ${colors[role] || colors.Student}`}>
        {role}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">User Management</h1>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search users..."
              className="pl-9 py-2 border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-2 top-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
            Add User
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Created
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm">{user.name.charAt(0)}</span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-300">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <RoleBadge role={user.role} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    {user.createdAt}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t dark:border-gray-600">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-300">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">5</span> results
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-white dark:bg-gray-800 border rounded-md text-sm text-gray-700 dark:text-gray-300">
                Previous
              </button>
              <button className="px-3 py-1 bg-white dark:bg-gray-800 border rounded-md text-sm text-gray-700 dark:text-gray-300">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 