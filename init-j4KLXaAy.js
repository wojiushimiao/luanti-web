const e=`-- 3D Armor v1.0 for Luanti Web
-- 3D Armor: wood helmet, wood chestplate, wood leggings, wood boots

minetest.register_tool("3d_armor:helmet_wood", {
    description = "Wood Helmet",
    inventory_image = "3d_armor_helmet_wood.png",
    groups = {armor_head = 1, armor_heal = 0, armor_use = 200},
})

minetest.register_tool("3d_armor:chestplate_wood", {
    description = "Wood Chestplate",
    inventory_image = "3d_armor_chestplate_wood.png",
    groups = {armor_torso = 1, armor_heal = 0, armor_use = 200},
})

minetest.register_tool("3d_armor:leggings_wood", {
    description = "Wood Leggings",
    inventory_image = "3d_armor_leggings_wood.png",
    groups = {armor_legs = 1, armor_heal = 0, armor_use = 200},
})

minetest.register_tool("3d_armor:boots_wood", {
    description = "Wood Boots",
    inventory_image = "3d_armor_boots_wood.png",
    groups = {armor_feet = 1, armor_heal = 0, armor_use = 200},
})

minetest.register_tool("3d_armor:helmet_steel", {
    description = "Steel Helmet",
    inventory_image = "3d_armor_helmet_steel.png",
    groups = {armor_head = 3, armor_heal = 0, armor_use = 500},
})

minetest.register_tool("3d_armor:chestplate_steel", {
    description = "Steel Chestplate",
    inventory_image = "3d_armor_chestplate_steel.png",
    groups = {armor_torso = 3, armor_heal = 0, armor_use = 500},
})

minetest.register_tool("3d_armor:leggings_steel", {
    description = "Steel Leggings",
    inventory_image = "3d_armor_leggings_steel.png",
    groups = {armor_legs = 3, armor_heal = 0, armor_use = 500},
})

minetest.register_tool("3d_armor:boots_steel", {
    description = "Steel Boots",
    inventory_image = "3d_armor_boots_steel.png",
    groups = {armor_feet = 3, armor_heal = 0, armor_use = 500},
})

minetest.register_craft({
    output = "3d_armor:helmet_wood",
    recipe = {
        {"default:wood", "default:wood", "default:wood"},
        {"default:wood", "", "default:wood"},
    },
})

minetest.register_craft({
    output = "3d_armor:chestplate_wood",
    recipe = {
        {"default:wood", "", "default:wood"},
        {"default:wood", "default:wood", "default:wood"},
        {"default:wood", "default:wood", "default:wood"},
    },
})

minetest.register_craft({
    output = "3d_armor:leggings_wood",
    recipe = {
        {"default:wood", "default:wood", "default:wood"},
        {"default:wood", "", "default:wood"},
        {"default:wood", "", "default:wood"},
    },
})

minetest.register_craft({
    output = "3d_armor:boots_wood",
    recipe = {
        {"default:wood", "", "default:wood"},
        {"default:wood", "", "default:wood"},
    },
})

minetest.register_craft({
    output = "3d_armor:helmet_steel",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "3d_armor:chestplate_steel",
    recipe = {
        {"default:steel_ingot", "", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "3d_armor:leggings_steel",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "", "default:steel_ingot"},
        {"default:steel_ingot", "", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "3d_armor:boots_steel",
    recipe = {
        {"default:steel_ingot", "", "default:steel_ingot"},
        {"default:steel_ingot", "", "default:steel_ingot"},
    },
})`;export{e as default};
