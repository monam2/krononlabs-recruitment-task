"use client";

import { cookies } from "next/headers";
import { ReactNode, useEffect, useState } from "react";

type LightTheme = "light" | "dark";
type ChartTheme = "fresh" | "traditinal" | "colorVisionDeficiency";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default ThemeProvider;
