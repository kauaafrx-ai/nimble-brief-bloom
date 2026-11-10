import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Gift, Sparkles, Scissors, Ruler, Palette, GraduationCap } from "lucide-react";
import hero from "@/assets/hero.jpg";
import pieces from "@/assets/pieces.jpg";
import rugs from "@/assets/rugs.jpg";

export const CHECKOUT_URL = "https://pay.cakto.com.br/soiwdip_1302277";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crochê do Zero à Alfaiataria — Curso + Bônus de Tapetes" },
      { name: "description", content: "Aprenda crochê do zero, crie peças incríveis e ganhe um guia com +15 modelos de tapetes." },
      { property: "og:title", content: "Crochê do Zero à Alfaiataria" },
      { property: "og:description", content: "Do primeiro ponto às peças de alfaiataria. Bônus: +15 modelos de tapetes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ label = "ADQUIRA JÁ" }: { label?: string }) {
  return (
    <a href={CHECKOUT_URL} target="_blank" rel="noopener" className="cta inline-block rounded-full px-10 py-4 font-semibold tracking-wide transition-transform hover:scale-105">
      {label}
    </a>
  );
}

const items = ["Croppeds", "Blusas", "Alfaiataria", "Bolsas", "Conjuntos", "Tapetes", "Decoração", "Acessórios"];
const learn = [
  { i: GraduationCap, t: "Do zero, para iniciantes" },
  { i: Sparkles, t: "Técnicas e pontos" },
  { i: Scissors, t: "Modelos e peças variadas" },
  { i: Ruler, t: "Acabamentos perfeitos" },
  { i: Palette, t: "Personalize suas criações" },
];

function Index() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="overflow-hidden font-sans">
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <div className="reveal text-center md:text-left">
          <h1 className="font-display text-5xl font-bold leading-none text-primary md:text-7xl">Crochê do Zero à Alfaiataria</h1>
          <p className="mt-5 text-lg text-muted-foreground">Transforme fios em peças incríveis e desenvolva uma habilidade que abre portas para novas oportunidades.</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold bg-card px-4 py-2 text-sm font-semibold text-terracotta">
            <Gift className="h-4 w-4" /> + BÔNUS: GUIA COM +15 MODELOS DE TAPETES
          </div>
          <p className="mt-6 font-display text-2xl italic">"Imagine olhar para uma peça linda e dizer: fui eu quem fiz!"</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Cta />
            <a href="#curso" className="rounded-full border border-primary px-8 py-4 font-medium text-primary transition-colors hover:bg-secondary">QUERO CONHECER O CURSO</a>
          </div>
        </div>
        <div className="reveal relative">
          <div className="spin-slow absolute -right-6 -top-6 h-32 w-32 rounded-full border-2 border-dashed border-gold" />
          <img src={hero} alt="Mulher fazendo crochê" width={1024} height={1024} className="float relative rounded-[2rem] shadow-2xl" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-primary py-4 text-primary-foreground">
        <div className="marquee flex w-max gap-10 font-display text-2xl">
          {[...items, ...items].map((t, i) => <span key={i}>✦ {t}</span>)}
        </div>
      </div>

      {/* CURSO */}
      <section id="curso" className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <img src={pieces} alt="Peças de crochê: cropped, bolsa e camisa" loading="lazy" width={1024} height={768} className="reveal rounded-[2rem] shadow-xl transition-transform duration-700 hover:scale-[1.03]" />
        <div className="reveal">
          <h2 className="font-display text-4xl font-bold text-primary">Não é apenas crochê. É um universo de possibilidades!</h2>
          <p className="mt-3 text-muted-foreground">Comece do zero e descubra tudo o que pode aprender:</p>
          <ul className="mt-6 space-y-3">
            {learn.map(({ i: I, t }) => (
              <li key={t} className="flex items-center gap-3 rounded-xl bg-card p-3 shadow-sm transition-transform hover:translate-x-2">
                <I className="h-5 w-5 text-terracotta" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BONUS */}
      <section className="bg-secondary px-6 py-16">
        <div className="reveal mx-auto max-w-4xl text-center">
          <span className="cta inline-block rounded-full px-4 py-1 text-xs font-bold tracking-widest">BÔNUS EXCLUSIVO</span>
          <h2 className="mt-4 font-display text-4xl font-bold text-primary">E você ainda vai receber um presente especial!</h2>
          <p className="mt-2 font-display text-3xl text-terracotta">+15 modelos de tapetes em crochê</p>
          <p className="mt-2 text-muted-foreground">Redondos, ovais, retangulares, florais, modernos e decorativos.</p>
          <img src={rugs} alt="Modelos de tapetes de crochê" loading="lazy" width={1024} height={768} className="mt-8 rounded-[2rem] shadow-xl" />
        </div>
      </section>

      {/* RENDA + IDENTIFICAÇÃO */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <div className="reveal">
          <h2 className="font-display text-4xl font-bold text-primary">E se o que você aprendeu virasse renda?</h2>
          <p className="mt-4 inline-block rounded-2xl bg-primary px-6 py-3 font-semibold text-primary-foreground">MAIS DE R$ 5 MIL COM CROCHÊ: DESCUBRA AS POSSIBILIDADES!</p>
          <p className="mt-4 text-muted-foreground">Aprenda a valorizar e comercializar suas criações.</p>
          <p className="mt-2 text-xs text-muted-foreground">*Resultados dependem de dedicação, produção, precificação, divulgação e vendas. Não há garantia de ganhos.</p>
        </div>
        <div className="reveal mt-10 grid gap-3 sm:grid-cols-2">
          {["Sempre quis aprender, mas não sabia por onde começar?", "Gostaria de criar suas próprias peças?", "Quer desenvolver uma habilidade artesanal?", "Já imaginou vender suas criações?"].map((q) => (
            <div key={q} className="rounded-xl border border-border bg-card p-4 text-left transition-all hover:-translate-y-1 hover:shadow-lg">{q}</div>
          ))}
        </div>
      </section>

      {/* OFERTA FINAL */}
      <section className="bg-primary px-6 py-16 text-center text-primary-foreground">
        <div className="reveal mx-auto max-w-3xl">
          <h2 className="font-display text-4xl font-bold md:text-5xl">Seu próximo projeto pode começar hoje!</h2>
          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
            {[["Produto principal", "Crochê do Zero à Alfaiataria"], ["Bônus especial", "+15 modelos de tapetes"], ["Possibilidade extra", "Explore o potencial comercial"]].map(([a, b]) => (
              <div key={a} className="rounded-xl border border-gold/50 p-4">
                <p className="text-gold">{a}</p><p className="mt-1 font-semibold">{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-10"><Cta /></div>
          <p className="mt-4 opacity-80">Comece hoje a construir suas próximas criações!</p>
        </div>
      </section>
    </main>
  );
}
