import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  try {
    // Try to list available models
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1/models?key=" + apiKey
    );

    const data = await response.json();

    return NextResponse.json({
      statusCode: response.status,
      hasApiKey: !!apiKey,
      apiKeyPreview: apiKey ? apiKey.substring(0, 10) + "..." : "NOT_SET",
      response: data,
    });
  } catch (error) {
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Unknown error",
      hasApiKey: !!apiKey,
    });
  }
}
