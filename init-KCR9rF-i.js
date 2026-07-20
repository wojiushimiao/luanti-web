const n=`-- walls 模组 init.lua — 装饰性墙壁
--
-- 锚定: FIX-MOD-01 预设模组实现
-- 依赖: default（基础方块）

-- 圆石墙 — 基础防御/装饰
minetest.register_node("walls:cobble", {
    description = "Cobblestone Wall",
    tiles = {"default_cobble.png"},
    groups = {cracky = 3, wall = 1},
    is_ground_content = false,
})

-- 砖墙 — 高级装饰
minetest.register_node("walls:brick", {
    description = "Brick Wall",
    tiles = {"default_brick.png"},
    groups = {cracky = 3, wall = 1},
    is_ground_content = false,
})

-- 木墙 — 轻型结构
minetest.register_node("walls:wood", {
    description = "Wooden Wall",
    tiles = {"default_tree.png"},
    groups = {choppy = 2, flammable = 1, wall = 1},
    is_ground_content = false,
})

-- 合成: 6 个圆石 → 6 个圆石墙
minetest.register_craft({
    output = "walls:cobble 6",
    recipe = {
        {"default:cobble", "default:cobble", "default:cobble"},
        {"default:cobble", "default:cobble", "default:cobble"},
    },
})

-- 合成: 6 个砖块 → 6 个砖墙
minetest.register_craft({
    output = "walls:brick 6",
    recipe = {
        {"default:brick", "default:brick", "default:brick"},
        {"default:brick", "default:brick", "default:brick"},
    },
})
`;export{n as default};
