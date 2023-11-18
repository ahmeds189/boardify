import { type PropsWithChildren } from "react";
import { OrgSwitcher } from "./_components/org-switcher";

export default function OrganizationLayout({ children }: PropsWithChildren) {
  return (
    <>
      <OrgSwitcher />
      {children}
    </>
  );
}
