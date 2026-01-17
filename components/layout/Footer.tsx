"use client";
import Link from "next/link";

interface FooterHuellarioProps {
    email?: string;
    phone?: string;
    instagramUrl?: string;
    facebookUrl?: string;
    whatsappUrl?: string;
}

export function Footer({
    email = "xxx",
    phone = "xxx",
    instagramUrl = "xxx",
    facebookUrl = "xxx",
    whatsappUrl = "xxx",
}: FooterHuellarioProps) {

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        if (href?.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                close();
            }
        }
    };

    return (
        <footer className="mt-10 bg-[#16A394] text-white">
            <div className="mx-auto max-w-6xl px-4 py-6 md:py-7">
                {/* GRID PRINCIPAL: 1 col en mobile, 2 en md, 3 en lg */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.4fr,1fr,1.5fr] md:items-start">
                    {/* Columna 1: marca + resumen */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                                <span className="text-xl">🐾</span>
                            </div>
                            <div className="leading-tight">
                                <p className="text-base font-extrabold">Huellario</p>
                                <p className="text-xs text-[#E0F4F1]">
                                    Estilo y confort para tu mascota.
                                </p>
                            </div>
                        </div>
                        <p className="mt-3 max-w-sm text-xs sm:text-sm text-[#E0F4F1]">
                            Acompañamos a tu compañero peludo con productos, promos y una
                            atención pensada para ustedes.
                        </p>
                    </div>

                    {/* Columna 2: navegación */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-[#E0F4F1]">
                            Navegación
                        </h3>
                        <ul className="mt-3 space-y-1.5 text-sm">
                            <li>
                                <Link
                                    href="#Inicio"
                                    className="transition-colors hover:text-[#F7C948]"
                                    onClick={handleScroll}
                                >
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Productos"
                                    className="transition-colors hover:text-[#F7C948]"
                                    onClick={handleScroll}
                                >
                                    Productos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#Beneficios"
                                    className="transition-colors hover:text-[#F7C948]"
                                    onClick={handleScroll}
                                >
                                    Beneficios
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: contacto + redes (en md se apila debajo pero dentro de la 2ª col) */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-[#E0F4F1]">
                            Contacto del local
                        </h3>
                        <div className="mt-2 space-y-1 text-xs sm:text-sm">
                            <p>
                                <span className="font-semibold">Mail:</span>{" "}
                                <a
                                    href={`mailto:${email}`}
                                    className="break-all underline-offset-2 hover:underline"
                                >
                                    {email}
                                </a>
                            </p>
                            <p>
                                <span className="font-semibold">Teléfono:</span>{" "}
                                <a
                                    href={`tel:${phone}`}
                                    className="underline-offset-2 hover:underline"
                                >
                                    {phone}
                                </a>
                            </p>
                        </div>

                        <h4 className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#E0F4F1]">
                            Seguinos
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                           {/*<a
                                href={instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#16A394] text-xs sm:text-sm font-semibold shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#FF9F66] hover:text-white"
                            >
                                IG
                            </a>*/}
                            <a
                                href={facebookUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#16A394] text-xs sm:text-sm font-semibold shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#FF9F66] hover:text-white"
                            >
                                FB
                            </a>
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#16A394] text-xs sm:text-sm font-semibold shadow-sm shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#FF9F66] hover:text-white"
                            >
                                WA
                            </a>
                        </div>
                    </div>
                </div>

                {/* Línea inferior */}
                <div className="mt-6 border-t border-white/15 pt-3 text-[11px] sm:text-xs text-[#E0F4F1] flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <p>
                        © {new Date().getFullYear()} Huellario. Todos los derechos
                        reservados.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/about/privacidad"
                            className="hover:text-[#F7C948] transition-colors"
                        >
                            Política de privacidad
                        </Link>
                        <Link
                            href="/about/terminos-condiciones"
                            className="hover:text-[#F7C948] transition-colors"
                        >
                            Términos y condiciones
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
