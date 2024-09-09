import ReduxProvider from "@/provider";

const CommonLayout = async ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default CommonLayout;
