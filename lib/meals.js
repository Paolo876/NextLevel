import sql from "better-sqlite3"

const db = sql("meals.db");     // establish db connection


export async function getMeals() {
    await new Promise(resolve => setTimeout(resolve, 3000))   //only for loading simulation in this tutorial
    // throw new Error("An error occurred.")        //error test 
    return db.prepare('SELECT * FROM meals').all();        //use .all for fetching all data
}

//promise or async/await functions not needed for sqlite3

