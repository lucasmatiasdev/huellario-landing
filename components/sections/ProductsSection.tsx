"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Product } from "../../types/product";

type FilterId = "All" | "Ropita" | "Camitas" | "Juguetes";

const FILTERS: { id: FilterId; label: string }[] = [
    { id: "All", label: "Todo" },
    { id: "Ropita", label: "Ropita" },
    { id: "Camitas", label: "Camitas" },
    { id: "Juguetes", label: "Juguetes" },
];

const PAGE_SIZE = 8;

interface ProductsGalleryProps {
    products: Product[];
}

export function ProductsSection({ products }: ProductsGalleryProps) {
    const [activeFilter, setActiveFilter] = useState<FilterId>("All");
    const [page, setPage] = useState(1);

    const filteredProducts = useMemo(() => {
        if (activeFilter === "All") return products;
        return products.filter((p) => p.category === activeFilter);
    }, [products, activeFilter]);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredProducts.length / PAGE_SIZE)
    );

    const startIndex = (page - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const visibleProducts = filteredProducts.slice(startIndex, endIndex);

    const goPrev = () => setPage((p) => Math.max(1, p - 1));
    const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

    return (
        <section className="bg-[#FFF7EC] py-4 md:py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Título */}
                <div className="mb-6 flex flex-col gap-2 text-center md:mb-8 md:text-left">
                    <h2 className="text-2xl font-extrabold text-[#1F2933] sm:text-3xl">
                        Productos Huellario
                    </h2>
                    <p className="text-sm text-[#6B7280] sm:text-base">
                        Galería de ropita, camitas y juguetes para tu mejor amigo. Podés
                        solicitar la compra por WhatsApp u otros medios.
                    </p>
                </div>

                {/* Filtros */}
                <div className="mb-6 flex flex-wrap gap-3">
                    {FILTERS.map((filter) => {
                        const isActive = activeFilter === filter.id;
                        return (
                            <button
                                key={filter.id}
                                type="button"
                                onClick={() => {
                                    setActiveFilter(filter.id);
                                    setPage(1);
                                }}
                                className={[
                                    "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200",
                                    "border border-transparent shadow-sm",
                                    isActive
                                        ? "bg-[#0F7F74] text-white shadow-md"
                                        : "bg-white text-[#0F7F74] border-[#A7E0D8] hover:bg-[#E0F4F1]",
                                ].join(" ")}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>

                {/* Galería */}
                {visibleProducts.length === 0 ? (
                    <p className="text-center text-sm text-[#6B7280]">
                        No hay productos en esta categoría por el momento.
                    </p>
                ) : (
                    <>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                            {visibleProducts.map((product) => (
                                <article
                                    key={product.id}
                                    className="flex flex-col overflow-hidden rounded-2xl border border-[#F3E4D8] bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#FF9F66] hover:shadow-lg"
                                >
                                    {/* Imagen más compacta */}
                                    <div className="relative aspect-square bg-[#FDEDE5]">
                                        <Image
                                            src={product.image!}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1280px) 14rem, (min-width: 1024px) 12rem, (min-width: 640px) 20vw, 50vw"
                                        />
                                    </div>

                                    {/* Contenido compacto */}
                                    <div className="flex flex-1 flex-col gap-1 px-3 py-2.5">
                                        <h3 className="text-[13px] font-semibold text-[#1F2933] sm:text-sm line-clamp-2">
                                            {product.name}
                                        </h3>

                                        <p className="mt-0.5 text-sm font-semibold text-[#FF8740]">
                                            ${product.price.toLocaleString("es-AR")}
                                        </p>

                                        <span className="mt-1 inline-flex w-fit items-center rounded-full bg-[#E0F4F1] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#0F7F74]">
                                            {product.category === "Ropita" && "Ropita"}
                                            {product.category === "Camitas" && "Camitas"}
                                            {product.category === "Juguetes" && "Juguetes"}
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Paginación tipo “carrusel” */}
                        {totalPages > 1 && (
                            <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-[#6B7280] sm:flex-row">
                                <div className="order-2 flex items-center gap-1 sm:order-1">
                                    <span>
                                        Mostrando{" "}
                                        <span className="font-semibold text-[#1F2933]">
                                            {startIndex + 1}
                                        </span>{" "}
                                        –
                                        <span className="font-semibold text-[#1F2933]">
                                            {" "}
                                            {Math.min(endIndex, filteredProducts.length)}
                                        </span>{" "}
                                        de{" "}
                                        <span className="font-semibold text-[#1F2933]">
                                            {filteredProducts.length}
                                        </span>{" "}
                                        productos
                                    </span>
                                </div>

                                <div className="order-1 flex items-center gap-2 sm:order-2">
                                    <button
                                        type="button"
                                        onClick={goPrev}
                                        disabled={page === 1}
                                        className={[
                                            "inline-flex h-8 items-center rounded-full px-3 text-xs font-semibold transition-all",
                                            page === 1
                                                ? "cursor-not-allowed bg-white/60 text-[#9CA3AF]"
                                                : "bg-white text-[#0F7F74] border border-[#A7E0D8] hover:bg-[#E0F4F1]",
                                        ].join(" ")}
                                    >
                                        ← Anterior
                                    </button>

                                    {/* “bolitas” de páginas */}
                                    <div className="flex items-center gap-1">
                                        {Array.from({ length: totalPages }).map((_, index) => {
                                            const current = index + 1;
                                            const isActive = current === page;
                                            return (
                                                <button
                                                    key={current}
                                                    type="button"
                                                    onClick={() => setPage(current)}
                                                    className={[
                                                        "h-2.5 w-2.5 rounded-full transition-all",
                                                        isActive
                                                            ? "bg-[#0F7F74]"
                                                            : "bg-[#A7E0D8] hover:bg-[#4FB6B0]",
                                                    ].join(" ")}
                                                    aria-label={`Ir a página ${current}`}
                                                />
                                            );
                                        })}
                                    </div>

                                    <button
                                        type="button"
                                        onClick={goNext}
                                        disabled={page === totalPages}
                                        className={[
                                            "inline-flex h-8 items-center rounded-full px-3 text-xs font-semibold transition-all",
                                            page === totalPages
                                                ? "cursor-not-allowed bg-white/60 text-[#9CA3AF]"
                                                : "bg-white text-[#0F7F74] border border-[#A7E0D8] hover:bg-[#E0F4F1]",
                                        ].join(" ")}
                                    >
                                        Siguiente →
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
