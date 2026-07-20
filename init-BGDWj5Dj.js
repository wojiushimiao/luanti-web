const e=`-- Basic Materials v1.0 for Luanti Web
-- Materials: steel bar, copper wire, chain, gear, energy crystal

minetest.register_craftitem("basic_materials:steel_bar", {
    description = "Steel Bar",
    inventory_image = "basic_materials_steel_bar.png",
})

minetest.register_craftitem("basic_materials:copper_wire", {
    description = "Copper Wire",
    inventory_image = "basic_materials_copper_wire.png",
})

minetest.register_craftitem("basic_materials:chain", {
    description = "Chain",
    inventory_image = "basic_materials_chain.png",
})

minetest.register_craftitem("basic_materials:gear", {
    description = "Gear",
    inventory_image = "basic_materials_gear.png",
})

minetest.register_craftitem("basic_materials:energy_crystal", {
    description = "Energy Crystal",
    inventory_image = "basic_materials_energy_crystal.png",
})

minetest.register_craftitem("basic_materials:iron_stick", {
    description = "Iron Stick",
    inventory_image = "basic_materials_iron_stick.png",
})

minetest.register_craftitem("basic_materials:piston", {
    description = "Piston",
    inventory_image = "basic_materials_piston.png",
})

minetest.register_craftitem("basic_materials:motor", {
    description = "Motor",
    inventory_image = "basic_materials_motor.png",
})

minetest.register_craftitem("basic_materials:heating_element", {
    description = "Heating Element",
    inventory_image = "basic_materials_heating_element.png",
})

minetest.register_craftitem("basic_materials:silicon_wafer", {
    description = "Silicon Wafer",
    inventory_image = "basic_materials_silicon_wafer.png",
})

minetest.register_craftitem("basic_materials:ic", {
    description = "Integrated Circuit",
    inventory_image = "basic_materials_ic.png",
})

minetest.register_craft({
    output = "basic_materials:steel_bar 2",
    recipe = {
        {"default:steel_ingot", "default:steel_ingot", "default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "basic_materials:copper_wire 3",
    recipe = {
        {"default:copper_ingot"},
        {"default:copper_ingot"},
        {"default:copper_ingot"},
    },
})

minetest.register_craft({
    output = "basic_materials:chain",
    recipe = {
        {"basic_materials:steel_bar"},
        {"basic_materials:steel_bar"},
        {"basic_materials:steel_bar"},
    },
})

minetest.register_craft({
    output = "basic_materials:gear",
    recipe = {
        {"", "basic_materials:steel_bar", ""},
        {"basic_materials:steel_bar", "", "basic_materials:steel_bar"},
        {"", "basic_materials:steel_bar", ""},
    },
})

minetest.register_craft({
    output = "basic_materials:energy_crystal",
    recipe = {
        {"default:diamond", "default:mese_crystal", "default:diamond"},
        {"default:mese_crystal", "default:diamond", "default:mese_crystal"},
        {"default:diamond", "default:mese_crystal", "default:diamond"},
    },
})

minetest.register_craft({
    output = "basic_materials:iron_stick 2",
    recipe = {
        {"default:steel_ingot"},
        {"default:steel_ingot"},
    },
})

minetest.register_craft({
    output = "basic_materials:motor",
    recipe = {
        {"basic_materials:copper_wire", "basic_materials:copper_wire", "basic_materials:copper_wire"},
        {"basic_materials:iron_stick", "basic_materials:gear", "basic_materials:iron_stick"},
        {"basic_materials:iron_stick", "basic_materials:energy_crystal", "basic_materials:iron_stick"},
    },
})`;export{e as default};
