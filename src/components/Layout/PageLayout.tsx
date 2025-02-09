import { FC, PropsWithChildren } from "react";
import { Container } from "@chakra-ui/react";

export const PageLayout: FC<PropsWithChildren> = ({ children }) => (
  <Container maxW={"3xl"}>{children}</Container>
);
