import { Elysia } from "elysia";

const app = new Elysia()
.get("/", () => "Hello Elysia")
.get("/post/:id", ({params: {id}}) => id)
.post("/post/", ({body, set}) => {
  set.status = 201
  return body
})
.get("/track/*", () => 'Track Route')
.get("/tracks", () => {
  // return new Response(JSON.stringify({
  //   "tracks": [
  //     'track 01',
  //     'track 02',
  //     'track 03',
  //   ]
  // }),{
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  return {
    "tracks":[
          'track 01',
          'track 02',
          'track 03',
        ]
  }
})
.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
