defmodule TaskTracker3Web.PostView do
  use TaskTracker3Web, :view
  alias TaskTracker3Web.PostView

  def render("index.json", %{posts: posts}) do
    %{data: render_many(posts, PostView, "post.json")}
  end

  def render("show.json", %{post: post}) do
    %{data: render_one(post, PostView, "post.json")}
  end

  def render("post.json", %{post: post}) do
    %{id: post.id,
      title: post.title,
      description: post.description,
      finished: post.finished,
      used_time: post.used_time}
  end
end
