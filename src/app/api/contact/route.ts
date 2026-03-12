import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import type { ContactFormData } from "@/types/common";

export async function POST(req: NextRequest) {
  const body: ContactFormData = await req.json();

  const { name, email, tel, menu, message } = body;

  if (!name || !email || !menu) {
    return NextResponse.json({ error: "必須項目が不足しています。" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const mailBody = `
お名前：${name}
メール：${email}
電話番号：${tel ?? "未入力"}
気になるメニュー：${menu}

ご質問・ご要望：
${message ?? "（なし）"}
  `.trim();

  try {
    await resend.emails.send({
      from: "美men Webサイト <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `【美men】お問い合わせ：${name} 様`,
      text: mailBody,
    });
  } catch (err) {
    console.error("Mail error:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
