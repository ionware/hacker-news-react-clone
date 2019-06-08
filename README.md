<h1 align="center">
    <img src="https://raw.githubusercontent.com/ionware/hacker-news-react-clone/master/demo.gif" alt="demo" width="100%/>
</h1>

## Hacker News React Clone
An app to satisfy Tyler Mcginnis [React Course](https://tylermcginnis.com/courses/react-fundamentals). Really, it is an awesome React course,
I'd recommend it for anyone wanting to learn React. You can find demo at [https://suspicious-wilson-c71cb7.netlify.com/](https://suspicious-wilson-c71cb7.netlify.com/), 
obviously, it is hosted with [Netlify](https://app.netlify.com)

### Improvement
- I made use of Redirect Component from **react-router-dom** to redirect back to the index Route
if there is no "id" query string passed to both user route and post route. An empty 
id or none keeps crashing their render.

- Also, if there is no comments, it will be good to let the user know that there is no
comment, so that was in check too!

### API
The app make use of [Hacker News API](https://github.com/HackerNews/API), you can visit the link to learn
more about Hacker News API.