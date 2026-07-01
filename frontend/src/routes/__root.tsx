import * as React from 'react'

import { Outlet, createRootRoute, Navigate } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent : ToNotFoundComponent
})

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  )
}

function ToNotFoundComponent () {

    return (
        Navigate({to : '/not_found_page'})
    );
}
