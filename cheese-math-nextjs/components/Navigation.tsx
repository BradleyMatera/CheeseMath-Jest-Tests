'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { 
  SunIcon, 
  MoonIcon,
  CalculatorIcon,
  BeakerIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'Basic Calculator', href: '#basic', icon: CalculatorIcon },
    { name: 'Advanced Tools', href: '#advanced', icon: BeakerIcon },
    { name: 'Regex Analyzer', href: '#regex', icon: CodeBracketIcon },
    { name: 'Card Obscurer', href: '#card', icon: ShieldCheckIcon },
  ];

  if (!mounted) return null;

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="bg-background/70 backdrop-blur-md border-b border-divider"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit flex items-center gap-2">
            <span className="text-2xl">🧀</span>
            <span className="hidden sm:inline">CheeseMath</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.slice(1).map((item) => (
          <NavbarItem key={item.name}>
            <Link color="foreground" href={item.href} className="hover:text-primary transition-colors">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={index === 0 ? 'primary' : 'foreground'}
              className="w-full flex items-center gap-2"
              href={item.href}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.icon && <item.icon className="w-5 h-5" />}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
