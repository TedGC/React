


// import UsePromiseDemo from '@/components/UsePromisesDemo';
// import { Suspense } from 'react';

// export default async function Home() {
//   const fetchUsersPromise = new Promise((resolve) =>
//     setTimeout(async () => {
//       const data = await fs.readfile('dummy-db.json', 'utf-8')
//       const users = JSON.parse(data)
//       resolve(users)
//     }

//     ), 2000)


//   return (
//     <main>
//       <Suspense fallback={<p>Loading..users </p>}>
//         <UsePromiseDemo />
//       </Suspense>
//     </main>
//   );
}




import UsePromiseDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";

export default async function Home() {

  const fetchUsersPromise = new Promise((resolve) => {
    setTimeout(async() =>{ 
      const data = fs.readfile('dummy-db.json', 'utf-8')
      const users = JSON.parse(data)

      resolve(users)
 
    }, 2000)
  })

  return (
    <Suspense fallback={<p>loading...</p>}> 
      <UsePromiseDemo />
    </Suspense>
  )

}


export default async function saveMeal(meal) {

  meal.slug = slugify(meal.titile, {lower: true})
  meal.isntructions = xss(meal.instructions)

  const extension = meal.image.name.split('.').pop()
  const fileName  = `${meal.slug} ${extension}`

  const stream = fs.createWriteStream(`/public/images/${fileName}`)
  const bufferedImage = meal.iamge.toArrary()

  stream.wrtie(Buffer.from(bufferedImage), (error) => {
    if(error) {
      throw new Error('throw new error')
    }
  })

  meal.image = `/images/${fileName}`

  db.prepare(`
  INPUT INTO meals (title, summary) VALUES (@title, @summary)
  `).run()
}