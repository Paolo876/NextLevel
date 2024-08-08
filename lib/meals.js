import sql from "better-sqlite3"

const db = sql("meals.db");     // establish db connection


export function getMeals() {
    return db.prepare('SELECT * FROM meals').all();        //use .all for fetching all data
}

//promise or async/await functions not needed for sqlite3

