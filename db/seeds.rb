100.times do
  Menu.create(
    dish: Faker::Food.dish,
    description: Faker::StarTrek.character,
    price: Faker::Commerce.price.to_f,
  )
end

