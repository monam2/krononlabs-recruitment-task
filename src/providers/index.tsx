import QueryProvider from "./QueryProvider";
import RecoilProvider from "./RecoilProvider";
import ThemeProvider from "./ThemeProvider";

const index = ({ children }: { children: React.ReactNode }) => {
  return (
    <RecoilProvider>
      <QueryProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </QueryProvider>
    </RecoilProvider>
  );
};

export default index;
