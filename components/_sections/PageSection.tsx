import Content from "./Content"

export function PageSection({ html }: { html: string }) {
  return (
    <section>
      <Content html={html} />
    </section>
  )
}
