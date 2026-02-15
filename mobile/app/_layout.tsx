import { Stack } from 'expo-router';
import { ClerkProvider } from '@clerk/clerk-expo';
import '../global.css';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
const queryClient = new QueryClient();
export default function RootLayout() {
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tabs)" options={{ animation: 'fade' }} />
          <Stack.Screen name="(auth)" options={{ animation: 'fade' }} />
        </Stack>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
