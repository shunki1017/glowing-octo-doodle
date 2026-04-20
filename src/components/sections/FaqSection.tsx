"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const FAQS = [
  {
    question: "スタッフは全員男性ですか？",
    answer:
      "はい、美menは完全男性スタッフ制です。カウンセリングから施術まで、すべて男性スタッフが担当します。VIOを含む全身脱毛も、同性スタッフ対応で安心してお受けいただけます。",
  },
  {
    question: "コース契約は必要ですか？",
    answer:
      "一切不要です。すべてのメニューは都度払い制で、高額な長期コース契約はありません。必要なときに必要な施術だけ受けることができます。",
  },
  {
    question: "光脱毛は痛いですか？",
    answer:
      "光（フラッシュ）脱毛は、従来のレーザー脱毛に比べて痛みが少ないのが特徴です。肌質・毛質によって個人差がありますが、初めての方でも受けやすい施術です。気になる方はカウンセリング時にご相談ください。",
  },
  {
    question: "予約はどうすればいいですか？",
    answer:
      "電話（024-983-3533）・LINE・Webフォームの3つの方法でご予約いただけます。初めての方は無料カウンセリングからのご予約をおすすめしています。",
  },
  {
    question: "駐車場はありますか？",
    answer:
      "はい、店舗裏に専用駐車場（No.29・No.30）を2台分ご用意しています。お車でのご来店も安心です。",
  },
  {
    question: "新規割引はどのくらいお得ですか？",
    answer:
      "初回は最大80%OFF、2回目60%OFF、3回目40%OFFの継続割引が適用されます。Aパーツ（鼻下・顎・眉間・指）の通常料金4,400円が、初回880円から施術できます。",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-navy-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-bold tracking-wide text-navy-900 pr-4">
          {question}
        </span>
        {open ? (
          <Minus size={16} className="shrink-0 text-gold-500" />
        ) : (
          <Plus size={16} className="shrink-0 text-gold-500" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-sm leading-loose text-navy-500">{answer}</p>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="bg-white section-padding" id="faq">
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeader en="FAQ" ja="よくある質問" center />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="mt-12 divide-y-0">
            {FAQS.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
