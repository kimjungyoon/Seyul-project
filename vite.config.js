import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // ✅ 프로젝트 루트를 기본 경로로 설정 (index.html 자동 서빙)
  publicDir: "public", // ✅ public/ 폴더를 정적 파일 폴더로 설정
  server: {
    port: 5173,
    open: true, // ✅ Vite 실행 시 자동으로 브라우저 열기
  },
  base: "/Seyul-project/", // ✅ GitHub 저장소 이름을 입력!
  build: {
    outDir: "dist",
  },
});
