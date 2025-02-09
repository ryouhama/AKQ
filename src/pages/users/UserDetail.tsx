import { PageLayout } from "components/Layout";

type Props = {
  userId: string;
};

export const UserDetail = ({ userId }: Props) => {
  <PageLayout>Welcome {userId}</PageLayout>;
};
