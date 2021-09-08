# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ge = Ge.create(name:'yo')
ge1 = Ge.create(name:'yo1')
ge.things.create(name:'ge hello')
ge.things.create(name:'ge hello1')
ge1.things.create(name:'ge1 hello1')
ge1.things.create(name:'ge2 hello1')