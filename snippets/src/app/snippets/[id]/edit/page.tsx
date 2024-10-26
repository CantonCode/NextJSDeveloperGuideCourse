import { db } from "@/app/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/app/components/snippet-edit-form";

interface SnippetEditPageProps {
    params: Promise<{
      id: string;
    }>;
  }

export default async function SnippetEditPage(props: SnippetEditPageProps){
    const { id } = await props.params;
 
    const snippetId = parseInt(id);
    const snippet = await db.snippet.findFirst({
      where: { id: snippetId },
    });
  

    if(!snippet){
        return notFound()
    }

    return(
        <SnippetEditForm snippet={snippet}/>
    )

}