const e=`-- Technic v1.0 for Luanti Web
-- Industrial: generator, battery box, electric furnace, alloy furnace

minetest.register_node("technic:generator", {
    description = "LV Generator",
    tiles = {"technic_generator_top.png", "technic_generator_bottom.png", "technic_generator_side.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("technic:generator_mv", {
    description = "MV Generator",
    tiles = {"technic_generator_mv_top.png", "technic_generator_mv_bottom.png", "technic_generator_mv_side.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("technic:battery_box", {
    description = "LV Battery Box",
    tiles = {"technic_battery_box_top.png", "technic_battery_box_bottom.png", "technic_battery_box_side.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("technic:battery_box_mv", {
    description = "MV Battery Box",
    tiles = {"technic_battery_box_mv_top.png", "technic_battery_box_mv_bottom.png", "technic_battery_box_mv_side.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("technic:electric_furnace", {
    description = "Electric Furnace",
    tiles = {"technic_electric_furnace_top.png", "technic_electric_furnace_bottom.png", "technic_electric_furnace_side.png", "technic_electric_furnace_side.png", "technic_electric_furnace_side.png", "technic_electric_furnace_front.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("technic:alloy_furnace", {
    description = "Alloy Furnace",
    tiles = {"technic_alloy_furnace_top.png", "technic_alloy_furnace_bottom.png", "technic_alloy_furnace_side.png", "technic_alloy_furnace_side.png", "technic_alloy_furnace_side.png", "technic_alloy_furnace_front.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("technic:mv_alloy_furnace", {
    description = "MV Alloy Furnace",
    tiles = {"technic_mv_alloy_furnace_top.png", "technic_mv_alloy_furnace_bottom.png", "technic_mv_alloy_furnace_side.png", "technic_mv_alloy_furnace_side.png", "technic_mv_alloy_furnace_side.png", "technic_mv_alloy_furnace_front.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_craft({
    output = "technic:generator",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "technic:battery_box", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "technic:battery_box",
    recipe = {
        {"default:steel_ingot", "default:copper_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:copper_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:copper_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "technic:electric_furnace",
    recipe = {
        {"default:brick", "default:brick", "default:brick"},
        {"default:brick", "default:mese_crystal", "default:brick"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})`;export{e as default};
