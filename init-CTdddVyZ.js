const n=`-- Mobs Animal v1.0 for Luanti Web
-- Animals: pig, cow, chicken, sheep spawn eggs

minetest.register_craftitem("mobs_animal:spawn_egg_pig", {
    description = "Pig Spawn Egg",
    inventory_image = "mobs_animal_pig_egg.png",
    groups = {spawn_egg = 1},
})

minetest.register_craftitem("mobs_animal:spawn_egg_cow", {
    description = "Cow Spawn Egg",
    inventory_image = "mobs_animal_cow_egg.png",
    groups = {spawn_egg = 1},
})

minetest.register_craftitem("mobs_animal:spawn_egg_chicken", {
    description = "Chicken Spawn Egg",
    inventory_image = "mobs_animal_chicken_egg.png",
    groups = {spawn_egg = 1},
})

minetest.register_craftitem("mobs_animal:spawn_egg_sheep", {
    description = "Sheep Spawn Egg",
    inventory_image = "mobs_animal_sheep_egg.png",
    groups = {spawn_egg = 1},
})

minetest.register_craftitem("mobs_animal:meat_raw", {
    description = "Raw Meat",
    inventory_image = "mobs_animal_meat_raw.png",
    on_use = minetest.item_eat(2),
})

minetest.register_craftitem("mobs_animal:meat_cooked", {
    description = "Cooked Meat",
    inventory_image = "mobs_animal_meat_cooked.png",
    on_use = minetest.item_eat(6),
})

minetest.register_craftitem("mobs_animal:leather", {
    description = "Leather",
    inventory_image = "mobs_animal_leather.png",
})

minetest.register_craftitem("mobs_animal:egg", {
    description = "Egg",
    inventory_image = "mobs_animal_egg.png",
})

minetest.register_craftitem("mobs_animal:wool", {
    description = "Wool",
    inventory_image = "mobs_animal_wool.png",
})

minetest.register_craft({
    type = "cooking",
    output = "mobs_animal:meat_cooked",
    recipe = "mobs_animal:meat_raw",
})

minetest.register_craft({
    output = "mobs_animal:spawn_egg_pig",
    recipe = {
        {"", "mobs_animal:meat_cooked", ""},
        {"mobs_animal:meat_cooked", "mobs_animal:egg", "mobs_animal:meat_cooked"},
        {"", "mobs_animal:meat_cooked", ""},
    },
})

minetest.register_craft({
    output = "mobs_animal:spawn_egg_cow",
    recipe = {
        {"", "mobs_animal:leather", ""},
        {"mobs_animal:leather", "mobs_animal:egg", "mobs_animal:leather"},
        {"", "mobs_animal:leather", ""},
    },
})

minetest.register_craft({
    output = "mobs_animal:spawn_egg_chicken",
    recipe = {
        {"", "mobs_animal:egg", ""},
        {"mobs_animal:egg", "mobs_animal:egg", "mobs_animal:egg"},
        {"", "mobs_animal:egg", ""},
    },
})

minetest.register_craft({
    output = "mobs_animal:spawn_egg_sheep",
    recipe = {
        {"", "mobs_animal:wool", ""},
        {"mobs_animal:wool", "mobs_animal:egg", "mobs_animal:wool"},
        {"", "mobs_animal:wool", ""},
    },
})`;export{n as default};
