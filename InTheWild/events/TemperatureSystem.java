// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild.events;

import java.util.Random;
import org.bukkit.Location;
import org.bukkit.World;
import org.bukkit.inventory.ItemStack;
import org.bukkit.block.Block;
import org.bukkit.configuration.file.FileConfiguration;
import io.github.pancakeboiii.core.OrdinalAPI.DataManager.FileMan;
import org.bukkit.entity.Boat;
import org.bukkit.block.data.Lightable;
import org.bukkit.Material;
import io.github.pancakeboiii.core.OrdinalAPI.Minecraft.Print;
import net.md_5.bungee.api.ChatColor;
import org.bukkit.configuration.file.YamlConfiguration;
import java.io.File;
import org.bukkit.entity.Player;

public class TemperatureSystem
{
    static int sneakaction;
    
    static {
        TemperatureSystem.sneakaction = 0;
    }
    
    public static void Main(final Player p) {
        final String Bt = p.getLocation().getBlock().getBiome().toString();
        final File PreUserData = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Temperature.yml");
        final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
        final File ConfData = new File("plugins/InTheWild/config.yml");
        final FileConfiguration Config = (FileConfiguration)YamlConfiguration.loadConfiguration(ConfData);
        if (p.getItemInHand().toString().contains("ItemStack{COMPASS x") && p.isSneaking()) {
            final int Temperature = UserData.getInt("Temperature");
            String TempOutput = null;
            if (Temperature > 14 && Temperature < 61) {
                TempOutput = ChatColor.GOLD + "WARM";
            }
            if (Temperature > 60 && Temperature < 90) {
                TempOutput = ChatColor.RED + "HOT";
            }
            if (Temperature > 89 && Temperature < 104) {
                TempOutput = ChatColor.DARK_RED + "BURNING";
            }
            if (Temperature < 15 && Temperature > -15) {
                TempOutput = ChatColor.GRAY + "NORMAL";
            }
            if (Temperature < -14 && Temperature > -61) {
                TempOutput = ChatColor.AQUA + "COLD";
            }
            if (Temperature < -60 && Temperature > -90) {
                TempOutput = ChatColor.AQUA + "FREEZING";
            }
            if (Temperature < -89 && Temperature > -104) {
                TempOutput = ChatColor.BLUE + "HYPOTHERMIA";
            }
            Print.Player(p, "Temperature : " + Temperature + "  Status : " + TempOutput);
        }
        final int StartTemp = UserData.getInt("Temperature");
        if (!Config.getBoolean("Temperature-Neutral-Campfires")) {
            for (int x = -4; x <= 4; ++x) {
                for (int z = -4; z <= 4; ++z) {
                    for (int y = -3; y <= 3; ++y) {
                        final Material material = p.getLocation().add((double)x, (double)y, (double)z).getBlock().getType();
                        if (material == Material.CAMPFIRE) {
                            final Block block = p.getLocation().add((double)x, (double)y, (double)z).getBlock();
                            final Lightable data = (Lightable)block.getBlockData();
                            if (data.isLit()) {
                                AddTemp(p, 1, 5, 2);
                            }
                        }
                    }
                }
            }
        }
        if (Config.getBoolean("Temperature-Neutral-Campfires")) {
            for (int x = -4; x <= 4; ++x) {
                for (int z = -4; z <= 4; ++z) {
                    for (int y = -3; y <= 3; ++y) {
                        final Material material = p.getLocation().add((double)x, (double)y, (double)z).getBlock().getType();
                        if (material == Material.CAMPFIRE) {
                            final Block block = p.getLocation().add((double)x, (double)y, (double)z).getBlock();
                            final Lightable data = (Lightable)block.getBlockData();
                            if (data.isLit() && UserData.getInt("Temperature") < 0) {
                                AddTemp(p, 1, 5, 2);
                            }
                        }
                    }
                }
            }
        }
        for (int x = -4; x <= 4; ++x) {
            for (int z = -4; z <= 4; ++z) {
                for (int y = -3; y <= 3; ++y) {
                    final Material material = p.getLocation().add((double)x, (double)y, (double)z).getBlock().getType();
                    if (material == Material.FIRE) {
                        final Block block = p.getLocation().add((double)x, (double)y, (double)z).getBlock();
                        AddTemp(p, 1, 5, 2);
                    }
                }
            }
        }
        for (int x = -4; x <= 4; ++x) {
            for (int z = -4; z <= 4; ++z) {
                for (int y = -3; y <= 3; ++y) {
                    final Material material = p.getLocation().add((double)x, (double)y, (double)z).getBlock().getType();
                    if (material == Material.LAVA) {
                        final Block block = p.getLocation().add((double)x, (double)y, (double)z).getBlock();
                        AddTemp(p, 1, 10, 1);
                    }
                }
            }
        }
        for (int x = -4; x <= 4; ++x) {
            for (int z = -4; z <= 4; ++z) {
                for (int y = -3; y <= 3; ++y) {
                    final Material material = p.getLocation().add((double)x, (double)y, (double)z).getBlock().getType();
                    if (material == Material.MAGMA_BLOCK) {
                        final Block block = p.getLocation().add((double)x, (double)y, (double)z).getBlock();
                        AddTemp(p, 1, 10, 2);
                    }
                }
            }
        }
        for (int x = 0; x <= 0; ++x) {
            for (int z = 0; z <= 0; ++z) {
                for (int y = 0; y <= 1; ++y) {
                    final Material material = p.getLocation().add((double)x, (double)y, (double)z).getBlock().getType();
                    if (material == Material.WATER && !p.isInsideVehicle() && !(p.getVehicle() instanceof Boat)) {
                        final Block block = p.getLocation().add((double)x, (double)y, (double)z).getBlock();
                        final String B = p.getLocation().getBlock().getBiome().toString();
                        if (B.equalsIgnoreCase("desert") || B.equalsIgnoreCase("Desert_hills")) {
                            if (UserData.getInt("Temperature") > 15) {
                                RemoveTemp(p, 1, 4, 1);
                            }
                        }
                        else {
                            RemoveTemp(p, 1, 5, 2);
                        }
                    }
                }
            }
        }
        for (int x = -4; x <= 4; ++x) {
            for (int z = -4; z <= 4; ++z) {
                for (int y = -3; y <= 3; ++y) {
                    final Material material = p.getLocation().add((double)x, (double)y, (double)z).getBlock().getType();
                    if (material == Material.PACKED_ICE) {
                        RemoveTemp(p, 1, 10, 2);
                    }
                }
            }
        }
        if (UserData.getInt("Temperature") > 100) {
            final int NewTemp = 100;
            FileMan.WriteToFile(PreUserData.toString(), "Temperature: " + NewTemp);
        }
        if (UserData.getInt("Temperature") < -100) {
            final int NewTemp = -100;
            FileMan.WriteToFile(PreUserData.toString(), "Temperature: " + NewTemp);
        }
        RegisterBiomeTemperature(p, "badlands_plateau", 75, 80, 5, 3);
        RegisterBiomeTemperature(p, "bamboo_jungle", 10, 15, 5, 3);
        RegisterBiomeTemperature(p, "bamboo_jungle_hills", 10, 15, 5, 3);
        RegisterBiomeTemperature(p, "basalt_deltas", 85, 89, 5, 3);
        RegisterBiomeTemperature(p, "BEACH", 16, 20, 5, 3);
        RegisterBiomeTemperature(p, "BIRCH_FOREST", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "BIRCH_FOREST_HILLS", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "Cold_Ocean", -80, -75, 5, 3);
        RegisterBiomeTemperature(p, "crimson_forest", 75, 80, 5, 3);
        RegisterBiomeTemperature(p, "DARK_FOREST", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "DARK_FOREST_HILLS", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "Deep_Cold_Ocean", -80, -75, 5, 3);
        RegisterBiomeTemperature(p, "Deep_Frozen_Ocean", -100, -95, 5, 3);
        RegisterBiomeTemperature(p, "deep_lukewarm_ocean", 5, 10, 5, 3);
        RegisterBiomeTemperature(p, "Deep_Ocean", -20, -15, 5, 3);
        RegisterBiomeTemperature(p, "deep_warm_ocean", 10, 15, 5, 3);
        RegisterBiomeTemperature(p, "Desert", 75, 80, 5, 3);
        RegisterBiomeTemperature(p, "desert_hills", 65, 70, 5, 3);
        RegisterBiomeTemperature(p, "Desert_Lakes", 65, 70, 5, 3);
        RegisterBiomeTemperature(p, "dripstone_caves", -20, -15, 5, 3);
        RegisterBiomeTemperature(p, "end_barrens", 0, 0, 5, 3);
        RegisterBiomeTemperature(p, "end_highlands", 0, 0, 5, 3);
        RegisterBiomeTemperature(p, "end_midlands", 0, 0, 5, 3);
        RegisterBiomeTemperature(p, "eroded_badlands", 75, 80, 5, 3);
        RegisterBiomeTemperature(p, "flower_forest", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "FOREST", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "Frozen_Ocean", -100, -95, 5, 3);
        RegisterBiomeTemperature(p, "frozen_river", -100, -95, 5, 3);
        RegisterBiomeTemperature(p, "giant_spruce_taiga", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "giant_spruce_taiga_hills", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "giant_tree_taiga", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "giant_tree_taiga_hills", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "gravelly_mountains", -40, -35, 5, 3);
        RegisterBiomeTemperature(p, "ICE_SPIKES", -95, -90, 5, 3);
        RegisterBiomeTemperature(p, "jungle", 15, 20, 5, 3);
        RegisterBiomeTemperature(p, "jungle_edge", 15, 20, 5, 3);
        RegisterBiomeTemperature(p, "jungle_hills", 15, 20, 5, 3);
        RegisterBiomeTemperature(p, "lukewarm_ocean", 5, 10, 5, 3);
        RegisterBiomeTemperature(p, "lush_caves", -5, 5, 5, 3);
        RegisterBiomeTemperature(p, "modified_badlands_plateau", 75, 80, 5, 3);
        RegisterBiomeTemperature(p, "modified_gravelly_mountains", -40, -35, 5, 3);
        RegisterBiomeTemperature(p, "modified_jungle", 15, 20, 5, 3);
        RegisterBiomeTemperature(p, "modified_jungle_edge", 15, 20, 5, 3);
        RegisterBiomeTemperature(p, "modified_wooded_badlands_plateau", 65, 70, 5, 3);
        RegisterBiomeTemperature(p, "mountain_edge", -40, -35, 5, 3);
        RegisterBiomeTemperature(p, "mountains", -40, -35, 5, 3);
        RegisterBiomeTemperature(p, "mushroom_field_shore", -5, 5, 5, 3);
        RegisterBiomeTemperature(p, "mushroom_fields", -5, 5, 5, 3);
        RegisterBiomeTemperature(p, "nether_wastes", 85, 89, 5, 3);
        RegisterBiomeTemperature(p, "Ocean", -20, -15, 5, 3);
        RegisterBiomeTemperature(p, "river", 0, 0, 5, 3);
        RegisterBiomeTemperature(p, "savanna", 45, 50, 5, 3);
        RegisterBiomeTemperature(p, "savanna_plateau", 45, 50, 5, 3);
        RegisterBiomeTemperature(p, "shattered_savanna", 45, 50, 5, 3);
        RegisterBiomeTemperature(p, "shattered_savanna_plateau", 45, 50, 5, 3);
        RegisterBiomeTemperature(p, "small_end_islands", 0, 0, 5, 3);
        RegisterBiomeTemperature(p, "Snowy_BEACH", -50, -55, 5, 3);
        RegisterBiomeTemperature(p, "snowy_mountains", -80, -75, 5, 3);
        RegisterBiomeTemperature(p, "snowy_taiga", -80, -75, 5, 3);
        RegisterBiomeTemperature(p, "snowy_taiga_hills", -80, -75, 5, 3);
        RegisterBiomeTemperature(p, "snowy_taiga_mountains", -80, -75, 5, 3);
        RegisterBiomeTemperature(p, "snowy_tundra", -80, -75, 5, 3);
        RegisterBiomeTemperature(p, "soul_sand_valley", 75, 89, 5, 3);
        RegisterBiomeTemperature(p, "stone_shore", -15, 15, 5, 3);
        RegisterBiomeTemperature(p, "sunflower_plains", 0, 0, 5, 3);
        RegisterBiomeTemperature(p, "SWAMP", -5, 5, 5, 3);
        RegisterBiomeTemperature(p, "SWAMP_Hills", -5, 5, 5, 3);
        RegisterBiomeTemperature(p, "taiga_hills", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "taiga_mountains", -40, -35, 5, 3);
        RegisterBiomeTemperature(p, "tall_birch_forest", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "tall_birch_hills", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "the_end", 0, 0, 5, 3);
        RegisterBiomeTemperature(p, "the_void", 0, 0, 5, 3);
        RegisterBiomeTemperature(p, "warm_ocean", 10, 15, 5, 3);
        RegisterBiomeTemperature(p, "warped_forest", 75, 80, 5, 3);
        RegisterBiomeTemperature(p, "wooded_badlands_plateau", 65, 70, 5, 3);
        RegisterBiomeTemperature(p, "wooded_hills", 0, 5, 5, 3);
        RegisterBiomeTemperature(p, "wooded_hills", 15, 20, 5, 3);
        RegisterBiomeTemperature(p, "wooded_mountains", -40, -35, 5, 3);
        RegisterBiomeTemperature(p, "Plains", 0, 0, 5, 3);
        RegisterBiomeTemperature(p, "badlands", 75, 80, 5, 3);
        final int FinalTemp = UserData.getInt("Temperature");
        final ItemStack C_ThermalHelmet = p.getInventory().getItem(39);
        final ItemStack C_ThermalChestplate = p.getInventory().getItem(38);
        final ItemStack C_ThermalLeggings = p.getInventory().getItem(37);
        final ItemStack C_ThermalBoots = p.getInventory().getItem(36);
        final String C_ThermalHelmetString = new StringBuilder().append(C_ThermalHelmet).toString();
        final String C_ThermalChestplateString = new StringBuilder().append(C_ThermalChestplate).toString();
        final String C_ThermalLeggingsString = new StringBuilder().append(C_ThermalLeggings).toString();
        final String C_ThermalBootsString = new StringBuilder().append(C_ThermalBoots).toString();
        final int TempDifference = StartTemp - FinalTemp;
        if (C_ThermalHelmetString.startsWith("ItemStack{LEATHER_HELMET x") && C_ThermalChestplateString.startsWith("ItemStack{LEATHER_CHESTPLATE x") && C_ThermalLeggingsString.startsWith("ItemStack{LEATHER_LEGGINGS x") && C_ThermalBootsString.startsWith("ItemStack{LEATHER_BOOTS x") && StartTemp >= FinalTemp && UserData.getInt("Temperature") < 100) {
            AddTemp(p, 1, 7, 2);
        }
    }
    
