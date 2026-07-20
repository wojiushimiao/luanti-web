const e=`-- dye 模组 init.lua — 彩色染料
--
-- 锚定: FIX-MOD-01 预设模组实现
-- 依赖: default（基础方块）

-- 红色染料
minetest.register_craftitem("dye:red", {
    description = "Red Dye",
    inventory_image = "dye_red.png",
    stack_max = 99,
})

-- 黄色染料
minetest.register_craftitem("dye:yellow", {
    description = "Yellow Dye",
    inventory_image = "dye_yellow.png",
    stack_max = 99,
})

-- 蓝色染料
minetest.register_craftitem("dye:blue", {
    description = "Blue Dye",
    inventory_image = "dye_blue.png",
    stack_max = 99,
})

-- 绿色染料 (黄+蓝)
minetest.register_craftitem("dye:green", {
    description = "Green Dye",
    inventory_image = "dye_green.png",
    stack_max = 99,
})

-- 橙色染料 (红+黄)
minetest.register_craftitem("dye:orange", {
    description = "Orange Dye",
    inventory_image = "dye_orange.png",
    stack_max = 99,
})

-- 紫色染料 (红+蓝)
minetest.register_craftitem("dye:violet", {
    description = "Violet Dye",
    inventory_image = "dye_violet.png",
    stack_max = 99,
})

-- 合成: 红+蓝 → 2 紫色染料
minetest.register_craft({
    output = "dye:violet 2",
    recipe = {
        {"dye:red", "dye:blue", ""},
    },
})

-- 合成: 黄+蓝 → 2 绿色染料
minetest.register_craft({
    output = "dye:green 2",
    recipe = {
        {"dye:yellow", "dye:blue", ""},
    },
})

-- 合成: 红+黄 → 2 橙色染料
minetest.register_craft({
    output = "dye:orange 2",
    recipe = {
        {"dye:red", "dye:yellow", ""},
    },
})
`;export{e as default};
