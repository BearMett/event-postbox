import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const preview = {
      title: $('meta[property="og:title"]').attr('content') || $('title').text(),
      description: $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content'),
      image: $('meta[property="og:image"]').attr('content'),
      url: url
    };

    return NextResponse.json(preview);
  } catch (_error) {
    return NextResponse.json({ error: '링크 미리보기를 가져올 수 없습니다.' }, { status: 500 });
  }
} 