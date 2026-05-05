"use client";

import { Button } from "@esc/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@esc/ui/components/dropdown-menu";
import { Icon } from "@esc/ui/components/icon";
import { TranslationIcon } from "@hugeicons/core-free-icons";
import { useTranslations } from "next-intl";
import { useI18n } from "@/i18n/hook";
import { LANGUAGES } from "@/i18n/routing";

export const LanguageToggle = () => {
  const t = useTranslations("locale");
  const { currentLocale, handleChangeLocale } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-9">
          <Icon icon={TranslationIcon} className="size-6!" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent aria-label="Languages" className="min-w-fit">
        {LANGUAGES.map((locale) => (
          <DropdownMenuCheckboxItem
            key={locale}
            onClick={() => handleChangeLocale(locale)}
            checked={currentLocale === locale}
          >
            {t(locale)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
