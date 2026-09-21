"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useGarageStore } from "@/store/useGarageStore";
import { MobileMenu } from "./MobileMenu";
import {
  ShoppingBag,
  Car,
  Menu,
  ChevronDown,
  Search,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { openCart, getTotalItems } = useCartStore();
  const { selectedVehicle, openModal } = useGarageStore();
  const totalCartItems = getTotalItems();

  const navLinks = [
    { href: "/catalogo", label: "Tienda" },
    { href: "/vehiculos", label: "Vehículos" },
    { href: "/servicios", label: "Reprogramación" },
    { href: "/servicios#mantenciones", label: "Mantención" },
    { href: "/importaciones", label: "Importación" },
    { href: "/contacto", label: "Taller & Ubicación" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#08080A]/90 backdrop-blur-md border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center gap-8">
              <Link href="/" className="relative block w-44 sm:w-52 h-12 shrink-0 group">
                <Image
                  src="/images/logo/zrpm-logo.png"
                  alt="ZRPM Racing Engine"
                  fill
                  priority
                  className="object-contain object-left group-hover:brightness-110 transition-all"
                />
              </Link>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href.split("#")[0]);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                        isActive
                          ? "text-white bg-surface-muted border-b-2 border-motorsport-red"
                          : "text-motorsport-steel hover:text-white hover:bg-surface-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right Action Icons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Garage / Vehicle Finder Quick Trigger */}
              <button
                onClick={openModal}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-surface-border bg-surface-100 hover:border-motorsport-red/70 hover:bg-surface-muted transition-all text-xs"
                title="Selecciona o cambia tu vehículo para filtrar repuestos compatibles"
              >
                <Car className="w-3.5 h-3.5 text-motorsport-red" />
                <span className="font-mono text-white max-w-[140px] truncate">
                  {selectedVehicle
                    ? `${selectedVehicle.make.name} ${selectedVehicle.model.name}`
                    : "Mi Vehículo"}
                </span>
                <ChevronDown className="w-3 h-3 text-motorsport-steel" />
              </button>

              {/* Quick Search Link */}
              <Link
                href="/catalogo"
                className="p-2.5 rounded-lg text-motorsport-steel hover:text-white hover:bg-surface-muted transition-colors border border-transparent hover:border-surface-border"
                title="Buscar productos"
              >
                <Search className="w-4 h-4" />
              </Link>

              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative p-2.5 rounded-lg text-motorsport-steel hover:text-white hover:bg-surface-muted transition-colors border border-transparent hover:border-surface-border"
                title="Ver carro de compras"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 bg-motorsport-red text-white text-[10px] font-mono font-extrabold rounded-full flex items-center justify-center shadow-motorsport-glow animate-pulse">
                    {totalCartItems}
                  </span>
                )}
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-lg text-motorsport-steel hover:text-white hover:bg-surface-muted transition-colors border border-surface-border"
                aria-label="Abrir menú"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
