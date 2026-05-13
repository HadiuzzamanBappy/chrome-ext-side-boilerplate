import { AlertCircle } from "lucide-react";
import pkg from "../../package.json";

export function Footer() {
  return (
    <footer className="p-4 border-t bg-card/30">
      <div className="flex items-center justify-between text-[10px] text-muted-foreground">
        <div className="flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          V{pkg.version} Alpha
        </div>
        <a href="#" className="hover:text-primary transition-colors">
          Documentation
        </a>
      </div>
    </footer>
  );
}
