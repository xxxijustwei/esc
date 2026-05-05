"use client";

import { Button } from "@esc/ui/components/button";
import { Icon } from "@esc/ui/components/icon";
import {
  MonitorDotIcon,
  Moon02Icon,
  Sun03Icon,
} from "@hugeicons/core-free-icons";
import { useTheme } from "next-themes";
import { useCallback } from "react";

const THEME_ICONS = {
  system: MonitorDotIcon,
  light: Sun03Icon,
  dark: Moon02Icon,
} as const;

export const ThemeToggle = () => {
  const { setTheme, theme, themes } = useTheme();

  const toggle = useCallback(() => {
    if (!theme) return;
    const nextTheme = themes[themes.indexOf(theme) + 1] || themes[0];
    setTheme(nextTheme);
  }, [theme, themes, setTheme]);

  return (
    <Button variant="ghost" size="icon" onClick={toggle}>
      <Icon
        icon={THEME_ICONS[theme as keyof typeof THEME_ICONS]}
        className="size-6!"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
