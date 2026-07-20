const e=`-- Digilines v1.0 for Luanti Web
-- Digital lines: digiline wire, LCD screen, light sensor, RTC

minetest.register_node("digilines:wire", {
    description = "Digiline Wire",
    drawtype = "nodebox",
    tiles = {"digilines_wire.png"},
    node_box = {
        type = "connected",
        fixed = {-0.125, -0.125, -0.125, 0.125, 0.125, 0.125},
        connect_front = {-0.125, -0.125, -0.125, 0.125, 0.125, 0.125},
        connect_back = {-0.125, -0.125, -0.125, 0.125, 0.125, 0.125},
        connect_left = {-0.125, -0.125, -0.125, 0.125, 0.125, 0.125},
        connect_right = {-0.125, -0.125, -0.125, 0.125, 0.125, 0.125},
        connect_bottom = {-0.125, -0.125, -0.125, 0.125, 0.125, 0.125},
        connect_top = {-0.125, -0.125, -0.125, 0.125, 0.125, 0.125},
    },
    walkable = false,
    groups = {dig_immediate = 3},
    paramtype = "light",
})

minetest.register_node("digilines:lcd", {
    description = "LCD Screen",
    tiles = {"digilines_lcd.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("digilines:light_sensor", {
    description = "Light Sensor",
    tiles = {"digilines_light_sensor_top.png", "digilines_light_sensor_bottom.png", "digilines_light_sensor_side.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("digilines:rtc", {
    description = "Real-Time Clock",
    tiles = {"digilines_rtc_top.png", "digilines_rtc_bottom.png", "digilines_rtc_side.png"},
    groups = {cracky = 2},
})

minetest.register_node("digilines:keyboard", {
    description = "Digiline Keyboard",
    tiles = {"digilines_keyboard.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_craft({
    output = "digilines:wire 6",
    recipe = {
        {"default:steel_ingot", "default:mese_crystal", "default:steel_ingot"},
        {"default:steel_ingot", "default:mese_crystal", "default:steel_ingot"},
        {"default:steel_ingot", "default:mese_crystal", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "digilines:lcd",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:glass", "default:steel_ingot"},
        {"default:steel_ingot", "digilines:wire", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "digilines:light_sensor",
    recipe = {
        {"default:steel_ingot", "default:glass", "default:steel_ingot"},
        {"default:steel_ingot", "default:mese_crystal", "default:steel_ingot"},
        {"default:steel_ingot", "digilines:wire", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "digilines:rtc",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:gold_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "digilines:wire", "default:steel_ingot"},
    },
})`;export{e as default};
