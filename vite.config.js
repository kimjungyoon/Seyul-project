import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/Seyul-project/" : "/", // ✅ GitHub Pages에서는 "/Seyul-project/" 적용
  build: {
    outDir: "dist",
  },
  server: {
    port: 5173, // ✅ 로컬 개발 시 사용할 포트
    open: true,  // ✅ 서버 실행 시 자동으로 브라우저 열기
  },
});
