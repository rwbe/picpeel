"use client";
import { URLS } from "@/lib/urls";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import siteMetadata from "../../data/siteMetadata";

const Logo: FC = () => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Não renderiza até que o componente esteja montado para evitar discrepâncias de tema no servidor
  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <Link href={URLS.HOMEPAGE} className="flex items-center gap-2 component-focus rounded-md">
      <img
        src={currentTheme === 'dark' ? siteMetadata.siteLogoDark : siteMetadata.siteLogoLight}
        alt="PicPeel Logo"
        className="w-36 md:w-36 h-auto" // Classes do Tailwind CSS para tamanho
      />
    </Link>
  );
};

export default Logo;
