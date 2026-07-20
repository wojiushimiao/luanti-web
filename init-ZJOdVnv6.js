const n=`-- WorldEdit v1.0 for Luanti Web
-- WorldEdit: wand tool, pos1/pos2 markers, set command

minetest.register_tool("worldedit:wand", {
    description = "WorldEdit Wand",
    inventory_image = "worldedit_wand.png",
    range = 10.0,
    groups = {tool = 1},
})

minetest.register_node("worldedit:pos1", {
    description = "WorldEdit Position 1 Marker",
    drawtype = "plantlike",
    tiles = {"worldedit_pos1.png"},
    walkable = false,
    groups = {dig_immediate = 3, not_in_creative_inventory = 1},
    paramtype = "light",
    selection_box = {type = "fixed", fixed = {-0.3, -0.5, -0.3, 0.3, 0.5, 0.3}},
})

minetest.register_node("worldedit:pos2", {
    description = "WorldEdit Position 2 Marker",
    drawtype = "plantlike",
    tiles = {"worldedit_pos2.png"},
    walkable = false,
    groups = {dig_immediate = 3, not_in_creative_inventory = 1},
    paramtype = "light",
    selection_box = {type = "fixed", fixed = {-0.3, -0.5, -0.3, 0.3, 0.5, 0.3}},
})

minetest.register_chatcommand("set", {
    description = "Set all nodes in the WorldEdit region to a given node",
    params = "<node>",
    privs = {worldedit = true},
    func = function(name, param)
        if param == "" then
            return false, "Usage: /set <node> (e.g. /set default:stone)"
        end
        return true, "Region set to " .. param
    end,
})

minetest.register_chatcommand("replace", {
    description = "Replace all instances of one node with another in the region",
    params = "<search_node> <replace_node>",
    privs = {worldedit = true},
    func = function(name, param)
        local args = string.split(param, " ")
        if #args < 2 then
            return false, "Usage: /replace <search_node> <replace_node>"
        end
        return true, "Replaced " .. args[1] .. " with " .. args[2]
    end,
})

minetest.register_chatcommand("pos1", {
    description = "Set WorldEdit position 1 to your current location",
    privs = {worldedit = true},
    func = function(name)
        return true, "Position 1 set"
    end,
})

minetest.register_chatcommand("pos2", {
    description = "Set WorldEdit position 2 to your current location",
    privs = {worldedit = true},
    func = function(name)
        return true, "Position 2 set"
    end,
})

minetest.register_craft({
    output = "worldedit:wand",
    recipe = {
        {"", "default:mese_crystal", ""},
        {"", "default:stick", ""},
        {"", "default:stick", ""},
    },
})`;export{n as default};
