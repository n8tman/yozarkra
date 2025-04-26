// Types for our permissions system
export type Permission = string;
export type Role = 'admin' | 'instructor' | 'student' | 'content_manager' | 'support_staff' | string;

// Map of roles to their permissions
export const rolePermissions: Record<Role, Permission[]> = {
  // Admin has all permissions
  admin: ['*'],
  
  // Instructor permissions
  instructor: [
    'courses.view',
    'courses.create',
    'courses.update',
    'courses.delete',
    'content.view',
    'content.create',
    'content.update',
    'content.delete',
    'students.view',
    'assignments.view',
    'assignments.grade',
  ],
  
  // Student permissions
  student: [
    'courses.view',
    'content.view',
    'assignments.view',
    'assignments.submit',
    'profile.view',
    'profile.update',
  ],
  
  // Content Manager permissions
  content_manager: [
    'courses.view',
    'courses.update',
    'content.view',
    'content.create',
    'content.update',
    'content.delete',
  ],
  
  // Support Staff permissions
  support_staff: [
    'users.view',
    'courses.view',
    'content.view',
    'tickets.view',
    'tickets.update',
    'tickets.create',
  ],
};

/**
 * Check if a user has a specific permission
 * @param userRoles Array of roles the user has
 * @param requiredPermission The permission to check for
 * @returns Boolean indicating if the user has the permission
 */
export function hasPermission(userRoles: Role[], requiredPermission: Permission): boolean {
  // If any role has wildcard permission, they have all permissions
  if (userRoles.includes('admin')) {
    return true;
  }
  
  // Check each of the user's roles
  for (const role of userRoles) {
    const permissions = rolePermissions[role] || [];
    
    // Check if this role has the required permission
    if (permissions.includes(requiredPermission) || permissions.includes('*')) {
      return true;
    }
    
    // Check for wildcard category permissions (e.g., 'courses.*' would match 'courses.view')
    const [category, action] = requiredPermission.split('.');
    const categoryWildcard = `${category}.*`;
    
    if (permissions.includes(categoryWildcard)) {
      return true;
    }
  }
  
  return false;
}

/**
 * Check if a user has all the specified permissions
 * @param userRoles Array of roles the user has
 * @param requiredPermissions Array of permissions to check for
 * @returns Boolean indicating if the user has all the permissions
 */
export function hasAllPermissions(userRoles: Role[], requiredPermissions: Permission[]): boolean {
  return requiredPermissions.every(permission => hasPermission(userRoles, permission));
}

/**
 * Check if a user has any of the specified permissions
 * @param userRoles Array of roles the user has
 * @param requiredPermissions Array of permissions to check for
 * @returns Boolean indicating if the user has any of the permissions
 */
export function hasAnyPermission(userRoles: Role[], requiredPermissions: Permission[]): boolean {
  return requiredPermissions.some(permission => hasPermission(userRoles, permission));
}

/**
 * Get all permissions for a user based on their roles
 * @param userRoles Array of roles the user has
 * @returns Array of permissions the user has
 */
export function getUserPermissions(userRoles: Role[]): Permission[] {
  // If the user has admin role, they have all permissions
  if (userRoles.includes('admin')) {
    return ['*'];
  }
  
  // Gather all unique permissions from the user's roles
  const permissionSet = new Set<Permission>();
  
  for (const role of userRoles) {
    const permissions = rolePermissions[role] || [];
    
    for (const permission of permissions) {
      permissionSet.add(permission);
    }
  }
  
  return Array.from(permissionSet);
} 