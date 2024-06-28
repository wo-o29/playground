import type { AppProps } from "next/app";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import QueryErrorBoundary from "@/components/QueryErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 0, // 1분
            gcTime: 1 * 60 * 1000, // 5분
            retry: false,
            throwOnError: true,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        {/* <QueryErrorBoundary> */}
        <Component {...pageProps} />
        {/* </QueryErrorBoundary> */}
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
