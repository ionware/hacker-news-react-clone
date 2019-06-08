const baseURL = 'https://hacker-news.firebaseio.com/v0';
/*
* Get the Top 50 stories ID
* */
function getTopStoriesId(amount = 50) {
    return fetch(`${baseURL}/topstories.json`)
        .then((data) => data.json())
        .then(data => Array.prototype.slice.call(data, 0, amount))
}

/**
 * Get the New stories ID (default to 50)
 */
function getNewStoriesId(amount = 50) {
    return fetch(`${baseURL}/newstories.json`)
        .then((data) => data.json())
        .then((data) => Array.prototype.slice.call(data, 0, amount))
}
/*
 * Get the an Item of a specific ID, since Hacker News treats every thing
 * as an ID.
 */
export function getItemById(id) {
    return fetch(`${baseURL}/item/${id}.json`)
        .then((data) => data.json())
}
/*
* Walk through and Array of Promises and filter out the
* deleted item, item with property "deleted" set to true
* */
function filterDeletedItem(arrayOfItemsPromise) {
    return Promise.all(arrayOfItemsPromise)
        .then((data) => data.filter(item => !item.deleted))
}
/*
* This we will call to get to stories, an Array of
* Top stories.
* */
export function getTopStories() {
    return getTopStoriesId()
        .then((itemsId) => itemsId.map(id => getItemById(id)))
        .then((stories) => filterDeletedItem(stories));
}
/*
* Component will call this to get the new stories
* */
export function getNewStories() {
    return getNewStoriesId()
        .then((itemsId) => itemsId.map(id => getItemById(id)))
        .then((stories) => filterDeletedItem(stories));
}

/*
* Will be called by Comments component to get all comments
* for a particular story
* */
export function getComments(id) {
    return getItemById(id)
        .then((data) =>
            Promise.all(data.kids.map((commentId) => getItemById(commentId)))
        )
        .then((data) => data);
}
/*
* Will be called by User to get the info of a user with their ID
* */
export function getUser(id) {
    return fetch(`${baseURL}/user/${id}.json`)
        .then((data) => data.json());
}

export function getUserPosts(itemsId) {
    return Promise.all(itemsId.map(
        (id) => getItemById(id)
    ))
        .then((resources) =>
            resources.filter(
                (resource) => resource.type === 'story' && !resource.deleted
            )
        );
}