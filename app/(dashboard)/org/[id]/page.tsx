"use client";
import { useOrganization } from "@clerk/nextjs";

export default function OrganizationPage() {
  const { organization } = useOrganization();

  return (
    <>
      <p>{organization?.name}</p>
      <p>{organization?.id}</p>
    </>
  );
}
