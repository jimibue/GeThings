class Thing < ApplicationRecord
  validates :name, presence: true
  belongs_to :ge
end
