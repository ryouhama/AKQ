import {
  createFileRoute,
  notFound,
  useLoaderData,
} from "@tanstack/react-router";
import { PageLayout } from "components/Layout";
import { checkUserId } from "utils/params";

export const Route = createFileRoute("/users/$userId")({
  component: RouteComponent,
  loader: ({ params }) => {
    if (!checkUserId(params.userId)) throw notFound();
    return Number(params.userId);
  },
});

function RouteComponent() {
  const userId = useLoaderData({ from: "/users/$userId" });

  return <PageLayout>Hello {userId}</PageLayout>;
}
