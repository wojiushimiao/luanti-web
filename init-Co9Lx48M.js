const n=`-- tnt 模组 init.lua — TNT 爆炸物
--
-- 锚定: FIX-MOD-01 预设模组实现
-- 依赖: default（基础方块）

-- TNT 方块 — 爆炸性方块（视觉注册，爆炸逻辑后续实现）
minetest.register_node("tnt:tnt", {
    description = "TNT",
    tiles = {"tnt_top.png", "tnt_bottom.png", "tnt_side.png"},
    groups = {cracky = 1, choppy = 1, flammable = 1, tnt = 1},
    is_ground_content = false,
})

-- TNT 棍 — 合成中间件
minetest.register_craftitem("tnt:gun_powder", {
    description = "Gun Powder",
    inventory_image = "tnt_gun_powder.png",
    stack_max = 99,
})

-- 合成: 5 个圆石 + 火药 → TNT
minetest.register_craft({
    output = "tnt:tnt",
    recipe = {
        {"default:cobble", "tnt:gun_powder", "default:cobble"},
        {"tnt:gun_powder", "default:cobble", "tnt:gun_powder"},
        {"default:cobble", "tnt:gun_powder", "default:cobble"},
    },
})
`;export{n as default};
