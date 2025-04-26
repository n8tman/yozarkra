import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roles & Permissions | Admin",
  description: "Manage roles and permissions for your application",
};

export default function RolesAndPermissionsPage() {
  // Mock roles data
  const roles = [
    {
      id: "1",
      name: "Admin",
      description: "Full access to all resources",
      usersCount: 3,
      permissions: ["all"],
    },
    {
      id: "2",
      name: "Instructor",
      description: "Can create and manage courses, view students in their courses",
      usersCount: 12,
      permissions: ["courses.create", "courses.update", "courses.delete", "students.view"],
    },
    {
      id: "3",
      name: "Student",
      description: "Can access enrolled courses and submit assignments",
      usersCount: 845,
      permissions: ["courses.view", "assignments.submit"],
    },
    {
      id: "4",
      name: "Content Manager",
      description: "Can create and edit course content",
      usersCount: 5,
      permissions: ["courses.view", "courses.update", "content.create", "content.update"],
    },
    {
      id: "5",
      name: "Support Staff",
      description: "Can view user data and respond to support tickets",
      usersCount: 8,
      permissions: ["users.view", "tickets.view", "tickets.update"],
    },
  ];

  // Mock permissions data - in a real app this would be more structured
  const permissionCategories = [
    {
      name: "Users",
      permissions: [
        { id: "users.view", name: "View Users", description: "Can view user profiles and data" },
        { id: "users.create", name: "Create Users", description: "Can create new user accounts" },
        { id: "users.update", name: "Update Users", description: "Can modify user account data" },
        { id: "users.delete", name: "Delete Users", description: "Can delete user accounts" },
      ],
    },
    {
      name: "Courses",
      permissions: [
        { id: "courses.view", name: "View Courses", description: "Can view course content" },
        { id: "courses.create", name: "Create Courses", description: "Can create new courses" },
        { id: "courses.update", name: "Update Courses", description: "Can modify course content" },
        { id: "courses.delete", name: "Delete Courses", description: "Can delete courses" },
      ],
    },
    {
      name: "Content",
      permissions: [
        { id: "content.view", name: "View Content", description: "Can view educational content" },
        { id: "content.create", name: "Create Content", description: "Can create new educational content" },
        { id: "content.update", name: "Update Content", description: "Can modify educational content" },
        { id: "content.delete", name: "Delete Content", description: "Can delete educational content" },
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Roles & Permissions</h1>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          Create New Role
        </button>
      </div>

      {/* Roles Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="px-6 py-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold">Roles</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage existing roles or create new ones
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Users
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Permissions
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {roles.map((role) => (
                <tr key={role.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{role.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500 dark:text-gray-300">{role.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-300">{role.usersCount}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {role.permissions[0] === "all" ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800">
                          All Permissions
                        </span>
                      ) : (
                        role.permissions.slice(0, 2).map((permission) => (
                          <span key={permission} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            {permission.split(".")[1]}
                          </span>
                        ))
                      )}
                      {role.permissions.length > 2 && role.permissions[0] !== "all" && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                          +{role.permissions.length - 2} more
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                        Edit
                      </button>
                      {role.name !== "Admin" && role.name !== "Student" && (
                        <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Permissions Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="px-6 py-4 border-b dark:border-gray-700">
          <h2 className="text-xl font-semibold">Permissions</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            View and manage all available permissions in the system
          </p>
        </div>
        <div className="p-6 space-y-6">
          {permissionCategories.map((category) => (
            <div key={category.name} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.permissions.map((permission) => (
                  <div key={permission.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-md flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">{permission.name}</h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{permission.description}</p>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded">
                      {permission.id}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 