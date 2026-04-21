import { defineConfig } from "vite";
import { patchCssModules } from "vite-css-modules";

export default defineConfig({
  root: "src",
  publicDir: "../public",

  server: {
    port: 3000,
    host: true,
    open: true,
  },

  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourceMap: true,

    rollupOptions: {
      output: {
        chunkFileNames: "js/[name].[hash].js",
        entryFileNames: "js/[name].[hash].js",

        assetFileNames: (assetInfo) => {
          // Картинки
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name || "")) {
            return "images/[name].[hash][extname]";
          }

          // Шрифты
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || "")) {
            return "fonts/[name].[hash][extname]";
          }

          // Видео
          if (/\.(mp4|webm|ogg)$/i.test(assetInfo.name || "")) {
            return "videos/[name].[hash][extname]";
          }

          if (/\.css$/i.test(assetInfo.name || "")) {
            return "styles/[name].[hash][extname]";
          }

          // Остальные ассеты (CSS, иконки и т.д.)
          return "assets/[name].[hash][extname]";
        },
      },
    },
  },

  plugins: [patchCssModules()],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]_[local]__[hash:base64:5]",
    },
  },
});
