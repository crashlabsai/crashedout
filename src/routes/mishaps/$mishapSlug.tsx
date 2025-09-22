import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mishaps/$mishapSlug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { mishapSlug } = Route.useParams()
  return <div>Hello `/mishaps/$mishapSlug`! {mishapSlug}</div>
}
