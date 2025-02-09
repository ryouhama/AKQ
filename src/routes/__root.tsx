import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <ChakraProvider value={defaultSystem}>
      {/* Header */}
      <Outlet />
      {/* Footer */}
      <TanStackRouterDevtools />
    </ChakraProvider>
  ),
});
