/**
 * Production-only Basic Authentication for Vercel deployments.
 *
 * Set in Vercel (product-mp-official-web → Settings → Environment Variables):
 *   BASIC_AUTH_USER     (Production)
 *   BASIC_AUTH_PASSWORD (Production)
 */
export const config = {
	matcher: '/(.*)',
};

function isAuthorized(request: Request): boolean {
	const user = process.env.BASIC_AUTH_USER;
	const password = process.env.BASIC_AUTH_PASSWORD;

	if (!user || !password) {
		return false;
	}

	const authorization = request.headers.get('authorization');
	if (!authorization?.startsWith('Basic ')) {
		return false;
	}

	const encoded = authorization.slice('Basic '.length);
	const decoded = atob(encoded);
	const separator = decoded.indexOf(':');
	if (separator === -1) {
		return false;
	}

	const providedUser = decoded.slice(0, separator);
	const providedPassword = decoded.slice(separator + 1);

	return providedUser === user && providedPassword === password;
}

export default function middleware(request: Request) {
	// 本番デプロイのみ（Preview / ローカル開発は対象外）
	if (process.env.VERCEL_ENV !== 'production') {
		return;
	}

	if (isAuthorized(request)) {
		return;
	}

	return new Response('Authentication required', {
		status: 401,
		headers: {
			'WWW-Authenticate': 'Basic realm="product-mp-official-web"',
		},
	});
}
