const e=`-- More Ores v1.0 for Luanti Web
-- More Ores: silver ore, tin ore, mithril ore, silver ingot, tin ingot

minetest.register_node("moreores:mineral_silver", {
    description = "Silver Ore",
    tiles = {"default_stone.png^moreores_mineral_silver.png"},
    groups = {cracky = 3},
    drop = "moreores:silver_lump",
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_node("moreores:mineral_tin", {
    description = "Tin Ore",
    tiles = {"default_stone.png^moreores_mineral_tin.png"},
    groups = {cracky = 3},
    drop = "moreores:tin_lump",
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_node("moreores:mineral_mithril", {
    description = "Mithril Ore",
    tiles = {"default_stone.png^moreores_mineral_mithril.png"},
    groups = {cracky = 3},
    drop = "moreores:mithril_lump",
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_craftitem("moreores:silver_lump", {
    description = "Silver Lump",
    inventory_image = "moreores_silver_lump.png",
})

minetest.register_craftitem("moreores:tin_lump", {
    description = "Tin Lump",
    inventory_image = "moreores_tin_lump.png",
})

minetest.register_craftitem("moreores:mithril_lump", {
    description = "Mithril Lump",
    inventory_image = "moreores_mithril_lump.png",
})

minetest.register_craftitem("moreores:silver_ingot", {
    description = "Silver Ingot",
    inventory_image = "moreores_silver_ingot.png",
})

minetest.register_craftitem("moreores:tin_ingot", {
    description = "Tin Ingot",
    inventory_image = "moreores_tin_ingot.png",
})

minetest.register_craftitem("moreores:mithril_ingot", {
    description = "Mithril Ingot",
    inventory_image = "moreores_mithril_ingot.png",
})

minetest.register_craftitem("moreores:bronze_ingot", {
    description = "Bronze Ingot",
    inventory_image = "moreores_bronze_ingot.png",
})

minetest.register_node("moreores:silver_block", {
    description = "Silver Block",
    tiles = {"moreores_silver_block.png"},
    groups = {cracky = 2},
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_node("moreores:tin_block", {
    description = "Tin Block",
    tiles = {"moreores_tin_block.png"},
    groups = {cracky = 2},
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_node("moreores:mithril_block", {
    description = "Mithril Block",
    tiles = {"moreores_mithril_block.png"},
    groups = {cracky = 2},
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_craft({
    type = "cooking",
    output = "moreores:silver_ingot",
    recipe = "moreores:silver_lump",
})

minetest.register_craft({
    type = "cooking",
    output = "moreores:tin_ingot",
    recipe = "moreores:tin_lump",
})

minetest.register_craft({
    type = "cooking",
    output = "moreores:mithril_ingot",
    recipe = "moreores:mithril_lump",
})

minetest.register_craft({
    output = "moreores:bronze_ingot 3",
    recipe = {
        {"moreores:tin_ingot", "moreores:tin_ingot", "moreores:tin_ingot"},
        {"moreores:silver_ingot", "moreores:silver_ingot", "moreores:silver_ingot"},
    },
})

minetest.register_craft({
    output = "moreores:silver_block",
    recipe = {
        {"moreores:silver_ingot", "moreores:silver_ingot", "moreores:silver_ingot"},
        {"moreores:silver_ingot", "moreores:silver_ingot", "moreores:silver_ingot"},
        {"moreores:silver_ingot", "moreores:silver_ingot", "moreores:silver_ingot"},
    },
})

minetest.register_craft({
    output = "moreores:tin_block",
    recipe = {
        {"moreores:tin_ingot", "moreores:tin_ingot", "moreores:tin_ingot"},
        {"moreores:tin_ingot", "moreores:tin_ingot", "moreores:tin_ingot"},
        {"moreores:tin_ingot", "moreores:tin_ingot", "moreores:tin_ingot"},
    },
})`;export{e as default};
