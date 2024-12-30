import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { rules } from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: ["prettier-plugin-tailwindcss"],
    extends: [
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:prettier/recommended",
      "plugin:react-hooks/recommended",
    ],
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
];

export default eslintConfig;
