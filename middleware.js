import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname, searchParams } = request.nextUrl; // Get the URL path and query parameters
    const fullUrl = request.nextUrl.href; // Full URL including domain and path


    // Detect country-based keywords in URL
    if (pathname.toLowerCase().includes("kenya")) {
        console.log("Middleware detected Kenya");
        request.headers.set("x-country", "kenya");
    } else if (pathname.toLowerCase().includes("bangladesh")) {
        console.log("Middleware detected Bangladesh");
        request.headers.set("x-country", "bangladesh");
    } else {
        console.log("Middleware detected Default Region");
        request.headers.set("x-country", "default");
    }

    return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
    matcher: "/:path*", // Runs middleware on all routes
};
