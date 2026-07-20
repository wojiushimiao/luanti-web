const n=`-- Farming Redo v1.0 for Luanti Web
-- Farming: soil, wheat seed, wheat plant, bread

minetest.register_node("farming:soil", {
    description = "Soil",
    tiles = {"default_dirt.png^farming_soil.png", "default_dirt.png", "default_dirt.png", "default_dirt.png", "default_dirt.png", "default_dirt.png"},
    groups = {crumbly = 3, soil = 3},
    sounds = {footstep = {name = "default_dirt_footstep", gain = 0.4}},
})

minetest.register_node("farming:soil_wet", {
    description = "Wet Soil",
    tiles = {"default_dirt.png^farming_soil_wet.png", "default_dirt.png", "default_dirt.png", "default_dirt.png", "default_dirt.png", "default_dirt.png"},
    groups = {crumbly = 3, soil = 3, not_in_creative_inventory = 1},
    sounds = {footstep = {name = "default_dirt_footstep", gain = 0.4}},
    drop = "farming:soil",
})

minetest.register_craftitem("farming:seed_wheat", {
    description = "Wheat Seed",
    inventory_image = "farming_wheat_seed.png",
    groups = {seed = 1, snappy = 3},
})

minetest.register_node("farming:wheat_1", {
    description = "Wheat (Stage 1)",
    drawtype = "plantlike",
    tiles = {"farming_wheat_1.png"},
    paramtype = "light",
    walkable = false,
    groups = {flora = 1, not_in_creative_inventory = 1},
    drop = "farming:seed_wheat",
    selection_box = {type = "fixed", fixed = {-0.3, -0.5, -0.3, 0.3, 0.1, 0.3}},
})

minetest.register_node("farming:wheat_2", {
    description = "Wheat (Stage 2)",
    drawtype = "plantlike",
    tiles = {"farming_wheat_2.png"},
    paramtype = "light",
    walkable = false,
    groups = {flora = 1, not_in_creative_inventory = 1},
    drop = "farming:seed_wheat",
    selection_box = {type = "fixed", fixed = {-0.3, -0.5, -0.3, 0.3, 0.2, 0.3}},
})

minetest.register_node("farming:wheat_3", {
    description = "Wheat (Stage 3)",
    drawtype = "plantlike",
    tiles = {"farming_wheat_3.png"},
    paramtype = "light",
    walkable = false,
    groups = {flora = 1, not_in_creative_inventory = 1},
    drop = "farming:wheat",
    selection_box = {type = "fixed", fixed = {-0.3, -0.5, -0.3, 0.3, 0.4, 0.3}},
})

minetest.register_craftitem("farming:wheat", {
    description = "Wheat",
    inventory_image = "farming_wheat.png",
    groups = {food_wheat = 1},
})

minetest.register_craftitem("farming:flour", {
    description = "Flour",
    inventory_image = "farming_flour.png",
})

minetest.register_craftitem("farming:bread", {
    description = "Bread",
    inventory_image = "farming_bread.png",
    on_use = minetest.item_eat(5),
})

minetest.register_craft({
    output = "farming:flour",
    recipe = {
        {"farming:wheat", "farming:wheat", "farming:wheat"},
    },
})

minetest.register_craft({
    type = "cooking",
    output = "farming:bread",
    recipe = "farming:flour",
})

minetest.register_craft({
    output = "farming:soil",
    recipe = {
        {"default:dirt", "default:dirt", "default:dirt"},
    },
})`;export{n as default};
