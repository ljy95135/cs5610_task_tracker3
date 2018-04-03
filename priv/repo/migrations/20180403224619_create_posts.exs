defmodule TaskTracker3.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add(:title, :string, null: false)
      add(:description, :text, null: false)
      add(:finished, :boolean, default: false, null: false)
      add(:used_time, :integer, default: 0, null: false)
      add(:user_id, references(:users, on_delete: :delete_all))

      timestamps()
    end

    create(index(:posts, [:user_id]))
  end
end
