defmodule TaskTracker3Web.TokenController do
  use TaskTracker3Web, :controller
  alias TaskTracker3.Users.User

  action_fallback(TaskTracker3Web.FallbackController)

  def create(conn, %{"name" => name, "pass" => pass}) do
    with {:ok, %User{} = user} <- TaskTracker3.Users.get_and_auth_user(name, pass) do
      token = Phoenix.Token.sign(conn, "auth token", user.id)

      conn
      |> put_status(:created)
      |> render("token.json", user: user, token: token)
    end
  end
end
