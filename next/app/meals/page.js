import MealsGrid from '@/components/meals/meals-grid'
import classes from './page.module.css'
import Link from 'next/link'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react'


//data fetching function/feature is now outsources out of the MalsPage component

async function Meals() {
    const meals = await getMeals()

    return (
        <MealsGrid meals={meals} />
    )
}



export default async function MealsPage() {


    return (
        <>
            <header className={classes.header}>
                <h1>
                    delicious meal, created{' '} <span className={classes.highlight}>
                        by you
                    </span>
                </h1>
                <p>
                    choose your own recipes
                </p>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        share your favorite recipes
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}
                >Loading Data...</p>}>
                    <Meals />
                </Suspense>
            </main>

        </>
    )
}