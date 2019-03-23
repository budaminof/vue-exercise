# Vue Exercise

Please submit a pull request to this repo implementing the following feature:

Create a Vuex module and component(s) to display blog post data from the following web service:

<https://jsonplaceholder.typicode.com/posts>

- Display the posts for the current user in the left column, and posts for all other users in the right column. For the purposes of this exercise, you can hard-code the “current user ID” to 1.
- Handle both loading and error states.
- Unit test both the Vuex module and component(s). Cover all the important behavior of the code with tests, and get 100% test coverage for all metrics shown in the unit test output. For the purposes of this exercise, don't worry about doing any end-to-end testing.
- Add enough CSS to get the left/right column layout and make it look clean, but don’t worry about too fancy styling.

Feel free to reach out to <jjustice@bignerdranch.com> with questions!

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run unit tests
npm run unit:watch
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
