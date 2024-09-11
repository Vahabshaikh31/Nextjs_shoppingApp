import { auth } from "@/auth";
import ReduxProvider from "@/provider";
import { Suspense } from "react";
import Loading from "@/app/loading";

const CommonLayout = async ({ children }) => {
  const getSession = await auth();

  return (
    <ReduxProvider getSession={getSession}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ReduxProvider>
  );
};

export default CommonLayout;
