import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, truncate } from "@/lib/utils";

import { Activity, CreditCard, Layout, Settings } from "lucide-react";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export type Organization = {
  id: string;
  slug: string;
  imageUrl: string;
  name: string;
};

type Props = {
  isActive: boolean;
  isExpanded: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
};

export default function NavItem({
  organization,
  onExpand,
  isActive,
  isExpanded,
}: Props) {
  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 me-2" />,
      href: `/org/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 me-2" />,
      href: `/org/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 me-2" />,
      href: `/org/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="h-4 w-4 me-2" />,
      href: `/org/${organization.id}/billing`,
    },
  ];

  const pathname = usePathname();
  const router = useRouter();
  const onClick = (href: string) => {
    router.push(href);
  };

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex rounded-md no-underline hover:no-underline gap-x-2 p-1.5 hover:bg-foreground/5 transition",
          isActive &&
            !isExpanded &&
            "bg-sky-500/10 text-sky-700 hover:bg-sky-400/20"
        )}
      >
        <Image
          src={organization.imageUrl}
          alt="organization image"
          className="object-cover rounded-sm"
          width={27}
          height={27}
        />
        <p className="text-sm font-medium flex-1 text-start">
          {truncate(organization.name, 20)}
        </p>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col space-y-1 p-2">
        {routes.map((route) => (
          <Button
            variant="ghost"
            size="sm"
            key={route.href}
            onClick={() => onClick(route.href)}
            className={cn(
              "justify-start font-normal ps-8 hover:bg-foreground/5",
              pathname === route.href &&
                "bg-sky-500/10 text-sky-700 hover:bg-sky-400/20 hover:text-sky-700"
            )}
          >
            {route.icon} {route.label}
          </Button>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}

NavItem.Skeleton = function SkeletonNavItem() {
  return (
    <div className="flex gap-2 mb-3">
      <Skeleton className="basis-12 h-9" />
      <Skeleton className="basis-full h-9" />
    </div>
  );
};
