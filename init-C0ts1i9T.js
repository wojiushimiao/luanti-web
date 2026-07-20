const t=`-- Protector v1.0 for Luanti Web
-- Protection: protector block, protector logo, protection radius

minetest.register_node("protector:protect", {
    description = "Protector Block",
    tiles = {"protector_top.png", "protector_bottom.png", "protector_side.png"},
    groups = {cracky = 2},
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_node("protector:protect2", {
    description = "Protector Block (Radius 2)",
    tiles = {"protector_top2.png", "protector_bottom2.png", "protector_side2.png"},
    groups = {cracky = 2},
    sounds = {footstep = {name = "default_stone_footstep", gain = 0.3}},
})

minetest.register_node("protector:logo", {
    description = "Protector Logo",
    drawtype = "nodebox",
    tiles = {"protector_logo.png", "protector_logo.png", "protector_logo.png", "protector_logo.png", "protector_logo.png", "protector_logo.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.45, -0.45, -0.45, 0.45, -0.4, 0.45},
            {-0.1, -0.4, -0.1, 0.1, 0.1, 0.1},
            {-0.4, 0.1, 0.0, 0.4, 0.15, 0.05},
            {0.0, 0.1, -0.4, 0.05, 0.15, 0.4},
        },
    },
    groups = {cracky = 2, oddly_breakable_by_hand = 1},
    paramtype = "light",
})

minetest.register_craftitem("protector:delprotect", {
    description = "Protection Removal Tool",
    inventory_image = "protector_delprotect.png",
})

minetest.register_craft({
    output = "protector:protect",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:mese_crystal", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "protector:protect2",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "protector:protect", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "protector:logo",
    recipe = {
        {"default:steel_ingot", "protector:protect", "default:steel_ingot"},
        {"protector:protect", "default:steel_ingot", "protector:protect"},
        {"default:steel_ingot", "protector:protect", "default:steel_ingot"},
    },
})`;export{t as default};
