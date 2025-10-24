/**
 * Convex Authentication Configuration
 *
 * Configures Clerk as the authentication provider for Convex
 * The CLERK_JWT_ISSUER_DOMAIN is set via: npx convex env set
 */

export default {
  providers: [
    {
      domain: "https://main-kid-84.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
};
