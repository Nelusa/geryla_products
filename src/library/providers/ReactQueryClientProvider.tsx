"use client"
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function ReactQueryClientProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryClientProvider;
