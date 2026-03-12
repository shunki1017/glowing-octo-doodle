"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContactFormData } from "@/types/common";

const MENU_OPTIONS = [
  "光脱毛（パーツ脱毛）",
  "光脱毛（全身）",
  "ハリウッドブロウリフト（HBL）",
  "セルフホワイトニング",
  "DEP トリートメント",
  "無料カウンセリング",
  "その他",
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "送信に失敗しました。");
      }
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信に失敗しました。");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle size={48} className="text-gold-500" />
        <p className="text-lg font-bold tracking-widest text-navy-900">
          お問い合わせを受け付けました
        </p>
        <p className="text-sm text-navy-500">
          通常2営業日以内にご連絡いたします。しばらくお待ちください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* お名前 */}
      <div>
        <label className="mb-1 block text-xs font-medium tracking-widest text-navy-700">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          {...register("name", { required: "お名前を入力してください" })}
          type="text"
          placeholder="山田 太郎"
          className={cn(
            "w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400",
            errors.name ? "border-red-400" : "border-navy-200"
          )}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* メールアドレス */}
      <div>
        <label className="mb-1 block text-xs font-medium tracking-widest text-navy-700">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          {...register("email", {
            required: "メールアドレスを入力してください",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "正しいメールアドレスを入力してください" },
          })}
          type="email"
          placeholder="example@email.com"
          className={cn(
            "w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400",
            errors.email ? "border-red-400" : "border-navy-200"
          )}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* 電話番号 */}
      <div>
        <label className="mb-1 block text-xs font-medium tracking-widest text-navy-700">
          電話番号（任意）
        </label>
        <input
          {...register("tel")}
          type="tel"
          placeholder="024-000-0000"
          className="w-full border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400"
        />
      </div>

      {/* 気になるメニュー */}
      <div>
        <label className="mb-1 block text-xs font-medium tracking-widest text-navy-700">
          気になるメニュー <span className="text-red-500">*</span>
        </label>
        <select
          {...register("menu", { required: "メニューを選択してください" })}
          className={cn(
            "w-full border px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400",
            errors.menu ? "border-red-400" : "border-navy-200"
          )}
        >
          <option value="">選択してください</option>
          {MENU_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {errors.menu && (
          <p className="mt-1 text-xs text-red-500">{errors.menu.message}</p>
        )}
      </div>

      {/* メッセージ */}
      <div>
        <label className="mb-1 block text-xs font-medium tracking-widest text-navy-700">
          ご質問・ご要望
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="ご質問・ご希望の施術内容などをご記入ください。"
          className="w-full border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-gold-400 resize-none"
        />
      </div>

      {/* プライバシーポリシー同意 */}
      <div className="flex items-start gap-3">
        <input
          {...register("privacyAgreed", { required: "プライバシーポリシーへの同意が必要です" })}
          type="checkbox"
          id="privacy"
          className="mt-0.5 accent-gold-500"
        />
        <label htmlFor="privacy" className="text-xs leading-loose text-navy-500">
          <a href="/privacy" className="underline hover:text-gold-600">プライバシーポリシー</a>
          に同意の上、送信します。 <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.privacyAgreed && (
        <p className="text-xs text-red-500">{errors.privacyAgreed.message}</p>
      )}

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full disabled:opacity-50"
      >
        {isLoading ? (
          <span>送信中...</span>
        ) : (
          <>
            <Send size={16} />
            <span>送信する</span>
          </>
        )}
      </button>
    </form>
  );
}
