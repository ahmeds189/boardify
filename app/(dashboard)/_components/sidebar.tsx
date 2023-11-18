"use client";

import { Accordion } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import NavItem, { Organization } from "./nav-item";

import Link from "next/link";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useLocalStorage } from "usehooks-ts";

type Props = {
  storageKey?: string;
};

export default function Sidebar({ storageKey = "expanded-org" }: Props) {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  const { organization: activeOrg, isLoaded: isLoadedOrg } = useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }

      return acc;
    },
    []
  );

  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return <Skeleton className="h-20 w-52" />;
  }

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  return (
    <aside className="hidden md:block basis-52 lg:basis-72 shrink-0">
      <Link
        href="/select-org"
        className="w-full flex justify-between items-center text-sm mb-5"
      >
        <span>organizations</span>
        <span>
          <Plus size={19} />
        </span>
      </Link>
      <Accordion
        type="multiple"
        defaultValue={defaultAccordionValue}
        className="space-y-2"
      >
        {userMemberships.data.map(({ organization }) => (
          <NavItem
            key={organization.id}
            isActive={activeOrg?.id === organization.id}
            isExpanded={expanded[organization.id]}
            organization={organization as Organization}
            onExpand={onExpand}
          />
        ))}
      </Accordion>
    </aside>
  );
}
