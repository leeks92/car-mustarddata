import { CALCULATOR_PAGES, GUIDE_PAGES, INFO_PAGES, BASE_URL } from '@/lib/urls';

export const dynamic = 'force-static';

export async function GET() {
  const now = new Date();
  const pubDate = now.toUTCString();

  const items: string[] = [];

  // 메인 페이지
  items.push(`
    <item>
      <title><![CDATA[자동차 계산기 - 자동차세, 취등록세, 할부금, 유류비 계산]]></title>
      <link>${BASE_URL}</link>
      <guid>${BASE_URL}</guid>
      <description><![CDATA[자동차세, 취등록세, 할부금, 유류비, 감가상각, 과태료 등 자동차 관련 비용을 2026년 최신 법령 기준으로 계산합니다.]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`);

  // 각 계산기 페이지
  CALCULATOR_PAGES.forEach((calc) => {
    const url = `${BASE_URL}${calc.path}`;
    items.push(`
    <item>
      <title><![CDATA[${calc.title} - ${calc.description}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description><![CDATA[${calc.description}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`);
  });

  // 가이드 페이지
  GUIDE_PAGES.forEach((page) => {
    const url = `${BASE_URL}${page.path}`;
    items.push(`
    <item>
      <title><![CDATA[${page.title} - ${page.description}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description><![CDATA[${page.description}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`);
  });

  // 정보 페이지
  INFO_PAGES.forEach((page) => {
    const url = `${BASE_URL}${page.path}`;
    items.push(`
    <item>
      <title><![CDATA[${page.title} - ${page.description}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description><![CDATA[${page.description}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`);
  });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>자동차 계산기 - 자동차세, 취등록세, 할부금, 유류비</title>
    <link>${BASE_URL}</link>
    <description>자동차세, 취등록세, 할부금, 유류비, 감가상각, 과태료 등 자동차 관련 비용을 2026년 최신 법령 기준으로 정확하게 계산합니다.</description>
    <language>ko</language>
    <lastBuildDate>${now.toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items.join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=604800, s-maxage=604800',
    },
  });
}
