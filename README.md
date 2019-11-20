# build-BE
https://chef-portfoliosis.herokuapp.com/api/auth/register

Post will register a new user and Will provide an JSON web token

Required: username, password, and location

https://chef-portfoliosis.herokuapp.com/api/auth/login

Post request will login a registered user and will provide the JSON web Token.

Required: username and password

https://chef-portfoliosis.herokuapp.com/api/posts/:id

a GET request to return the post with the specific ID.

https://chef-portfoliosis.herokuapp.com/api/posts

a Post request that will let the logged in user create a new chef post
Required: chef_name

https://chef-portfoliosis.herokuapp.com/api/posts/

a PUT request to edit the post that the user created
Required: User needs to be logged in

https://chef-portfoliosis.herokuapp.com/api/posts/:id

a delete request to this route will delete the post id of that route for a logged in user.