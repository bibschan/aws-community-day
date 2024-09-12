import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef<HTMLAnchorElement, any>(
  (
    { className, variant, size, asChild = false, href, children, ...props },
    ref
  ) => {
    return (
      <a
        href={href}
        target="_blank"
        className={cn("animation-cloud-btn", className)}
        {...props}
        ref={ref}
      >
        <span className="cloud-button-content text-lg">{children}</span>
        <span className="animation-cloud-btn-inner">
          <span className="animation-cloud-parts">
            <span className="animation-cloud-part bg-gradient-to-b from-blue-700 to-blue-300"></span>
            <span className="animation-cloud-part bg-gradient-to-b from-blue-700 to-blue-300"></span>
            <span className="animation-cloud-part bg-gradient-to-b from-blue-700 to-blue-300"></span>
            <span className="animation-cloud-part bg-gradient-to-b from-blue-700 to-blue-300"></span>
          </span>
        </span>
      </a>
    );
  }
);
Button.displayName = "Button";

export { Button };
