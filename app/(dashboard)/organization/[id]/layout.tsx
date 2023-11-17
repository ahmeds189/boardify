import { type PropsWithChildren } from "react";
import ActiveOrg from "./_components/active-org";

const OrganizationIdLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ActiveOrg />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
