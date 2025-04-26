"use client";

import { ReactNode } from "react";
import { Permission, Role, hasPermission, hasAnyPermission, hasAllPermissions } from "@/lib/permissions";

interface PermissionGuardProps {
  children: ReactNode;
  requiredPermission?: Permission;
  requiredPermissions?: Permission[];
  requireAll?: boolean;
  fallback?: ReactNode;
  userRoles: Role[];
}

/**
 * A component that conditionally renders its children based on user permissions
 * 
 * @example
 * // Require a single permission
 * <PermissionGuard requiredPermission="users.create" userRoles={userRoles}>
 *   <CreateUserButton />
 * </PermissionGuard>
 * 
 * @example
 * // Require any of multiple permissions
 * <PermissionGuard requiredPermissions={["courses.create", "courses.update"]} userRoles={userRoles}>
 *   <CourseEditorPanel />
 * </PermissionGuard>
 * 
 * @example
 * // Require all permissions
 * <PermissionGuard requiredPermissions={["users.view", "users.update"]} requireAll={true} userRoles={userRoles}>
 *   <UserSettingsForm />
 * </PermissionGuard>
 */
export default function PermissionGuard({
  children,
  requiredPermission,
  requiredPermissions = [],
  requireAll = false,
  fallback = null,
  userRoles,
}: PermissionGuardProps) {
  // Check single permission
  if (requiredPermission) {
    return hasPermission(userRoles, requiredPermission) ? <>{children}</> : <>{fallback}</>;
  }

  // Check multiple permissions
  if (requiredPermissions.length > 0) {
    const hasPermissions = requireAll
      ? hasAllPermissions(userRoles, requiredPermissions)
      : hasAnyPermission(userRoles, requiredPermissions);

    return hasPermissions ? <>{children}</> : <>{fallback}</>;
  }

  // If no permissions required, render children
  return <>{children}</>;
}

/**
 * A higher-order component (HOC) version of PermissionGuard
 */
export function withPermission(
  Component: React.ComponentType<any>,
  requiredPermission?: Permission,
  requiredPermissions?: Permission[],
  requireAll?: boolean,
  fallback?: ReactNode
) {
  return function PermissionGuardedComponent(props: any & { userRoles: Role[] }) {
    return (
      <PermissionGuard
        requiredPermission={requiredPermission}
        requiredPermissions={requiredPermissions}
        requireAll={requireAll}
        fallback={fallback}
        userRoles={props.userRoles}
      >
        <Component {...props} />
      </PermissionGuard>
    );
  };
} 