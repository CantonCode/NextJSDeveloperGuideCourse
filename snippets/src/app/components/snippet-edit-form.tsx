'use client';

import type { Snippet } from "@prisma/client";


interface SnippetEditFormProps{
    snippet: Snippet
}

export default function SnippetEditForm({snippet}:SnippetEditFormProps){
    return(
        <div>
            Client component snippet title { snippet.title }
        </div>
    )

}