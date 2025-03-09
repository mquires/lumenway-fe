import { NextRequest, NextResponse } from 'next/server';
import { RoutePaths } from './libs/constants/routes.constants';

export default function middleware(request: NextRequest) {
  const { cookies, nextUrl } = request;

  // Check if user has active session
  const session = cookies.get('session')?.value;

  // Define route types
  const isAuthRoute = nextUrl.pathname.startsWith('/account');
  const isDeactivateRoute = nextUrl.pathname === RoutePaths.auth.deactivate;
  const isDashboardRoute = nextUrl.pathname.startsWith('/dashboard');

  // Redirect to login if trying to access protected routes without session
  if ((!session && isDashboardRoute) || (!session && isDeactivateRoute)) {
    return NextResponse.redirect(new URL(RoutePaths.auth.login, request.url));
  }

  // Redirect to dashboard if trying to access auth routes with active session
  if (session && isAuthRoute && !isDeactivateRoute) {
    return NextResponse.redirect(
      new URL(RoutePaths.dashboard.settings, request.url),
    );
  }

  return NextResponse.next();
}

// Define which routes should be handled by middleware
export const config = {
  matcher: ['/account/:path*', '/dashboard/:path*'],
};
