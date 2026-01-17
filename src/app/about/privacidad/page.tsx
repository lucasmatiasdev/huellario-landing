import { Header } from "../../../../components/layout/Header";
import { Footer } from "../../../../components/layout/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Huellario • Petshop",
  description: "Política de privacidad de Huellario • Petshop ",
  icons: "\huellario-icon.ico"
};

export default function Privacidad(){
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
                            Política de Privacidad
                        </h1>
                        <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#4FB6B0] to-[#FF9F66] mx-auto rounded-full" />
                    </div>

                    {/* Contenido */}
                    <div className="space-y-8">
                        <p className="text-base text-[#6B7280] leading-relaxed">
                            Esta política describe cómo maneja y protegemos la información personal que se recopila en nuestra página web. Aunque actualmente no recogemos datos personales, queremos asegurarnos de que estés informado sobre nuestros compromisos con la privacidad.
                        </p>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Información Recopilada</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Nuestra página web no recoge ni almacena información personal, como nombres, direcciones de correo electrónico, números de teléfono, etc. Esto se debe a que actualmente no realizamos solicitudes de datos y solo proporcionamos contenido informativo.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Información No Personal</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Nuestra página web puede recopilar información no personal, como la dirección IP del usuario o los detalles demográficos generales (por ejemplo, el idioma preferido). Esta información se utiliza para mejorar nuestra experiencia de usuario y personalizar nuestro contenido.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Uso de Cookies</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Nuestra página web utiliza cookies para recordar tus preferencias y mejorar tu experiencia en la navegación. Las cookies son pequeños archivos que se almacenan en el navegador del usuario para recordar información útil. No usamos cookies para recopilar datos personales.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Seguridad de los Datos</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Nos comprometemos a proteger la seguridad y privacidad de tus datos. Utilizamos medidas de seguridad estándar para evitar el acceso no autorizado o la divulgación, modificación, pérdida o destrucción de la información personal que nos proporcionas.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Comunicaciones de Marketing</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                No vendemos ni compartimos tu información personal con terceros sin tu consentimiento explícito. Si decides compartir tus datos en el futuro, asegúrate de revisar nuestra política de privacidad para entender cómo se utilizarán esos datos.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Cambios en la Política de Privacidad</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Podemos actualizar esta política a nuestro propio juicio y según sea necesario. Cualquier cambio será reflejado en esta página. Te sugerimos que revises regularmente nuestra política para estar informado sobre cualquier actualización.
                            </p>
                        </section>

                        <section className="bg-white/60 rounded-2xl p-6 md:p-8 border border-[#E5E7EB] hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-bold text-[#0F7F74] mb-3">Contacto con Nosotros</h2>
                            <p className="text-[#6B7280] leading-relaxed">
                                Si tienes preguntas o comentarios sobre nuestra política de privacidad, no dudes en ponerte en contacto con nosotros a través del formulario de contacto en la página principal o escribiéndonos a huellariopetshop@gmail.com.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
