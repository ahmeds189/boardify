import Logo from "@/app/_components/logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="container flex items-center space-x-2 py-3 border-t">
        <Logo className="mr-auto" />
        <Button
          variant="link"
          size="sm"
          className="text-xs sm:text-sm p-0 text-muted-foreground"
        >
          Privacy Policy
        </Button>
        <Button
          variant="link"
          size="sm"
          className="text-xs sm:text-sm p-0 text-muted-foreground"
        >
          Terms of Service
        </Button>
      </div>
    </footer>
  );
}
