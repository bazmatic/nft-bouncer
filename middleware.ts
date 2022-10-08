import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { dbClient } from './services/Db';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest)  {
    //Get bearer from header
    const jwt = request.headers.get('Authorization')?.split(' ')[1];
    const authResponse = await dbClient.auth.getUser(jwt);
    if (authResponse.error || !authResponse?.data?.user) {
        //Return a generic 401 if the user is not authenticated
        //TODO: Redirect to specific errors
        return NextResponse.rewrite(new URL('/api/error/401', request.url));
    }
    //@ts-ignore
    request.user = authResponse.data.user;
    return NextResponse.next()


}


export const config = {
    matcher: ['/api/bouncer/:path*', '/api/nft'],
}