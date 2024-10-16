import { db } from '@/app/db';
import { redirect} from 'next/navigation';

export default function SnippetCreatePage() {
    async function createSnippet(formData: FormData) {
        //server action
        'use server';

        //check users input and validate
        const title = formData.get('title') as string;
        const code = formData.get('code') as string;

        //create new record in DB
        const snippet = await db.snippet.create({
            data:{
                title,
                code
            },
        });

        //redirect to home
        redirect('/');
    }

    return (
        <form action={createSnippet}>
            <h3 className="font-bold m-3"> Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">
                        Title
                    </label>
                    <input name="title"
                        className="border rounded p-2 w-full"
                        id="title" />
                </div>
            
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">
                        Code
                    </label>
                    <textarea name="code"
                        className="border rounded p-2 w-full"
                        id="code" />
                </div>

                <button type="submit" className="rounded p-2 bg-blue-200">
                    Create
                </button>
            </div>
        </form>
    )
}