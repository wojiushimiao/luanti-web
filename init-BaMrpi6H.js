const n=`-- i3 Inventory v1.0 for Luanti Web
-- i3 Inventory: basic inventory UI, search bar, creative tab

minetest.register_craftitem("i3:search_bar", {
    description = "Search Bar",
    inventory_image = "i3_search_bar.png",
})

minetest.register_node("i3:creative_tab", {
    description = "Creative Tab",
    tiles = {"i3_creative_tab.png"},
    groups = {cracky = 2, not_in_creative_inventory = 1},
})

minetest.register_node("i3:survival_tab", {
    description = "Survival Tab",
    tiles = {"i3_survival_tab.png"},
    groups = {cracky = 2, not_in_creative_inventory = 1},
})

minetest.register_node("i3:armor_tab", {
    description = "Armor Tab",
    tiles = {"i3_armor_tab.png"},
    groups = {cracky = 2, not_in_creative_inventory = 1},
})

minetest.register_node("i3:skins_tab", {
    description = "Skins Tab",
    tiles = {"i3_skins_tab.png"},
    groups = {cracky = 2, not_in_creative_inventory = 1},
})

minetest.register_node("i3:waypoints_tab", {
    description = "Waypoints Tab",
    tiles = {"i3_waypoints_tab.png"},
    groups = {cracky = 2, not_in_creative_inventory = 1},
})

minetest.register_chatcommand("i3", {
    description = "Open the i3 inventory",
    privs = {interact = true},
    func = function(name)
        return true, "i3 inventory opened for " .. name
    end,
})

minetest.register_craft({
    output = "i3:search_bar",
    recipe = {
        {"default:stick", "default:glass", "default:stick"},
        {"default:stick", "default:book", "default:stick"},
        {"default:stick", "default:stick", "default:stick"},
    },
})`;export{n as default};
