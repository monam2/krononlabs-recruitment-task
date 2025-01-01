import { cookies } from "next/headers";

/**
 * 초기 테마
 * 다크 모드 : light
 * 차트 모드 : fresh
 *
 * Next15 버전부터 헤더, 쿠키 등을 비동기로 제어
 */

export default async function getInitialTheme() {
  const cookieStore = cookies();
  const lightTheme =
    ((await cookieStore).get("lightTheme")?.value as LightTheme) || "light";
  const chartTheme =
    ((await cookieStore).get("chartTheme")?.value as ChartTheme) || "fresh";

  return { lightTheme, chartTheme };
}
