const e=`-- Unified Inventory v1.0 for Luanti Web
-- Inventory: unified bag, crafting guide button

minetest.register_craftitem("unified_inventory:bag_1", {
    description = "Small Bag",
    inventory_image = "unified_inventory_bag_1.png",
    groups = {bag = 1},
})

minetest.register_craftitem("unified_inventory:bag_2", {
    description = "Medium Bag",
    inventory_image = "unified_inventory_bag_2.png",
    groups = {bag = 2},
})

minetest.register_craftitem("unified_inventory:bag_3", {
    description = "Large Bag",
    inventory_image = "unified_inventory_bag_3.png",
    groups = {bag = 3},
})

minetest.register_craftitem("unified_inventory:crafting_guide", {
    description = "Crafting Guide",
    inventory_image = "unified_inventory_crafting_guide.png",
})

minetest.register_craft({
    output = "unified_inventory:bag_1",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:chest", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "unified_inventory:bag_2",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "unified_inventory:bag_1", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "unified_inventory:bag_3",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "unified_inventory:bag_2", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "unified_inventory:crafting_guide",
    recipe = {
        {"default:stick", "default:book", "default:stick"},
        {"default:stick", "default:steel_ingot", "default:stick"},
        {"default:stick", "default:steel_ingot", "default:stick"},
    },
})`;export{e as default};
