import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
  "Mais de 20 anos de experiência em desenvolvimento de software",
  "Líder técnico na Zup Innovation",
  "Desenvolvimento de aplicativos móveis para iOS e Android",
  "Expertise em Java, Angular e DevOps",
  "Larga experiência em metodologias ágeis",
  "Entrega de produtos de alta qualidade",
  "Participação em projetos de grande escala",
  "Contribuições ativas para projetos open source",
];


export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
