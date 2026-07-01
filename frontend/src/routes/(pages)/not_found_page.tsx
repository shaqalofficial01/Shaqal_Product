import { createFileRoute } from '@tanstack/react-router'

import { type ReactNode } from 'react';

export const Route = createFileRoute('/(pages)/not_found_page')({
  component: NotFoundComponent,
});

export default function NotFoundComponent () : ReactNode {
    return (
        <h1>404 Not Found</h1>
    );
}

