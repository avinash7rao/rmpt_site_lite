import {Logo}  from "@/components/_atoms/Logo";
import Content from "@/components/_sections/Content";

export function Hero({ html }: { html: string }) {
  return (
    <section>
      <Logo className="text-8xl" />
      <Content html={html} />
    </section>
  )
}
