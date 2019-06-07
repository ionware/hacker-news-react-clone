const baseURL = 'https://hacker-news.firebaseio.com/v0';
/*
* Get the Top 30 stories ID
* */
function getTopStoriesId(amount = 30) {
    return fetch(`${baseURL}/topstories.json`)
        .then((data) => data.json())
        .then(data => Array.prototype.slice.call(data, 0, amount))
}
/*
 * Get the an Item of a specific ID, since Hacker News treats every thing
 * as an ID.
 */
function getItemById(id) {
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