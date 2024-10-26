import { type RequestHandler } from '@sveltejs/kit';
import fs from 'fs';

export const POST: RequestHandler = async ({ request }) => {
	const { path } = await request.json();
  // console.log(path);

  let fileData;

  const myPromise = await new Promise(async function(resolve, reject) {

    // fs.writeFile('User/test/message.txt', "This is text and stuff", (err: any) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log('File has been created');
    //   resolve("OK");
    // });

    const res = await fs.readFile("User/test/message.txt", (err: any, data: any) => {
      if (err) {
        console.error(err);
        return;
      }
      // console.log(data.toString());
      fileData = data.toString();
      resolve(data.toString());
    });
    
  });

  // console.log(fileData);
  
  return new Response(JSON.stringify({ success: true, data: fileData }));
};