So, in mongoose tut we created all config and db table routing in the same index file.
But, in industry standard we dont do so.
Here we created seperate files for :
config: to connect to the db server
product: to connect to the table(collection)

The index.js file contains 5 methods:
to create, list, delete, update, search.