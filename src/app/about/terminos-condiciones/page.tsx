import { Header } from "../../../../components/layout/Header";
import { Footer } from "../../../../components/layout/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huellario • Petshop",
  description: "Términos y condiciones de Huellario • Petshop ",
  icons: "\huellario-icon.ico"
};

export default function Terminos(){
    return(
        <>
            <Header />
            <main className="bg-[#FFF7EC] py-16 md:py-24">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    {/* Título */}
                    <div className="mb-12 text-center">
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/huellario-icon.ico"
                                alt="Huellario Icon"
                                width={48}
                                height={48}
                                className="drop-shadow-md"
                            />
                        </div>
                        <h1 className="text-3xl font-extrabold text-[#1F2933] sm:text-4xl md:text-5xl">
                            Términos y Condiciones
                        </h1>
                        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#4FB6B0] to-[#FF9F66] mx-auto rounded-full" />
                    </div>

                    {/* Contenido */}
                    <div className="space-y-8">
                        <p className="text-base text-[#6B7280] leading-relaxed">
                            Estos términos y condiciones establecen las reglas que rigen el uso de nuestra página web. Asegúrate de leerlos detenidamente antes de utilizar nuestro sitio.
                        </p>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Uso de la Página Web</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Tu uso de nuestra página web está sujeto a estos términos. Al acceder o navegar en nuestro sitio, aceptas estar vinculado por estas condiciones.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Responsabilidad del Usuario</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Como usuario, te comprometes a usar la página web de manera responsable y respetuosa. No se permiten actividades ilegales o que violen los derechos de terceros en nuestra página web.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Derechos de Propiedad Intelectual</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                El contenido de nuestra página web, incluyendo texto, imágenes, diseño y software, está protegido por leyes de copyright. No se permite la copia, distribución o modificación del contenido sin autorización expresa.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">No Responsabilidad</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Nos declinamos toda responsabilidad por cualquier daño o perjuicio que pueda resultar del uso de nuestra página web o la falta de su disponibilidad. No somos responsables de los contenidos proporcionados por terceras partes.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Limitación de Responsabilidad</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Nuestra responsabilidad en relación con cualquier reclamación será limitada a la reparación, sustitución o devolución del costo de servicio. No nos responsabilizamos por cualquier daño indirecto, incidental, especial, punitivo o consecuente que puedas sufrir como resultado del uso de nuestra página web.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Revisión y Cambios en los Términos</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Nos reservamos el derecho de actualizar o modificar estos términos a nuestro propio juicio. Cualquier actualización será reflejada en esta página y te sugerimos que revises regularmente nuestros términos para estar informado sobre cualquier cambio.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Contacto con Nosotros</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Si tienes preguntas o comentarios sobre estos términos, no dudes en ponerte en contacto con nosotros a través del formulario de contacto en la página principal o escribiéndonos a huellariopetshop@gmail.com.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
