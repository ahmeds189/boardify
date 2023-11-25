"use client";

import { Accordion } from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";
import NavItem, { Organization } from "./nav-item";

import Link from "next/link";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { useLocalStorage } from "usehooks-ts";
import { cn } from "@/lib/utils";

type Props = {
  storageKey?: string;
  className?: string;
};

export default function Sidebar({
  storageKey = "expanded-org",
  className,
}: Props) {
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

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  // handle loading state
  if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
      <aside className="basis-52 hidden md:block">
        <Skeleton className="h-10 w-full mb-5" />
        <NavItem.Skeleton />
        <Skeleton className="h-10 w-[78%] ml-auto mb-5" />
        <Skeleton className="h-10 w-[78%] ml-auto mb-5" />
        <Skeleton className="h-10 w-[78%] ml-auto mb-5" />
        <NavItem.Skeleton />
        <Skeleton className="h-10 w-[78%] ml-auto mb-5" />
        <Skeleton className="h-10 w-[78%] ml-auto mb-5" />
        <Skeleton className="h-10 w-[78%] ml-auto mb-5" />
      </aside>
    );
  }

  return (
    <aside className={cn("basis-52 shrink-0", className)}>
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
