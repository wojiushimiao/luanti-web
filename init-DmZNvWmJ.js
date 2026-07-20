const e=`-- Ethereal v1.0 for Luanti Web
-- Ethereal: crystal dirt, crystal spike, willows, frost leave

minetest.register_node("ethereal:crystal_dirt", {
    description = "Crystal Dirt",
    tiles = {"ethereal_crystal_dirt.png"},
    groups = {crumbly = 3, soil = 1},
    sounds = {footstep = {name = "default_dirt_footstep", gain = 0.4}},
})

minetest.register_node("ethereal:crystal_spike", {
    description = "Crystal Spike",
    drawtype = "plantlike",
    tiles = {"ethereal_crystal_spike.png"},
    walkable = false,
    groups = {cracky = 3, pickaxey = 2},
    light_source = 4,
    paramtype = "light",
    selection_box = {type = "fixed", fixed = {-0.2, -0.5, -0.2, 0.2, 0.3, 0.2}},
})

minetest.register_node("ethereal:willow_trunk", {
    description = "Willow Trunk",
    tiles = {"ethereal_willow_trunk_top.png", "ethereal_willow_trunk_top.png", "ethereal_willow_trunk.png"},
    groups = {choppy = 2, tree = 1, oddly_breakable_by_hand = 2},
    paramtype2 = "facedir",
})

minetest.register_node("ethereal:willow_wood", {
    description = "Willow Wood",
    tiles = {"ethereal_willow_wood.png"},
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
})

minetest.register_node("ethereal:willow_leaves", {
    description = "Willow Leaves",
    drawtype = "allfaces_optional",
    tiles = {"ethereal_willow_leaves.png"},
    paramtype = "light",
    groups = {snappy = 3, leafdecay = 3, leaves = 1},
    sunlight_propagates = true,
})

minetest.register_node("ethereal:frost_leave", {
    description = "Frost Leave",
    drawtype = "allfaces_optional",
    tiles = {"ethereal_frost_leave.png"},
    paramtype = "light",
    groups = {snappy = 3, leafdecay = 3, leaves = 1, puts_out_fire = 1},
    sunlight_propagates = true,
})

minetest.register_node("ethereal:crystal_grass", {
    description = "Crystal Grass",
    drawtype = "plantlike",
    tiles = {"ethereal_crystal_grass.png"},
    walkable = false,
    paramtype = "light",
    groups = {snappy = 3, flora = 1},
    selection_box = {type = "fixed", fixed = {-0.3, -0.5, -0.3, 0.3, -0.2, 0.3}},
})

minetest.register_node("ethereal:dry_dirt", {
    description = "Dry Dirt",
    tiles = {"ethereal_dry_dirt.png"},
    groups = {crumbly = 3},
    sounds = {footstep = {name = "default_dirt_footstep", gain = 0.4}},
})

minetest.register_craft({
    output = "ethereal:willow_wood 4",
    recipe = {
        {"ethereal:willow_trunk"},
    },
})

minetest.register_craft({
    type = "cooking",
    output = "default:glass",
    recipe = "ethereal:crystal_dirt",
})`;export{e as default};
