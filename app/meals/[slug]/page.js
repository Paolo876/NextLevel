import classes from "./page.module.css"
import Image from "next/image";
import { getMeal } from "@/lib/meals";


function MealDetails({ params }) {   //params can be passed as props on slug pages, no need to import useParams
    const meal = getMeal(params.slug);

    const instructions = meal.instructions.replace(/\n/g, '<br/>')  //update html format
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image fill src={meal.image}/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p 
                    className={classes.instructions} 
                    dangerouslySetInnerHTML={{      //this is used because the data stored is in html format
                        __html: instructions,
                    }}
                ></p>
            </main>
        </>
    );
}

export default MealDetails;