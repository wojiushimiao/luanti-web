const n=`-- Signs Lib v1.0 for Luanti Web
-- Signs: wooden sign, steel sign, hanging sign, colored sign

minetest.register_node("signs_lib:sign_wood", {
    description = "Wooden Sign",
    drawtype = "nodebox",
    tiles = {"default_wood.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.45, -0.3, 0.45, 0.45, 0.3, 0.5},
            {-0.05, -0.5, 0.45, 0.05, 0.5, 0.5},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_node("signs_lib:sign_steel", {
    description = "Steel Sign",
    drawtype = "nodebox",
    tiles = {"default_steel_block.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.45, -0.3, 0.45, 0.45, 0.3, 0.5},
            {-0.05, -0.5, 0.45, 0.05, 0.5, 0.5},
        },
    },
    groups = {cracky = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_node("signs_lib:sign_hanging", {
    description = "Hanging Sign",
    drawtype = "nodebox",
    tiles = {"default_wood.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.45, 0.2, -0.05, 0.45, 0.4, 0.05},
            {0.0, 0.4, 0.0, 0.0, 0.5, 0.0},
            {-0.45, 0.0, -0.05, 0.45, 0.2, 0.05},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
})

minetest.register_node("signs_lib:sign_white", {
    description = "White Sign",
    drawtype = "nodebox",
    tiles = {"signs_lib_sign_white.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.45, -0.3, 0.45, 0.45, 0.3, 0.5},
            {-0.05, -0.5, 0.45, 0.05, 0.5, 0.5},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_node("signs_lib:sign_red", {
    description = "Red Sign",
    drawtype = "nodebox",
    tiles = {"signs_lib_sign_red.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.45, -0.3, 0.45, 0.45, 0.3, 0.5},
            {-0.05, -0.5, 0.45, 0.05, 0.5, 0.5},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_node("signs_lib:sign_blue", {
    description = "Blue Sign",
    drawtype = "nodebox",
    tiles = {"signs_lib_sign_blue.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.45, -0.3, 0.45, 0.45, 0.3, 0.5},
            {-0.05, -0.5, 0.45, 0.05, 0.5, 0.5},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_node("signs_lib:sign_yellow", {
    description = "Yellow Sign",
    drawtype = "nodebox",
    tiles = {"signs_lib_sign_yellow.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.45, -0.3, 0.45, 0.45, 0.3, 0.5},
            {-0.05, -0.5, 0.45, 0.05, 0.5, 0.5},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_node("signs_lib:sign_green", {
    description = "Green Sign",
    drawtype = "nodebox",
    tiles = {"signs_lib_sign_green.png"},
    node_box = {
        type = "fixed",
        fixed = {
            {-0.45, -0.3, 0.45, 0.45, 0.3, 0.5},
            {-0.05, -0.5, 0.45, 0.05, 0.5, 0.5},
        },
    },
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
    paramtype2 = "facedir",
})

minetest.register_craft({
    output = "signs_lib:sign_wood",
    recipe = {
        {"default:wood", "default:wood", "default:wood"},
        {"default:wood", "default:wood", "default:wood"},
        {"", "default:stick", ""},
    },
})

minetest.register_craft({
    output = "signs_lib:sign_steel",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"", "default:stick", ""},
    },
})

minetest.register_craft({
    output = "signs_lib:sign_hanging",
    recipe = {
        {"default:chain", "default:chain", "default:chain"},
        {"default:wood", "default:wood", "default:wood"},
        {"default:wood", "default:wood", "default:wood"},
    },
})`;export{n as default};
