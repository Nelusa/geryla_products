"use client"
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactNode} from "react";

const queryClient = new QueryClient();

function ReactQueryClientProvider({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryClientProvider;
