const t=`-- buckets 模组 init.lua — 水桶/岩浆桶
--
-- 锚定: FIX-MOD-01 预设模组实现
-- 依赖: default（基础方块）

-- 空桶 — 容器工具
minetest.register_craftitem("buckets:bucket_empty", {
    description = "Empty Bucket",
    inventory_image = "buckets_bucket_empty.png",
    stack_max = 16,
})

-- 水桶 — 装满水
minetest.register_craftitem("buckets:bucket_water", {
    description = "Water Bucket",
    inventory_image = "buckets_bucket_water.png",
    stack_max = 1,
})

-- 岩浆桶 — 装满岩浆
minetest.register_craftitem("buckets:bucket_lava", {
    description = "Lava Bucket",
    inventory_image = "buckets_bucket_lava.png",
    stack_max = 1,
})

-- 合成: 三个铁锭 → 空桶
minetest.register_craft({
    output = "buckets:bucket_empty",
    recipe = {
        {"default:cobble", "", "default:cobble"},
        {"", "default:cobble", ""},
    },
})
`;export{t as default};