    public static void RegisterBiomeTemperature(final Player p, final String Biome, final int MinTemp, final int MaxTemp, final int TempChance, final int TempChanceRain) {
        final String Bt = p.getLocation().getBlock().getBiome().toString();
        final File PreUserData = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Temperature.yml");
        final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
        if (Bt.equalsIgnoreCase(Biome)) {
            final World w = p.getWorld();
            final long time = w.getTime();
            if (w.hasStorm()) {
                final Location Eloc = p.getLocation();
                final int EntityPositionY = Eloc.getBlockY();
                final int EhighestBlock = Eloc.getWorld().getHighestBlockAt(Eloc).getY();
                if (EntityPositionY >= EhighestBlock) {
                    RemoveTemp(p, 1, TempChanceRain, 1);
                }
            }
            if (UserData.getInt("Temperature") > MaxTemp) {
                RemoveTemp(p, 1, TempChance, 1);
            }
            if (UserData.getInt("Temperature") < MinTemp) {
                AddTemp(p, 1, TempChance, 1);
            }
        }
    }
    
    public static void RemoveTemp(final Player p, final int Min, final int Max, final int RemoveAmount) {
        final File PreUserData = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Temperature.yml");
        final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
        final Random r = new Random();
        final int low = Min;
        final int high = Max;
        final int result = r.nextInt(high - low) + low;
        if (result >= Max - 2) {
            final int NewTemp = UserData.getInt("Temperature") - RemoveAmount;
            FileMan.WriteToFile(PreUserData.toString(), "Temperature: " + NewTemp);
        }
    }
    
    public static void AddTemp(final Player p, final int Min, final int Max, final int AddAmount) {
        final File PreUserData = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Temperature.yml");
        final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
        final Random r = new Random();
        final int low = Min;
        final int high = Max;
        final int result = r.nextInt(high - low) + low;
        if (result >= Max - 2) {
            final int NewTemp = UserData.getInt("Temperature") + AddAmount;
            FileMan.WriteToFile(PreUserData.toString(), "Temperature: " + NewTemp);
        }
    }
    
    public static void SetTemp(final Player p, final int AddAmount) {
        final File PreUserData = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Temperature.yml");
        final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
        final int NewTemp = AddAmount;
        FileMan.WriteToFile(PreUserData.toString(), "Temperature: " + NewTemp);
    }
}
