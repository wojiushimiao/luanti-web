const n=`-- default 模组 init.lua — 内置基础方块冒烟测试
--
-- 锚定:
-- - L3 mod_loader §4.1 模组加载主管线
-- - L3 lua_scripting §6.6 Modding API
--
-- 注意：基础节点（stone/dirt/grass/wood/sand/water/glass/coal）已由引擎 TS 层硬编码注册
-- （见 src/content/builtin_nodes.ts），此处注册额外节点作为模组加载链路冒烟测试。
--
-- 此文件由 ModLoader 加载，通过 LuaScriptingPort.exec 执行，调用 minetest.register_node
-- 桥接到 ContentRegistry.registerNode。

-- 圆石 — 接近地表的石头变种
minetest.register_node("default:cobble", {
    description = "Cobblestone",
    tiles = {"default_cobble.png"},
    groups = {cracky = 3, stone = 1},
    is_ground_content = true,
})

-- 砖块 — 装饰性建筑材料
minetest.register_node("default:brick", {
    description = "Brick Block",
    tiles = {"default_brick.png"},
    groups = {cracky = 3},
    is_ground_content = false,
})

-- 树干 — 木材的来源
minetest.register_node("default:tree", {
    description = "Tree Trunk",
    tiles = {"default_tree_top.png", "default_tree_top.png", "default_tree.png"},
    groups = {choppy = 2, tree = 1, flammable = 1},
    is_ground_content = false,
})
`;export{n as default};
