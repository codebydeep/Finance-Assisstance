import app from "./app.js";
import connectDb from "./db/db.js";

const port = process.env.PORT || 4000;

connectDb()
.then(() => {
    app.listen(port, () => {
      console.log(`Server listen on port: ${port}`);
    });  
})
.catch((err) => {
    console.error(`Database connection error`, err);
    process.exit(1);
});

// This is the commit no 1.

// This is actually a wrong commit.

// This is the commit no 2.