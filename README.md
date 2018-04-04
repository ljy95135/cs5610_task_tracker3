# Attribution
This task uses a lot patterns from professor's excellent microblog-spa.

# Design
In this task, my project reaches all requirement of task1 and extra requirements for hw08.

## Feature
In this app, you can:
 * Register, Login, Logout
 * After login, you can assign tasks to other users or yourself.
 * After login, you can see all your tasks you need to do, and the task history for finished one.
   - For tasks to do, you can see task title and description, when you finish it, you can fill in time and submit.
   - For task history, you can see task title and description and the time you used for this task.
Besides those:
 * I use cerbot to enable HTTPS.
 * This is a single page application.
 * User must have the right password to login, and in database, password are stored after adding salt and hashing.
 * It uses Phoenix.Token for authentication.
 * The project uses Redux to manage client state.

Now you can register some users (do not forget your password!), give them tasks and login as that user, see your tasks and finish them. Enjoy!

# TaskTracker3

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.create && mix ecto.migrate`
  * Install Node.js dependencies with `cd assets && npm install`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](http://www.phoenixframework.org/docs/deployment).

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
