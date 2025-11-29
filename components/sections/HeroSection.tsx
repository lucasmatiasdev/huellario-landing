// components/sections/HeroHuellario.tsx
"use client";

import Image from "next/image";

const categories = [
    { label: "Vestimenta", icon: "👕" },
    { label: "Camitas", icon: "🛏️" },
    { label: "Juguetes", icon: "🦴" },
];

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-[#16A394] text-white">
            {/* PATRÓN DE HUELLA DECORATIVO */}
            <div className="pointer-events-none absolute -right-16 -top-12 hidden h-72 w-72 rotate-12 md:block">
                {/* halo de color de fondo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF9F66]/35 via-[#4FB6B0]/30 to-[#F7C948]/30 blur-md"></div>

                {/* imagen de huella */}
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="relative h-40 w-40 opacity-90">
                        <Image
                            src="/Icon2.png"
                            alt="Huella decorativa de Huellario"
                            fill
                            className="object-contain drop-shadow-md"
                            sizes="160px"
                        />
                    </div>
                </div>
            </div>

            <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-12 md:grid md:grid-cols-2 md:py-20">
                {/* COLUMNA TEXTO */}
                <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-6 animate-fade-up">
                    <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
                        Petshop · Cuidado y estilo
                    </span>

                    <div>
                        <h1 className="text-3xl font-extrabold leading-tight drop-shadow-sm sm:text-4xl lg:text-5xl">
                            Huellario
                        </h1>
                        <p className="mt-2 text-base text-[#E5FBF8] sm:text-lg">
                            Estilo y confort para tu mascota, con productos pensados para
                            acompañar cada momento juntos.
                        </p>
                    </div>

                    {/* CATEGORÍAS */}
                    <div className="mt-2 w-full max-w-md space-y-3">
                        {categories.map((cat) => (
                            <button
                                key={cat.label}
                                className="group flex w-full items-center gap-3 rounded-full bg-[#0F7F74] px-2 py-2 text-sm font-medium shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#AA78DE] text-lg transition-transform duration-300 group-hover:rotate-6">
                                    {cat.icon}
                                </span>
                                <span className="flex-1 text-left tracking-wide">
                                    {cat.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                        <a
                            href="#products"
                            className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#0F7F74] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            Ver productos
                        </a>
                        <a
                            href="https://wa.me/XXXXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                        >
                            Pedir por WhatsApp
                            <span className="text-lg">💬</span>
                        </a>
                    </div>
                </div>

                {/* COLUMNA IMAGEN */}
                <div className="relative flex items-center justify-center md:justify-end">
                    {/* Tarjeta de fondo */}
                    <div className="relative h-72 w-72 max-w-full rounded-[2.5rem] bg-[#0F7F74]/40 backdrop-blur shadow-2xl shadow-black/20 animate-float-slow md:h-90 md:w-90">
                        <div className="absolute inset-3 overflow-hidden rounded-[2rem] bg-gradient-to-t from-[#16A394] via-[#16A394] to-[#24B7A7]">
                            <Image
                                src="/eli.webp"
                                alt="Perrito vistiendo ropa de Huellario"
                                fill
                                sizes="(min-width: 768px) 20rem, 16rem"
                                className="object-contain object-bottom"
                                priority
                            />
                        </div>
                    </div>

                    {/* Badge flotante */}
                    <div className="absolute -bottom-4 rounded-2xl bg-white/90 px-4 py-2 text-xs font-semibold text-[#0F7F74] shadow-lg shadow-black/20 animate-float-slower">
                        <span className="mr-1 text-base">🐾</span>
                        Acompañando a tu mejor amigo
                    </div>
                </div>
            </div>
        </section>
    );
}

