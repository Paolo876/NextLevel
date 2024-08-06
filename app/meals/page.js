import classes from "./page.module.css"

function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
            </header>
            <main className={classes.main}>
                
            </main>
        </>
    );
}

export default MealsPage;