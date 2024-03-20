export async function GET() {
  return new Response("Hello, Next.js")
}

// No default exports for next.js route handlers
/**
 * API routes in next.js are evaluated in one of the two ways: statically and dynamically, GET methods without request object are handled statically
 * HTTP methods other than GET are evaluated dynamically,
 * Methods using dynamic functions like cookies are also evaluated dynamically
 * GET methods with the request object are evaluated dynamically
 * Q: Diff between static and dynamic evaluation of api routes.
 */