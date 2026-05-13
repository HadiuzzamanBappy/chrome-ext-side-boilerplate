import { Zap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 h-14 border-b bg-card/50 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
          <Zap className="w-4 h-4 text-primary-foreground fill-current" />
        </div>
        <span className="font-bold tracking-tight">PageMind</span>
      </div>
      <ThemeToggle />
    </header>
  );
}
