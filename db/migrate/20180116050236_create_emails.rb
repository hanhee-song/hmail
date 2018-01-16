class CreateEmails < ActiveRecord::Migration[5.1]
  def change
    create_table :emails do |t|
      t.string :subject
      t.string :body
      t.integer :sender_id, null: false
      
      t.timestamps
    end
  end
end
