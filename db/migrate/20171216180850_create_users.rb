class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :fname, null: false
      t.string :lname, null: false
      t.string :password_digest, null: false
      t.string :auth_token, null: false

      t.timestamps
    end
    
    add_index :users, :email, unique: true
    add_index :users, :fname
    add_index :users, :lname
    add_index :users, :auth_token
  end
end
