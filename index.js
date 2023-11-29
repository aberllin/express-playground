const express = require('express');
const app = express();
const postsData = require('./data.json');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('allPosts', {postsData})
})

app.get('/posts/:authorName', (req, res) => {
    const {authorName} = req.params
    res.render('posts', {authorName})
});

app.listen(8080, () => {
    console.log('LISTETING 3000 PORT!');
});