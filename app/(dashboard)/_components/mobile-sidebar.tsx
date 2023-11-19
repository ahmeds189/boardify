"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useEffectOnce } from "usehooks-ts";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import Sidebar from "./sidebar";

export default function MobileSidebar() {
  const [isMouted, setIsMounted] = useState(false);
  const pathname = usePathname();

  const isOpen = useMobileSidebar((state) => state.isOpen);
  const onClose = useMobileSidebar((state) => state.onClose);

  useEffectOnce(() => {
    setIsMounted(true);
  });

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMouted) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left">
        <Sidebar storageKey="expanded-org-mobile" className="pt-10" />
      </SheetContent>
    </Sheet>
  );
}
