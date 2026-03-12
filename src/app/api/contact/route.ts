import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ContactFormData } from "@/types/common";

export async function POST(req: NextRequest) {
  const body: ContactFormData = await req.json();

  const { name, email, tel, menu, message } = body;

  if (!name || !email || !menu) {
    return NextResponse.json({ error: "必須項目が不足しています。" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST?.trim(),
    port: Number((process.env.SMTP_PORT ?? 587).toString().trim()),
    secure: false,
    auth: {
      user: process.env.SMTP_USER?.trim(),
      pass: process.env.SMTP_PASS?.trim(),
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailBody = `
お名前：${name}
メール：${email}
電話番号：${tel ?? "未入力"}
気になるメニュー：${menu}

ご質問・ご要望：
${message ?? "（なし）"}
  `.trim();

  try {
    await transporter.sendMail({
      from: `"美men Webサイト" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
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
