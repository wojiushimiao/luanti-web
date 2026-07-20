const e=`-- Mesecons v1.0 for Luanti Web
-- Digital circuits: mesecon wire, switch, lamp, piston

minetest.register_node("mesecons:wire", {
    description = "Mesecon Wire",
    drawtype = "raillike",
    tiles = {"mesecons_wire.png"},
    inventory_image = "mesecons_wire_inv.png",
    wield_image = "mesecons_wire_inv.png",
    paramtype = "light",
    walkable = false,
    selection_box = {type = "fixed", fixed = {-0.5, -0.5, -0.5, 0.5, -0.45, 0.5}},
    groups = {dig_immediate = 3},
})

minetest.register_node("mesecons:switch", {
    description = "Mesecon Switch",
    tiles = {"default_wood.png^mesecons_switch_off.png"},
    groups = {choppy = 2, oddly_breakable_by_hand = 2},
    on_rightclick = function(pos, node, clicker)
        local name = node.name
        if name == "mesecons:switch_off" then
            minetest.swap_node(pos, {name = "mesecons:switch_on", param2 = node.param2})
        else
            minetest.swap_node(pos, {name = "mesecons:switch_off", param2 = node.param2})
        end
    end,
})

minetest.register_node("mesecons:switch_off", {
    description = "Mesecon Switch (Off)",
    tiles = {"default_wood.png", "default_wood.png", "default_wood.png", "default_wood.png", "default_wood.png", "default_wood.png^mesecons_switch_off.png"},
    groups = {choppy = 2, oddly_breakable_by_hand = 2, not_in_creative_inventory = 1},
    drop = "mesecons:switch",
})

minetest.register_node("mesecons:switch_on", {
    description = "Mesecon Switch (On)",
    tiles = {"default_wood.png", "default_wood.png", "default_wood.png", "default_wood.png", "default_wood.png", "default_wood.png^mesecons_switch_on.png"},
    groups = {choppy = 2, oddly_breakable_by_hand = 2, not_in_creative_inventory = 1},
    drop = "mesecons:switch",
})

minetest.register_node("mesecons:lamp", {
    description = "Mesecon Lamp",
    tiles = {"mesecons_lamp_off.png"},
    groups = {cracky = 2},
    light_source = 0,
})

minetest.register_node("mesecons:lamp_on", {
    description = "Mesecon Lamp (On)",
    tiles = {"mesecons_lamp_on.png"},
    groups = {cracky = 2, not_in_creative_inventory = 1},
    light_source = 12,
    drop = "mesecons:lamp",
})

minetest.register_node("mesecons:piston", {
    description = "Mesecon Piston",
    tiles = {"mesecons_piston_top.png", "mesecons_piston_bottom.png", "mesecons_piston_side.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_node("mesecons:piston_sticky", {
    description = "Sticky Mesecon Piston",
    tiles = {"mesecons_piston_top_sticky.png", "mesecons_piston_bottom.png", "mesecons_piston_side.png"},
    groups = {cracky = 2},
    paramtype2 = "facedir",
})

minetest.register_craft({
    output = "mesecons:wire 3",
    recipe = {
        {"default:mese_crystal", "default:mese_crystal", "default:mese_crystal"},
    },
})

minetest.register_craft({
    output = "mesecons:switch",
    recipe = {
        {"default:cobble", "default:cobble", "default:cobble"},
        {"default:stick", "default:stick", "default:stick"},
        {"default:cobble", "default:cobble", "default:cobble"},
    },
})

minetest.register_craft({
    output = "mesecons:piston",
    recipe = {
        {"default:wood", "default:wood", "default:wood"},
        {"default:cobble", "default:steel_ingot", "default:cobble"},
        {"default:cobble", "mesecons:wire", "default:cobble"},
    },
})`;export{e as default};
