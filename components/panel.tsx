import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { cn } from "@/lib/utils";

const Panel = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        data-slot="panel"
        className={cn(
          "screen-line-before screen-line-after border-x border-edge",
          className,
        )}
        {...props}
      />
    );
  },
);
Panel.displayName = "Panel";

const PanelHeader = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => {
  return (
    <header
      ref={ref}
      data-slot="panel-header"
      className={cn("screen-line-after px-4", className)}
      {...props}
    />
  );
});
PanelHeader.displayName = "PanelHeader";

const PanelTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      ref={ref}
      data-slot="panel-title"
      className={cn("text-3xl font-semibold", className)}
      {...props}
    />
  );
});
PanelTitle.displayName = "PanelTitle";

const PanelContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="panel-body"
      className={cn("p-4", className)}
      {...props}
    />
  );
});
PanelContent.displayName = "PanelContent";

export { Panel, PanelContent, PanelHeader, PanelTitle };
