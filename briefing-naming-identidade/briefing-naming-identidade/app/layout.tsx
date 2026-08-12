import type {Metadata} from "next";
import {Bodoni_Moda,Manrope} from "next/font/google";
import "./globals.css";
import "./briefing.css";
const sans=Manrope({variable:"--font-interface",subsets:["latin"]});
const serif=Bodoni_Moda({variable:"--font-editorial",subsets:["latin"],weight:["400","500","600"],style:["normal","italic"]});
export const metadata:Metadata={title:"Briefing de Naming + Identidade Visual",description:"Briefing estratégico para criação de naming e identidade visual."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>}
