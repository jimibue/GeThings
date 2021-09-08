class Ge < ApplicationRecord
  validates :name, presence: true
  has_many :things, dependent: :destroy
end
