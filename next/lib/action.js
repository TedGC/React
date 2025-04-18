'use server'

import { saveMeal } from "./meals"
import { redirect } from 'next/navigation'



export async function shareMeal(prevState, formData) {



    function isInvalidText(text) {
        return !text || text.trim() === ''
    }

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }


    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.creator_email) ||
        isInvalidText(meal.instructions) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            meesage: 'invalid input'
        }
    }

    await saveMeal(meal)
    revalidatePath('/meals')
    redirect('/meals')
}


