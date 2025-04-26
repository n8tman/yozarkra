import { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Unauthorized | Access Denied",
  description: "You don't have permission to access this page",
};

export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
            <Shield className="w-12 h-12 text-red-500 dark:text-red-400" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Access Denied</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You don't have permission to access this page. Please contact an administrator if you believe this is an error.
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors duration-200"
          >
            Return to Home
          </Link>
          <Link
            href="/login"
            className="block w-full py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Login with Different Account
          </Link>
        </div>
      </div>
    </div>
  );
} 