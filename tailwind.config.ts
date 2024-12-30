import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        binance: ["var(--binance-plex)", "sans-serif"],
      },
      fontSize: {
        root: "12px",
        "heading-1": "52px",
        "heading-2": "48px",
        "heading-3": "30px",
        "heading-4": "24px",
        "content-1": "18px",
        "content-2": "16px",
        "content-3": "14px",
      },
      colors: {
        // chart
        fresh: {
          positive: "var(--color-Success)",
          negative: "#f7465e",
        },
        traditinal: {
          positive: "#74A800",
          negative: "#EA0070",
        },
        colorVisionDeficiency: {
          positive: "#1C8DF9",
          negative: "#EB8D42",
        },

        // global.css color
        sell: {
          DEFAULT: "var(--color-sell)",
          text: "var(--color-textSell)",
          hover: "var(--color-sellHover)",
          depth: "var(--color-depthSellBg)",
        },
        buy: {
          DEFAULT: "var(--color-buy)",
          text: "var(--color-textBuy)",
          hover: "var(--color-buyHover)",
          depth: "var(--color-depthBuyBg)",
        },
        line: "var(--color-line)",
        outlineHover: "var(--color-outlineHover)",
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primaryHover)",
        },
        error: {
          DEFAULT: "var(--color-error)",
          bg: "var(--color-errorBg)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          bg: "var(--color-successBg)",
        },
        disable: "var(--color-disable)",
        iconNormal: "var(--color-iconNormal)",
        text: {
          white: "var(--color-textWhite)",
          gray: "var(--color-textGray)",
          black: "var(--color-textBlack)",
          primary: "var(--color-textPrimary)",
          secondary: "var(--color-textSecondary)",
          third: "var(--color-textThird)",
          disabled: "var(--color-textDisabled)",
          brand: "var(--color-textBrand)",
          toast: "var(--color-textToast)",
        },
        bg: {
          DEFAULT: "var(--color-bg)",
          1: "var(--color-bg1)",
          2: "var(--color-bg2)",
          3: "var(--color-bg3)",
          4: "var(--color-bg4)",
          6: "var(--color-bg6)",
          7: "var(--color-bg7)",
        },
        popupBg: "var(--color-popupBg)",
        badgeBg: "var(--color-badgeBg)",
        selectedBg: "var(--color-selectedBg)",
        gradient: {
          brand: "var(--color-gradientBrand)",
          primary: "var(--color-gradientPrimary)",
        },
        input: {
          DEFAULT: "var(--color-Input)",
          line: "var(--color-InputLine)",
        },
        cardBg: "var(--color-CardBg)",
        vessel: "var(--color-Vessel)",
        disableBtn: "var(--color-DisableBtn)",
        placeholder: "var(--color-Placeholder)",
        toastBg: "var(--color-ToastBg)",
        tagBg: "var(--color-TagBg)",
        grid: "var(--color-Grid)",
      },
    },
  },
  plugins: [],
} satisfies Config;
