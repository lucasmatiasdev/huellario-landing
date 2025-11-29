"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((prev) => !prev);
    const close = () => setOpen(false);

    return (
        <header className="sticky top-0 z-30 bg-[#FFF7EC]/95 backdrop-blur border-b border-[#F3E4D8]">
            <div className="mx-auto max-w-6xl px-4">
                {/* FILA PRINCIPAL */}
                <div className="flex h-16 items-center justify-between">
                    {/* LOGO + NOMBRE */}
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                        onClick={close}
                    >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4bddcc] shadow-md shadow-black/10">
                            <Image
                                src="/Icon.png"
                                alt="Logo de Huellario"
                                width="30"
                                height="30"
                            />
                        </div>
                        <div className="leading-tight">
                            <div className="text-base font-extrabold text-[#1F2933]">
                                Huellario
                            </div>
                            <div className="hidden text-xs text-[#6B7280] sm:block">
                                Estilo y confort para tu mascota
                            </div>
                        </div>
                    </Link>

                    {/* NAV DESKTOP */}
                    <nav className="hidden items-center gap-6 text-sm font-medium text-[#0F7F74] md:flex">
                        <a
                            href="#Inicio"
                            className="hover:text-[#FF9F66] transition-colors"
                        >
                            Inicio
                        </a>
                        <a
                            href="#Productos"
                            className="hover:text-[#FF9F66] transition-colors"
                        >
                            Productos
                        </a>
                        <a
                            href="#Beneficios"
                            className="hover:text-[#FF9F66] transition-colors"
                        >
                            Beneficios
                        </a>
                    </nav>

                    {/* HAMBURGUESA MOBILE */}
                    <button
                        type="button"
                        onClick={toggle}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#F3E4D8] bg-white text-[#0F7F74] shadow-sm transition-colors hover:bg-[#FFEFE3] md:hidden"
                        aria-label="Abrir menú"
                        aria-expanded={open}
                    >
                        <span className="relative block h-3 w-4">
                            <span
                                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${open ? "translate-y-1.5 rotate-45" : ""
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-1.5 h-0.5 w-full rounded-full bg-current transition-opacity duration-150 ${open ? "opacity-0" : "opacity-100"
                                    }`}
                            />
                            <span
                                className={`absolute left-0 top-3 h-0.5 w-full rounded-full bg-current transition-transform duration-200 ${open ? "-translate-y-1.5 -rotate-45" : ""
                                    }`}
                            />
                        </span>
                    </button>
                </div>

                {/* NAV MOBILE (EN FLUJO, EMPUJA EL CONTENIDO) */}
                {open && (
                    <nav className="flex flex-col gap-2 pb-4 text-sm font-medium text-[#0F7F74] md:hidden">
                        <a
                            href="#Inicio"
                            onClick={close}
                            className="rounded-full bg-white px-4 py-2 shadow-sm shadow-black/5 border border-[#F3E4D8] hover:bg-[#FFEFE3] transition-colors"
                        >
                            Inicio
                        </a>
                        <a
                            href="#Productos"
                            onClick={close}
                            className="rounded-full bg-white px-4 py-2 shadow-sm shadow-black/5 border border-[#F3E4D8] hover:bg-[#FFEFE3] transition-colors"
                        >
                            Productos
                        </a>
                        <a
                            href="#Beneficios"
                            onClick={close}
                            className="rounded-full bg-white px-4 py-2 shadow-sm shadow-black/5 border border-[#F3E4D8] hover:bg-[#FFEFE3] transition-colors"
                        >
                            Beneficios
                        </a>
                    </nav>
                )}
            </div>
        </header>
    );
}
