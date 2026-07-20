const e=`-- X-Decor v1.0 for Luanti Web
-- X-Decor: chair, table, lantern, mailbox, calendar, rope

minetest.register_node("xdecor:chair", {
    description = "Chair",
    drawtype = "nodebox",
    tiles = {"xdecor_chair.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.3, -0.5, -0.3, -0.2, 0.0, -0.2},
            {0.2, -0.5, -0.3, 0.3, 0.0, -0.2},
            {-0.3, -0.5, 0.2, -0.2, 0.0, 0.3},
            {0.2, -0.5, 0.2, 0.3, 0.0, 0.3},
            {-0.3, 0.0, -0.3, 0.3, 0.1, 0.3},
            {-0.3, 0.1, 0.2, 0.3, 0.4, 0.3},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_node("xdecor:table", {
    description = "Table",
    drawtype = "nodebox",
    tiles = {"xdecor_table.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.4, -0.5, -0.4, -0.3, 0.35, -0.3},
            {0.3, -0.5, -0.4, 0.4, 0.35, -0.3},
            {-0.4, -0.5, 0.3, -0.3, 0.35, 0.4},
            {0.3, -0.5, 0.3, 0.4, 0.35, 0.4},
            {-0.5, 0.35, -0.5, 0.5, 0.45, 0.5},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
})

minetest.register_node("xdecor:lantern", {
    description = "Lantern",
    drawtype = "plantlike",
    tiles = {"xdecor_lantern.png"},
    walkable = false,
    groups = {cracky = 2, oddly_breakable_by_hand = 2},
    light_source = 12,
    paramtype = "light",
    selection_box = {type = "fixed", fixed = {-0.15, -0.5, -0.15, 0.15, 0.3, 0.15}},
})

minetest.register_node("xdecor:mailbox", {
    description = "Mailbox",
    drawtype = "nodebox",
    tiles = {"xdecor_mailbox.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.1, -0.5, -0.1, 0.1, 0.0, 0.1},
            {-0.3, 0.0, -0.3, 0.3, 0.4, 0.3},
            {-0.35, 0.4, -0.35, 0.35, 0.5, 0.35},
        },
    },
    groups = {cracky = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_node("xdecor:calendar", {
    description = "Calendar",
    tiles = {"xdecor_calendar.png"},
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype2 = "facedir",
})

minetest.register_node("xdecor:rope", {
    description = "Rope",
    drawtype = "plantlike",
    tiles = {"xdecor_rope.png"},
    walkable = false,
    climbable = true,
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
    selection_box = {type = "fixed", fixed = {-0.1, -0.5, -0.1, 0.1, 0.5, 0.1}},
})

minetest.register_node("xdecor:workbench", {
    description = "Workbench",
    tiles = {"xdecor_workbench_top.png", "xdecor_workbench_bottom.png", "xdecor_workbench_side.png", "xdecor_workbench_side.png", "xdecor_workbench_side.png", "xdecor_workbench_front.png"},
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype2 = "facedir",
})

minetest.register_craft({
    output = "xdecor:chair",
    recipe = {
        {"default:stick", "", "default:stick"},
        {"default:stick", "default:wood", "default:stick"},
        {"default:wood", "", "default:wood"},
    },
})

minetest.register_craft({
    output = "xdecor:table",
    recipe = {
        {"default:wood", "default:wood", "default:wood"},
        {"", "default:stick", ""},
        {"", "default:stick", ""},
    },
})

minetest.register_craft({
    output = "xdecor:lantern",
    recipe = {
        {"default:steel_ingot", "default:torch", "default:steel_ingot"},
        {"", "default:glass", ""},
        {"", "default:steel_ingot", ""},
    },
})

minetest.register_craft({
    output = "xdecor:mailbox",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "xdecor:rope 4",
    recipe = {
        {"farming:cotton", "farming:cotton", "farming:cotton"},
    },
})

minetest.register_craft({
    output = "xdecor:workbench",
    recipe = {
        {"default:wood", "default:wood", "default:wood"},
        {"default:wood", "default:steel_ingot", "default:wood"},
        {"default:wood", "default:wood", "default:wood"},
    },
})`;export{e as default};
