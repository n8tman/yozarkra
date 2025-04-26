import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path is an admin route
  const isAdminRoute = pathname.startsWith("/admin");
  
  // Continue if not an admin route
  if (!isAdminRoute) {
    return NextResponse.next();
  }
  
  // DEVELOPMENT MODE: Bypass authentication check
  // IMPORTANT: Remove this in production!
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment) {
    return NextResponse.next();
  }
  
  // For admin routes, check authentication and authorization
  const session = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  
  // If not authenticated, redirect to login page
  if (!session) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }
  
  // If authenticated but not an admin, redirect to unauthorized page
  // This is a placeholder - in a real app, you'd check session.user.role
  // This assumes you have user roles in your session token
  const userRoles = (session.roles as string[]) || [];
  const isAdmin = userRoles.includes("admin");
  
  if (!isAdmin) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }
  
  // User is authenticated and authorized, proceed to admin route
  return NextResponse.next();
}

// Configure matcher to only run on admin routes
export const config = {
  matcher: [
    "/admin/:path*",
  ],
}; 