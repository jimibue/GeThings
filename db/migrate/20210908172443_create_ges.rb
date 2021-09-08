class CreateGes < ActiveRecord::Migration[6.1]
  def change
    create_table :ges do |t|
      t.string :name
      t.string :description
      t.string :category

      t.timestamps
    end
  end
end
