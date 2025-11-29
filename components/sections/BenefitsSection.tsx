'use client'

import Image from "next/image";

const benefits = {
    topLeft: "Envíos gratis a Villa Lugano",
    topRight: "Promos todas las semanas",
    bottomLeft: "Empaquetado premium",
    bottomRight: "Sorprendé a tu mascota en este verano",
};

export function BenefitsSection() {
    return (
        <section className="bg-[#FFF7EC] py-14 md:py-20">
            {/* Título */}
            <div className="mb-8 text-center md:mb-10">
                <h2 className="text-2xl font-extrabold text-[#1F2933] sm:text-3xl">
                    Beneficios de comprar en Huellario
                </h2>
                <p className="mt-2 text-sm text-[#6B7280] sm:text-base">
                    Te acompañamos a vos y a tu mascota con envíos, promos y detalles
                    pensados para sorprender.
                </p>
            </div>

            {/* Versión desktop: mapa en el centro y textos alrededor */}
            <div className="hidden md:block">
                <div className="relative mx-auto flex h-[360px] max-w-[560px] items-center justify-center">
                    {/* MAPA CIRCULAR */}
                    <div className="relative h-64 w-64 lg:h-72 lg:w-72">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF9F66]/40 via-[#4FB6B0]/40 to-[#F7C948]/40 blur-md" />
                        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-[#FDEDE5] shadow-2xl shadow-black/20">
                            <Image
                                src="/lugano.jpg"
                                alt="Ubicación de Huellario"
                                fill
                                sizes="(min-width: 1024px) 18rem, 14rem"
                                className="object-center"
                            />
                        </div>
                    </div>

                    {/* BENEFICIOS ALREDEDOR */}
                    <BenefitBubble position="topLeft">
                        {benefits.topLeft}
                    </BenefitBubble>

                    <BenefitBubble position="topRight">
                        {benefits.topRight}
                    </BenefitBubble>

                    <BenefitBubble position="bottomLeft">
                        {benefits.bottomLeft}
                    </BenefitBubble>

                    <BenefitBubble position="bottomRight">
                        {benefits.bottomRight}
                    </BenefitBubble>
                </div>
            </div>


            {/* Versión mobile: mapa + cards apiladas */}
            <div className="flex flex-col items-center gap-6 md:hidden">
                <div className="relative h-56 w-56">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF9F66]/40 via-[#4FB6B0]/40 to-[#F7C948]/40 blur-md" />
                    <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-[#FDEDE5] shadow-xl">
                        <Image
                            src="/lugano.jpg"
                            alt="Ubicación de Huellario"
                            fill
                            sizes="(min-width: 1024px) 18rem, 14rem"
                            className="object-center"
                        />
                    </div>
                </div>

                <div className="grid w-full gap-3 sm:max-w-md">
                    <BenefitCard>{benefits.topLeft}</BenefitCard>
                    <BenefitCard>{benefits.topRight}</BenefitCard>
                    <BenefitCard>{benefits.bottomLeft}</BenefitCard>
                    <BenefitCard>{benefits.bottomRight}</BenefitCard>
                </div>
            </div>
        </section>
    );
}

type BubblePosition = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

interface BenefitBubbleProps {
    position: BubblePosition;
    children: React.ReactNode;
}

function BenefitBubble({ position, children }: BenefitBubbleProps) {
    const base =
        "absolute max-w-xs rounded-2xl bg-white/95 px-4 py-3 text-sm font-semibold text-[#0F7F74] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-[#FF9F66] hover:text-white hover:ring-2 hover:ring-[#F7C948]";

    const posClasses: Record<BubblePosition, string> = {
        topLeft: "left-0 top-4 text-left",
        topRight: "right-0 top-4 text-right",
        bottomLeft: "left-0 bottom-4 text-left",
        bottomRight: "right-0 bottom-4 text-right",
    };

    return (
        <div className={`${base} ${posClasses[position]}`}>
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#4FB6B0] animate-pulse-soft" />
            {children}
        </div>
    );
}

interface BenefitCardProps {
    children: React.ReactNode;
}

function BenefitCard({ children }: BenefitCardProps) {
    return (
        <div className="flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 text-sm font-semibold text-[#0F7F74] shadow-md shadow-black/10 hover:-translate-y-1 hover:bg-[#FF9F66] hover:text-white hover:shadow-xl hover:ring-2 hover:ring-[#F7C948]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#4FB6B0] animate-pulse-soft" />
            <span>{children}</span>
        </div>
    );
}
