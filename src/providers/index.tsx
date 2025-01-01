import QueryProvider from "./QueryProvider";
import RecoilProvider from "./RecoilProvider";
import ThemeProvider from "./ThemeProvider";

const RootProvider = ({
  children,
  lightTheme,
  chartTheme,
}: {
  children: React.ReactNode;
  lightTheme: LightTheme;
  chartTheme: ChartTheme;
}) => {
  return (
    <RecoilProvider>
      <QueryProvider>
        <ThemeProvider
          initialLightTheme={lightTheme}
          initialChartTheme={chartTheme}
        >
          {children}
        </ThemeProvider>
      </QueryProvider>
    </RecoilProvider>
  );
};

export default RootProvider;
