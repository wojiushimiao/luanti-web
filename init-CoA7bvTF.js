const e=`-- Home Decor Modpack v1.0 for Luanti Web
-- Home Decor: chair, table, lamp, bookshelf, sofa

minetest.register_node("homedecor_modpack:chair", {
    description = "Wooden Chair",
    drawtype = "nodebox",
    tiles = {"default_wood.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.3, -0.5, -0.3, -0.2, 0.0, -0.2},
            {0.2, -0.5, -0.3, 0.3, 0.0, -0.2},
            {-0.3, -0.5, 0.2, -0.2, 0.0, 0.3},
            {0.2, -0.5, 0.2, 0.3, 0.0, 0.3},
            {-0.3, 0.0, -0.3, 0.3, 0.1, 0.3},
            {-0.3, 0.1, 0.2, 0.3, 0.5, 0.3},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_node("homedecor_modpack:table", {
    description = "Wooden Table",
    drawtype = "nodebox",
    tiles = {"default_wood.png"},
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

minetest.register_node("homedecor_modpack:lamp", {
    description = "Table Lamp",
    drawtype = "nodebox",
    tiles = {"homedecor_lamp_base.png", "homedecor_lamp_base.png", "homedecor_lamp_base.png", "homedecor_lamp_base.png", "homedecor_lamp_base.png", "homedecor_lamp_shade.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.1, -0.5, -0.1, 0.1, -0.2, 0.1},
            {-0.15, -0.2, -0.15, 0.15, 0.2, 0.15},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    light_source = 10,
    paramtype = "light",
})

minetest.register_node("homedecor_modpack:bookshelf", {
    description = "Bookshelf",
    tiles = {"default_wood.png", "default_wood.png", "homedecor_bookshelf.png"},
    groups = {choppy = 3, oddly_breakable_by_hand = 2},
})

minetest.register_node("homedecor_modpack:sofa", {
    description = "Sofa",
    drawtype = "nodebox",
    tiles = {"homedecor_sofa.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.5, -0.5, -0.5, 0.5, 0.0, 0.5},
            {-0.5, 0.0, -0.5, 0.5, 0.4, 0.0},
            {-0.5, 0.0, 0.0, -0.35, 0.4, 0.5},
            {0.35, 0.0, 0.0, 0.5, 0.4, 0.5},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_craft({
    output = "homedecor_modpack:chair",
    recipe = {
        {"default:stick", "", "default:stick"},
        {"default:stick", "default:wood", "default:stick"},
        {"default:wood", "", "default:wood"},
    },
})

minetest.register_craft({
    output = "homedecor_modpack:table",
    recipe = {
        {"default:wood", "default:wood", "default:wood"},
        {"", "default:stick", ""},
        {"", "default:stick", ""},
    },
})

minetest.register_craft({
    output = "homedecor_modpack:lamp",
    recipe = {
        {"", "default:torch", ""},
        {"", "default:steel_ingot", ""},
        {"", "default:wood", ""},
    },
})

minetest.register_craft({
    output = "homedecor_modpack:bookshelf",
    recipe = {
        {"default:wood", "default:wood", "default:wood"},
        {"default:book", "default:book", "default:book"},
        {"default:wood", "default:wood", "default:wood"},
    },
})`;export{e as default};
