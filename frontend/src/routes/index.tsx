import { createFileRoute } from '@tanstack/react-router'

import Nav from './-components/shared/Nav'

import Hero from './-components/index/Hero'

import Infrastructure from './-components/index/Infrastructure'

import Terminal from './-components/index/Terminal'

import Footer from './-components/shared/Footer'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <body className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container">
        <Nav />
        <Hero />
        <Infrastructure />
        <Terminal />
        <Footer />
    </body>
  )
}
