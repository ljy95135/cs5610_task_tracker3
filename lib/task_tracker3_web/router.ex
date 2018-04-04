defmodule TaskTracker3Web.Router do
  use TaskTracker3Web, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_flash)
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/", TaskTracker3Web do
    # Use the default browser stack
    pipe_through(:browser)

    get("/", PageController, :index)
    get("/register", PageController, :index)
  end

  scope "/api/v1", TaskTracker3Web do
    pipe_through(:api)
    resources("/users", UserController, except: [:new, :edit])
    resources("/posts", PostController, except: [:new, :edit])
    post("/token", TokenController, :create)
  end
end
