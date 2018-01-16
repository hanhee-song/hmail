class CreateEmailTags < ActiveRecord::Migration[5.1]
  def change
    create_table :email_tags do |t|
      t.integer :recipient_id, null: false
      t.integer :email_id, null: false
      t.boolean :read, null: false, default: false

      t.timestamps
    end
    
    add_index :email_tags, :recipient_id
    add_index :email_tags, :email_id
  end
end
