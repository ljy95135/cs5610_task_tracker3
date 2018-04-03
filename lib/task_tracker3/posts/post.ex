defmodule TaskTracker3.Posts.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field(:description, :string)
    field(:finished, :boolean, default: false)
    field(:title, :string)
    field(:used_time, :integer)
    belongs_to(:user, TaskTracker3.Users.User)

    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [:title, :description, :finished, :used_time, :user_id])
    |> validate_required([:title, :description, :finished, :used_time, :user_id])
  end
end
