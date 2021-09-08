class CreateThings < ActiveRecord::Migration[6.1]
  def change
    create_table :things do |t|
      t.string :name
      t.belongs_to :ge, null: false, foreign_key: true

      t.timestamps
    end
  end
end
