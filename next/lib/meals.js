import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'



const db = sql('meals.db')


export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return db.prepare('SELECT * FROM meals').all()
}




export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title, { lovwer: true })
    // the script above it to create another slug with the submitted information from
    //the user
    meal.instructions = xss(meal.instructions)
    // to prevent cross script attack 

    const extension = meal.image.name.split('.').pop()
    // when an image uplaoed/imported it will pop off the extension name (file extension)
    const fileName = `${meal.slug}.${extension}`
    //merge the image name with the newly created slug 

    const stream = fs.createWriteStream(`public/images/${fileName}`)
    // this is a function to make being able to write the data into the path
    // think of this script as creating a path to the designated file as part of 
    // the prep process for writing the data into the file
    const bufferedImage = await meal.image.arrayBuffer()
    //to make the image into a buffered image so that the system can interpret it 
    // like converting various data into JSON format for hte system to 
    // digest the data
    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('saving image failed')
        }
    })

    //extracting the buffered data from the buffered image and write it to the 
    // designated file 
    meal.image = `/images/${fileName}`

    //overwriting the image data with the path to the image


    db.prepare(`INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug )
    VALUES (       
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
    )
    `).run(meal)
}