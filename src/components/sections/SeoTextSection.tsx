import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function SeoTextSection() {
  return (
    <section className="bg-cream section-padding">
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeader
            en="Men's Hair Removal in Koriyama"
            ja="郡山市で選ばれるメンズ脱毛サロン"
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mt-8 space-y-6 text-sm leading-[2.2] text-navy-600">
            <p>
              福島県郡山市でメンズ脱毛をお探しなら、メンズ専門美容サロン
              <strong className="text-navy-900">美men（びめん）</strong>にお任せください。
              郡山市菜根エリアに位置し、光脱毛をはじめとした男性向けの美容メニューを幅広くご用意しています。
            </p>
            <p>
              「脱毛に通いたいけど、女性スタッフだと恥ずかしい」「郡山市内でメンズ脱毛ができるサロンが見つからない」
              そんなお悩みを解決するために、美menは
              <strong className="text-navy-900">完全男性スタッフ制</strong>を採用。
              カウンセリングから施術まですべて男性が対応するので、ヒゲ脱毛はもちろん、VIO脱毛も安心して受けられます。
            </p>
            <p>
              料金は<strong className="text-navy-900">都度払い制</strong>で、
              高額なコース契約は一切不要。Aパーツ（鼻下・あご・眉間など）は
              <strong className="text-navy-900">通常4,400円</strong>のところ、
              新規初回は<strong className="text-navy-900">80%OFFの880円</strong>から始められます。
              夜22時まで営業しているので、仕事帰りにも通いやすい郡山のメンズ脱毛サロンです。
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-8 flex justify-center">
            <Link
              href="/menu/koudatsu"
              className="inline-flex items-center gap-2 border border-navy-200 bg-white px-6 py-3 text-sm font-medium tracking-wider text-navy-900 transition-colors hover:border-gold-400/50 hover:text-gold-600"
            >
              光脱毛の詳細・料金を見る
              <ArrowRight size={14} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
