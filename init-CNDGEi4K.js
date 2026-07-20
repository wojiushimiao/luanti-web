const e=`-- More Blocks v1.0 for Luanti Web
-- More Blocks: stone brick, circle stone, microblock, slope

minetest.register_node("moreblocks:stone_brick", {
    description = "Stone Brick",
    tiles = {"moreblocks_stone_brick.png"},
    groups = {cracky = 3},
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_node("moreblocks:circle_stone_brick", {
    description = "Circle Stone Brick",
    tiles = {"moreblocks_circle_stone_brick.png"},
    groups = {cracky = 3},
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_node("moreblocks:microblock", {
    description = "Microblock",
    drawtype = "nodebox",
    tiles = {"default_stone.png"},
    node_box = {type = "fixed", fixed = {-0.5, -0.5, -0.5, 0.5, -0.25, 0.5}},
    selection_box = {type = "fixed", fixed = {-0.5, -0.5, -0.5, 0.5, -0.25, 0.5}},
    groups = {cracky = 3},
    paramtype = "light",
})

minetest.register_node("moreblocks:slope", {
    description = "Stone Slope",
    drawtype = "nodebox",
    tiles = {"default_stone.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.5, -0.5, -0.5, 0.5, -0.25, 0.5},
            {-0.5, -0.25, -0.5, 0.5, 0.0, -0.25},
            {-0.5, 0.0, -0.5, 0.5, 0.25, -0.5},
        },
    },
    groups = {cracky = 3},
    paramtype = "light",
})

minetest.register_node("moreblocks:wood_tile", {
    description = "Wood Tile",
    tiles = {"moreblocks_wood_tile.png"},
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    sounds = {footstep = {name = "default_wood_footstep", gain = 0.3}},
})

minetest.register_node("moreblocks:iron_glass", {
    description = "Iron Glass",
    tiles = {"moreblocks_iron_glass.png"},
    drawtype = "glasslike",
    groups = {cracky = 3, oddly_breakable_by_hand = 2},
    sunlight_propagates = true,
    paramtype = "light",
})

minetest.register_craft({
    output = "moreblocks:stone_brick 4",
    recipe = {
        {"default:stone", "default:stone"},
        {"default:stone", "default:stone"},
    },
})

minetest.register_craft({
    output = "moreblocks:circle_stone_brick 4",
    recipe = {
        {"moreblocks:stone_brick", "moreblocks:stone_brick"},
        {"moreblocks:stone_brick", "moreblocks:stone_brick"},
    },
})

minetest.register_craft({
    output = "moreblocks:wood_tile 4",
    recipe = {
        {"default:wood", "default:wood"},
        {"default:wood", "default:wood"},
    },
})

minetest.register_craft({
    output = "moreblocks:iron_glass 4",
    recipe = {
        {"default:steel_ingot", "default:glass", "default:steel_ingot"},
        {"default:glass", "", "default:glass"},
        {"default:steel_ingot", "default:glass", "default:steel_ingot"},
    },
})`;export{e as default};
