import { db } from "@/app/db";

interface SnippetEditPageProps{
    params:{
        id:string
    }
}

export default async function SnippetEditPage(props: SnippetEditPageProps){
    const { id } = await props.params;

    const snippetId = parseInt(id);
    const snippet = await db.snippet.findFirst({
      where: { id: snippetId },
    });

    return(
        <div>editing with id: {snippetId}</div>
    )

}