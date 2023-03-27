import s9 from "style9";
import IconSprite from "@/components/IconSprite";
import { Open_Sans } from "next/font/google";
import LayoutContainer from "@/components/LayoutContainer";
import Form from "@/components/Form";

import './globals.css'

import type { NextFontWithVariable } from "next/dist/compiled/@next/font/dist/types";

const c = s9.create({
  body: {
    backgroundColor: "#eee",
  },
  main: {
    paddingTop: "24px",
    gridColumnStart: "main",
  },
  title: {
    fontSize: "3em",
    textAlign: "center",
    marginBottom: "0.5em",
    color: '#334ef1',
  },
  dataWrapper: {
    backgroundColor: "#ccc",
    border: "3px solid #444",
    borderRadius: '16px',
    padding: '13px',
  },
});

const openSans: NextFontWithVariable = Open_Sans({
  adjustFontFallback: true,
  preload: true,
  style: ["normal", "italic"],
  subsets: ["hebrew", "latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-brand",
});

export const metadata = {
  title: 'המועדונית',
  description: 'מחשבון מועדי הגשה',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`${openSans.className} ${s9(c.main)}`}
      dir="rtl"
      lang="he"
    >
      <body className={s9(c.body)}>
        <IconSprite />

        <LayoutContainer>
          <main className={s9(c.main)}>
            <h1 className={s9(c.title)}>המועדונית</h1>
            <Form />
            <div className={s9(c.dataWrapper)}>
            {children}
            </div>
          </main>
        </LayoutContainer>
      </body>
    </html>
  )
}
