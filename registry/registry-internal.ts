import { Registry } from "@/registry/schema";

export const internal: Registry = [
  {
    name: "sink",
    type: "registry:internal",
    registryDependencies: [
      // registry:ui
      "accordion",
      "alert",
      "alert-dialog",
      "aspect-ratio",
      "avatar",
      "badge",
      "breadcrumb",
      "button",
      "calendar",
      "card",
      "carousel",
      "chart",
      "checkbox",
      "collapsible",
      "command",
      "context-menu",
      "dialog",
      "drawer",
      "dropdown-menu",
      // "form",
      "hover-card",
      "input",
      "label",
      "navigation-menu",
      "pagination",
      "popover",
      "progress",
      "radio-group",
      "resizable",
      "scroll-area",
      "select",
      "separator",
      "sidebar",
      "skeleton",
      "slider",
      "sonner",
      "switch",
      "table",
      "tabs",
      "textarea",
      "tooltip",
    ],
    files: [
      {
        path: "internal/sink/page.tsx",
        type: "registry:page",
        target: "app/sink/page.tsx",
      },
      {
        path: "internal/sink/components/app-sidebar.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/component-wrapper.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/nav-main.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/nav-projects.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/nav-user.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/team-switcher.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/accordion-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/alert-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/alert-dialog-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/aspect-ratio-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/avatar-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/badge-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/breadcrumb-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/button-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/calendar-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/card-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/carousel-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/checkbox-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/collapsible-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/combobox-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/command-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/context-menu-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/date-picker-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/dialog-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/dropdown-menu-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/hover-card-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/input-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/label-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/navigation-menu-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/pagination-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/popover-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/progress-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/radio-group-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/resizable-handle.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/scroll-area-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/select-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/separator-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/skeleton-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/slider-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/sonner-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/switch-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/table-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/tabs-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/textarea-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/tooltip-demo.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/badge-destructive.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/badge-outline.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/badge-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/button-destructive.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/button-ghost.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/button-link.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/button-loading.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/button-outline.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/button-secondary.tsx",
        type: "registry:component",
      },
      {
        path: "internal/sink/components/button-with-icon.tsx",
        type: "registry:component",
      },
    ],
  },
];
