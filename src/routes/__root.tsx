import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Layout } from "components/PageLayout";

export const Route = createRootRoute({
  component: () => (
    <Layout>
      {/* Header */}
      <Outlet />
      {/* Footer */}
      <TanStackRouterDevtools />
    </Layout>
  ),
});
