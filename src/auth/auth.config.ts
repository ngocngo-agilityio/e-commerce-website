// Libs
import { APP_ROUTERS } from '@constants';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isPublicPage =
        nextUrl.pathname === APP_ROUTERS.SIGN_IN ||
        nextUrl.pathname === APP_ROUTERS.SIGN_UP;

      // If use has not logged in and access to Dashboard pages, navigate to Login Page
      if (!isLoggedIn && !isPublicPage) {
        return Response.redirect(new URL(APP_ROUTERS.SIGN_IN, nextUrl));
      }

      // If user has logged in and access to Login page, navigate to Dashboard page
      if (isLoggedIn && isPublicPage) {
        return Response.redirect(new URL(APP_ROUTERS.HOME_PAGE, nextUrl));
      }

      return true;
    },
  },
  trustHost: true,
  providers: [],
} satisfies NextAuthConfig;
