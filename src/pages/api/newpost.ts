import type { APIRoute } from "astro";
import { Kysely } from 'kysely';
import { D1Dialect } from 'kysely-d1';
import type { DB } from '../../../prisma/generated/types';
//import { object, string } from 'zod';
import { z } from "zod";
import { createForm } from "simple:form";

const postSchema = createForm({
    boardId: z.string(),
    threadId: z.string(),
    content: z.string(),
});

// const postSchema = object({
//     title: string(),
//     content: string(),
// });


export const POST: APIRoute = async ({ request, redirect, locals }) => {
  

  console.log("newthread api post aa ");
  try {
    console.log("0");

      //const data = await request.formData();
      console.log("1");
      //console.log(data);
      //const {title, content} = postSchema.parse(data);
      const data = await locals.form.getData(postSchema);
      if (! data?.data) { throw Error("zod failed"); }

      const {title, content} = data.data;
      const userHandle = "todo";
      const boardId = 1;
      // const title = data.get("title");
      // const content = data.get("content");
      //console.log   ("success", name, email);
      console.log("2")
      const raw = locals.runtime.env?.D1;
      console.log("3")
      const db = new Kysely<DB>({ dialect: new D1Dialect({ database:  raw}) });
      console.log("4")
      const country = request.headers.get("cf-ipcountry") ?? "xx";
      
        const thread = await db.insertInto("Thread").values({title, userHandle, boardId}).returning('id').executeTakeFirstOrThrow();
        const post = await db.insertInto("Post").values({
          content,
          threadId: thread.id,
          userHandle: "me",
          country
        }).returning("id").executeTakeFirstOrThrow();

      console.log("5")

      return redirect('/pol/');
      // Do something with the data
    } catch (error) {
      console.log("catching error")
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
    return redirect('/');
}
