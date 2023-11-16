import Logo from "@/app/_components/logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer>
      <div className="container flex items-center space-x-2 py-3">
        <Logo className="mr-auto" />
        <Button variant="link">Privacy Policy</Button>
        <Button variant="link">Terms of Service</Button>
      </div>
    </footer>
  );
}
