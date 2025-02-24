document.addEventListener("DOMContentLoaded", async () => {
  try {
    // 헤더 불러오기
    const headerResponse = await fetch("/partials/header.html"); // ✅ 절대 경로 사용
    if (!headerResponse.ok) throw new Error("헤더 파일을 찾을 수 없음!");
    const header = await headerResponse.text();
    document.querySelector("#header").innerHTML = header;

    // 푸터 불러오기
    const footerResponse = await fetch("/partials/footer.html"); // ✅ 절대 경로 사용
    if (!footerResponse.ok) throw new Error("푸터 파일을 찾을 수 없음!");
    const footer = await footerResponse.text();
    document.querySelector("#footer").innerHTML = footer;
  } catch (error) {
    console.error("파일 로드 오류:", error);
  }
});
