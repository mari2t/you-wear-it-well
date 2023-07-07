import { NextResponse } from "next/server";

export async function GET(request) {
  const encodedCity = request.nextUrl.searchParams.get("encodedCity");
  const res = await fetch(
    `${process.env.WEATHER_API_BASE_URL}${encodedCity}&appid=${process.env.WEATHER_API_KEY}&lang=ja&units=metric`
  );

  const data = await res.json();

  return NextResponse.json(data);
}
