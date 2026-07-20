const n=`-- Mobs Monster v1.0 for Luanti Web
-- Monsters: zombie, skeleton, spider spawn eggs, dungeon master

minetest.register_craftitem("mobs_monster:spawn_egg_zombie", {
    description = "Zombie Spawn Egg",
    inventory_image = "mobs_monster_zombie_egg.png",
    groups = {spawn_egg = 1},
})

minetest.register_craftitem("mobs_monster:spawn_egg_skeleton", {
    description = "Skeleton Spawn Egg",
    inventory_image = "mobs_monster_skeleton_egg.png",
    groups = {spawn_egg = 1},
})

minetest.register_craftitem("mobs_monster:spawn_egg_spider", {
    description = "Spider Spawn Egg",
    inventory_image = "mobs_monster_spider_egg.png",
    groups = {spawn_egg = 1},
})

minetest.register_craftitem("mobs_monster:spawn_egg_dungeon_master", {
    description = "Dungeon Master Spawn Egg",
    inventory_image = "mobs_monster_dungeon_master_egg.png",
    groups = {spawn_egg = 1},
})

minetest.register_craftitem("mobs_monster:rotten_flesh", {
    description = "Rotten Flesh",
    inventory_image = "mobs_monster_rotten_flesh.png",
    on_use = minetest.item_eat(1),
})

minetest.register_craftitem("mobs_monster:bone", {
    description = "Bone",
    inventory_image = "mobs_monster_bone.png",
})

minetest.register_craftitem("mobs_monster:spider_silk", {
    description = "Spider Silk",
    inventory_image = "mobs_monster_spider_silk.png",
})

minetest.register_craftitem("mobs_monster:dungeon_master_orb", {
    description = "Dungeon Master Orb",
    inventory_image = "mobs_monster_dungeon_master_orb.png",
})

minetest.register_craftitem("mobs_monster:bone_meal", {
    description = "Bone Meal",
    inventory_image = "mobs_monster_bone_meal.png",
})

minetest.register_craft({
    output = "mobs_monster:bone_meal 3",
    recipe = {
        {"mobs_monster:bone"},
    },
})

minetest.register_craft({
    output = "mobs_monster:spawn_egg_zombie",
    recipe = {
        {"", "mobs_monster:rotten_flesh", ""},
        {"mobs_monster:rotten_flesh", "mobs_animal:egg", "mobs_monster:rotten_flesh"},
        {"", "mobs_monster:rotten_flesh", ""},
    },
})

minetest.register_craft({
    output = "mobs_monster:spawn_egg_skeleton",
    recipe = {
        {"", "mobs_monster:bone", ""},
        {"mobs_monster:bone", "mobs_animal:egg", "mobs_monster:bone"},
        {"", "mobs_monster:bone", ""},
    },
})

minetest.register_craft({
    output = "mobs_monster:spawn_egg_spider",
    recipe = {
        {"", "mobs_monster:spider_silk", ""},
        {"mobs_monster:spider_silk", "mobs_animal:egg", "mobs_monster:spider_silk"},
        {"", "mobs_monster:spider_silk", ""},
    },
})`;export{n as default};
