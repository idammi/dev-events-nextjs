import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Event } from '@/database';

// Define the type for route params
type RouteParams = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * GET /api/events/[slug]
 * Fetches a single event by its slug
 */
export async function GET(
  req: NextRequest,
  { params }: RouteParams
): Promise<NextResponse> {
  try {
    // Await params to get the slug (Next.js 15+ async params)
    const { slug } = await params;

    // Validate slug parameter
    if (!slug || typeof slug !== 'string' || slug.trim() === '') {
      return NextResponse.json(
        { error: 'Invalid or missing slug parameter' },
        { status: 400 }
      );
    }

    // Sanitize slug (remove any potential malicious input)
    const sanitizedSlug = slug.trim().toLowerCase();

    // Connect to database
    await connectDB();

    // Query event by slug
    const event = await Event.findOne({ slug: sanitizedSlug }).lean();

    // Handle event not found
    if (!event) {
      return NextResponse.json(
        { error: `Event with slug '${sanitizedSlug}' not found` },
        { status: 404 }
      );
    }

    // Return the event data
    return NextResponse.json( { message: 'Event fetched successfully', event }, { status: 200 } );
  } catch (error) {
    // Handle Mongoose/MongoDB specific errors
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Failed to fetch event', message: error.message },
        { status: 500 }
      );
    }

    // Handle unexpected errors
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
