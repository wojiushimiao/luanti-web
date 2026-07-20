const e=`-- Pipeworks v1.0 for Luanti Web
-- Pipes: transport pipe, filter, injector, sorting tube

minetest.register_node("pipeworks:pipe", {
    description = "Transport Pipe",
    drawtype = "nodebox",
    tiles = {"pipeworks_pipe.png"},
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
    groups = {cracky = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
})

minetest.register_node("pipeworks:filter", {
    description = "Filter",
    tiles = {"pipeworks_filter_top.png", "pipeworks_filter_bottom.png", "pipeworks_filter_side.png", "pipeworks_filter_side.png", "pipeworks_filter_side.png", "pipeworks_filter_front.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("pipeworks:injector", {
    description = "Injector",
    tiles = {"pipeworks_injector_top.png", "pipeworks_injector_bottom.png", "pipeworks_injector_side.png", "pipeworks_injector_side.png", "pipeworks_injector_side.png", "pipeworks_injector_front.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("pipeworks:sorting_tube", {
    description = "Sorting Tube",
    drawtype = "nodebox",
    tiles = {"pipeworks_sorting_tube.png"},
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
    groups = {cracky = 2, oddly_breakable_by_hand = 2},
    paramtype = "light",
})

minetest.register_craft({
    output = "pipeworks:pipe 6",
    recipe = {
        {"default:steel_ingot", "", "default:steel_ingot"},
        {"default:steel_ingot", "", "default:steel_ingot"},
        {"default:steel_ingot", "", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "pipeworks:filter",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:mese_crystal", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "pipeworks:injector",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
        {"default:steel_ingot", "default:chest", "default:steel_ingot"},
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})`;export{e as default};
