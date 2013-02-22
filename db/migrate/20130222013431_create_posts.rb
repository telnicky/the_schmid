class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :vote
      t.text :feedback

      t.timestamps
    end
  end
end
