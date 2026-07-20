const e=`-- stairs 模组 init.lua — 楼梯/台阶方块
--
-- 锚定: FIX-MOD-01 预设模组实现
-- 依赖: default（基础方块）

-- 石砖楼梯 — 普通建筑结构
minetest.register_node("stairs:stair_cobble", {
    description = "Cobblestone Stair",
    tiles = {"default_cobble.png"},
    groups = {cracky = 3},
    paramtype2 = "facedir",
    is_ground_content = false,
})

-- 木楼梯 — 装饰性结构
minetest.register_node("stairs:stair_wood", {
    description = "Wooden Stair",
    tiles = {"default_tree.png"},
    groups = {choppy = 2, flammable = 1},
    paramtype2 = "facedir",
    is_ground_content = false,
})

-- 砖楼梯 — 高级建筑结构
minetest.register_node("stairs:stair_brick", {
    description = "Brick Stair",
    tiles = {"default_brick.png"},
    groups = {cracky = 3},
    paramtype2 = "facedir",
    is_ground_content = false,
})

-- 合成: 6 个圆石 → 4 个石楼梯
minetest.register_craft({
    output = "stairs:stair_cobble 4",
    recipe = {
        {"default:cobble", "", ""},
        {"default:cobble", "default:cobble", ""},
        {"default:cobble", "default:cobble", "default:cobble"},
    },
})

-- 合成: 6 个树干 → 4 个木楼梯
minetest.register_craft({
    output = "stairs:stair_wood 4",
    recipe = {
        {"default:tree", "", ""},
        {"default:tree", "default:tree", ""},
        {"default:tree", "default:tree", "default:tree"},
    },
})
`;export{e as default};
