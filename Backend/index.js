import express from 'express'
const movies = {
    user_id:1,
    watchlist:[],
    watched:[],
}

const app = express();
app.use(express.json())

app.get("/movies",(req,res)=>{
    res.send(movies)
})


app.get("/movies/watched",(req,res)=>{
    res.send(movies.watched);
})

app.post("/movies/watched",(req,res)=>{
    movies.watched.push(req.body)
    res.send("added to watched movies list")
})

app.delete("/movies/watched/:id",(req,res)=>{
    const id = Number(req.params.id);
    movies.watched = movies.watched.filter(w=>w.id !== id)
    res.send("movie deleted")
})


app.get("/movies/watchlist", (req, res) => {
  res.send(movies.watchlist);
});

app.post("/movies/watchlist",(req,res)=>{
    movies.watchlist.push(req.body)
    res.send("added to watchlist ");
})


app.listen(4000,()=>{
    console.log("server running at port 4000")
})