const n=`-- Advanced Trains v1.0 for Luanti Web
-- Advanced Trains: rail, signal, platform, train wagon

minetest.register_node("advtrains:rail", {
    description = "Rail",
    drawtype = "raillike",
    tiles = {"advtrains_rail.png"},
    inventory_image = "advtrains_rail.png",
    wield_image = "advtrains_rail.png",
    paramtype = "light",
    walkable = false,
    selection_box = {type = "fixed", fixed = {-0.5, -0.5, -0.5, 0.5, -0.45, 0.5}},
    groups = {dig_immediate = 2},
})

minetest.register_node("advtrains:rail_y", {
    description = "Rail (Y-turn)",
    drawtype = "raillike",
    tiles = {"advtrains_rail_y.png"},
    inventory_image = "advtrains_rail_y.png",
    wield_image = "advtrains_rail_y.png",
    paramtype = "light",
    walkable = false,
    selection_box = {type = "fixed", fixed = {-0.5, -0.5, -0.5, 0.5, -0.45, 0.5}},
    groups = {dig_immediate = 2, not_in_creative_inventory = 1},
    drop = "advtrains:rail",
})

minetest.register_node("advtrains:signal", {
    description = "Signal",
    drawtype = "nodebox",
    tiles = {"advtrains_signal.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.05, -0.5, -0.05, 0.05, 0.3, 0.05},
            {-0.15, 0.3, -0.15, 0.15, 0.5, 0.15},
        },
    },
    groups = {cracky = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_node("advtrains:platform", {
    description = "Platform",
    tiles = {"advtrains_platform_top.png", "advtrains_platform_bottom.png", "advtrains_platform_side.png"},
    groups = {cracky = 2},
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_node("advtrains:platform_yellow", {
    description = "Platform (Yellow Line)",
    tiles = {"advtrains_platform_yellow_top.png", "advtrains_platform_bottom.png", "advtrains_platform_side.png"},
    groups = {cracky = 2},
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_craftitem("advtrains:wagon", {
    description = "Train Wagon",
    inventory_image = "advtrains_wagon.png",
})

minetest.register_craftitem("advtrains:locomotive", {
    description = "Locomotive",
    inventory_image = "advtrains_locomotive.png",
})

minetest.register_craftitem("advtrains:wagon_tank", {
    description = "Tank Wagon",
    inventory_image = "advtrains_wagon_tank.png",
})

minetest.register_craftitem("advtrains:wagon_cargo", {
    description = "Cargo Wagon",
    inventory_image = "advtrains_wagon_cargo.png",
})

minetest.register_craft({
    output = "advtrains:rail 3",
    recipe = {
        {"default:steel_ingot", "", "default:steel_ingot"},
        {"default:steel_ingot", "default:stick", "default:steel_ingot"},
        {"default:steel_ingot", "", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "advtrains:signal",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:torch", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "advtrains:platform 4",
    recipe = {
        {"default:stone", "default:stone", "default:stone"},
        {"default:stone", "", "default:stone"},
        {"default:stone", "default:stone", "default:stone"},
    },
})

minetest.register_craft({
    output = "advtrains:wagon",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:wood", "default:steel_ingot"},
        {"default:steel_ingot", "advtrains:rail", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "advtrains:locomotive",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:furnace", "default:steel_ingot"},
        {"default:steel_ingot", "advtrains:rail", "default:steel_ingot"},
    },
})`;export{n as default};
