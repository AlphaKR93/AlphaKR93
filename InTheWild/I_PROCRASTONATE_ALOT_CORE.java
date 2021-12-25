// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild;

import java.io.IOException;
import org.bukkit.potion.PotionEffect;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.block.Biome;
import org.bukkit.World;
import org.bukkit.Location;
import java.util.Iterator;
import io.Github.PancakeBoiii.InTheWild.Listeners.TemperatureCheck;
import io.Github.PancakeBoiii.InTheWild.events.TemperatureSystem;
import io.github.pancakeboiii.core.OrdinalAPI.DataManager.FileMan;
import java.util.Random;
import org.bukkit.potion.PotionEffectType;
import io.github.pancakeboiii.core.OrdinalAPI.Minecraft.ActionBar;
import org.bukkit.configuration.file.YamlConfiguration;
import java.io.File;
import io.github.pancakeboiii.core.OrdinalAPI.Minecraft.MCP;
import org.bukkit.entity.Player;
import org.bukkit.Bukkit;

public class I_PROCRASTONATE_ALOT_CORE
{
    public static void Main() throws IOException {
        for (final Player p : Bukkit.getOnlinePlayers()) {
            if (MCP.GetGamemode(p).equals("SURVIVAL") && Main.plugin.getConfig().getBoolean("Thirst") && !Main.plugin.getConfig().getBoolean("Temperature")) {
                final Location loc = p.getLocation();
                final World world = p.getWorld();
                final Biome biome = world.getBiome(loc.getBlockX(), loc.getBlockZ());
                final String Bt = p.getLocation().getBlock().getBiome().toString();
                Main.plugin.getConfig().getString("TestMessage");
                final File f = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
                final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(f);
                if (UserData.getInt("Thirst") <= 100) {
                    ActionBar.send(p, "                          \u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 95) {
                    ActionBar.send(p, "                          \u2184\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 90) {
                    ActionBar.send(p, "                          \u2c6f\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 85) {
                    ActionBar.send(p, "                          \u2c6f\u2184\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 80) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 75) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2184\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 70) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 65) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2184\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 60) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 55) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2184\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 50) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 45) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2184\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 40) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 35) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2184\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 30) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 25) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2184\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 20) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 15) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2184\u214e");
                }
                if (UserData.getInt("Thirst") <= 10) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u214e");
                }
                if (UserData.getInt("Thirst") <= 5) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2184");
                }
                if (UserData.getInt("Thirst") <= 0) {
                    ActionBar.send(p, "                          \u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f");
                }
                if (UserData.getInt("Thirst") <= 3) {
                    MCP.AddPotionEffect(p, "SLOW", 5, 1, false, false, false);
                }
                if (UserData.getInt("Thirst") <= 1) {
                    MCP.AddPotionEffect(p, "CONFUSION", 5, 1, false, false, false);
                }
                if (UserData.getInt("Thirst") <= 0) {
                    MCP.AddPotionEffect(p, "WITHER", 2, 0, false, false, false);
                }
                final PotionEffect effect = p.getPlayer().getPotionEffect(PotionEffectType.HUNGER);
                if (effect != null) {
                    final File PreUserData = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
                    if (UserData.getInt("Thirst") <= 100) {
                        ActionBar.send(p, "                          \u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 95) {
                        ActionBar.send(p, "                          \u0277\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 90) {
                        ActionBar.send(p, "                          \u0238\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 85) {
                        ActionBar.send(p, "                          \u0238\u0277\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 80) {
                        ActionBar.send(p, "                          \u0238\u0238\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 75) {
                        ActionBar.send(p, "                          \u0238\u0238\u0277\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 70) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 65) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0277\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 60) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 55) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0277\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 50) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 45) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u0277\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 40) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u0238\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 35) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u0238\u0277\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 30) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u0238\u0238\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 25) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0277\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 20) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 15) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0277\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 10) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 5) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0277");
                    }
                    if (UserData.getInt("Thirst") <= 0) {
                        ActionBar.send(p, "                          \u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238");
                    }
                    final Random r = new Random();
                    final int low = 0;
                    final int high = 200;
                    final int result = r.nextInt(high - low) + low;
                    if (UserData.getInt("Thirst") >= 0 && result >= 50) {
                        final int NewThirst = UserData.getInt("Thirst") - 1;
                        FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
                    }
                }
                final PotionEffect effectSat = p.getPlayer().getPotionEffect(PotionEffectType.SATURATION);
                if (effectSat != null) {
                    final File PreUserData2 = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
                    final int NewThirst2 = UserData.getInt("Thirst") + 5;
                    FileMan.WriteToFile(PreUserData2.toString(), "Thirst: " + NewThirst2);
                }
                final File PreUserData2 = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
                int NewThirst2 = UserData.getInt("Thirst");
                if (NewThirst2 > 100) {
                    NewThirst2 = 100;
                }
                FileMan.WriteToFile(PreUserData2.toString(), "Thirst: " + NewThirst2);
            }
            if (MCP.GetGamemode(p).equals("SURVIVAL") && Main.plugin.getConfig().getBoolean("Thirst") && Main.plugin.getConfig().getBoolean("Temperature")) {
                final Location loc = p.getLocation();
                final World world = p.getWorld();
                final Biome biome = world.getBiome(loc.getBlockX(), loc.getBlockZ());
                final String Bt = p.getLocation().getBlock().getBiome().toString();
                Main.plugin.getConfig().getString("TestMessage");
                final File f = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
                final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(f);
                TemperatureSystem.Main(p);
                final String TemperatureIcon = TemperatureCheck.GetTemp(p);
                if (UserData.getInt("Thirst") <= 100) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 95) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2184\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 90) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 85) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2184\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 80) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u214e\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 75) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2184\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 70) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u214e\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 65) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2184\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 60) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u214e\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 55) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2184\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 50) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u214e\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 45) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2184\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 40) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u214e\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 35) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2184\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 30) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u214e\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 25) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2184\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 20) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u214e\u214e");
                }
                if (UserData.getInt("Thirst") <= 15) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2184\u214e");
                }
                if (UserData.getInt("Thirst") <= 10) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u214e");
                }
                if (UserData.getInt("Thirst") <= 5) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2184");
                }
                if (UserData.getInt("Thirst") <= 0) {
                    ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f\u2c6f");
                }
                final File fT = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Temperature.yml");
                final FileConfiguration UserDataT = (FileConfiguration)YamlConfiguration.loadConfiguration(fT);
                if (UserData.getInt("Thirst") <= 3) {
                    MCP.AddPotionEffect(p, "SLOW", 5, 1, false, false, false);
                }
                if (UserData.getInt("Thirst") <= 1) {
                    MCP.AddPotionEffect(p, "CONFUSION", 5, 1, false, false, false);
                }
                if (UserData.getInt("Thirst") <= 0) {
                    MCP.AddPotionEffect(p, "WITHER", 2, 0, false, false, false);
                }
                if (UserDataT.getInt("Temperature") <= -91) {
                    MCP.AddPotionEffect(p, "SLOW", 5, 1, false, false, false);
                }
                if (UserDataT.getInt("Temperature") <= -91) {
                    MCP.AddPotionEffect(p, "BLINDNESS", 5, 1, false, false, false);
                }
                if (UserDataT.getInt("Temperature") <= -91) {
                    MCP.AddPotionEffect(p, "WITHER", 2, 0, false, false, false);
                }
                if (UserDataT.getInt("Temperature") >= 91) {
                    MCP.AddPotionEffect(p, "SLOW", 5, 1, false, false, false);
                }
                if (UserDataT.getInt("Temperature") >= 91) {
                    MCP.AddPotionEffect(p, "CONFUSION", 5, 1, false, false, false);
                }
                if (UserDataT.getInt("Temperature") >= 91) {
                    MCP.AddPotionEffect(p, "WITHER", 2, 0, false, false, false);
                }
                final PotionEffect effect2 = p.getPlayer().getPotionEffect(PotionEffectType.HUNGER);
                if (effect2 != null) {
                    final File PreUserData3 = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
                    if (UserData.getInt("Thirst") <= 100) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 95) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0277\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 90) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 85) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0277\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 80) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u026c\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 75) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0277\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 70) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u026c\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 65) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0277\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 60) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u026c\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 55) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0277\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 50) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u026c\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 45) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u0277\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 40) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u0238\u026c\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 35) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u0238\u0277\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 30) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u026c\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 25) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0277\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 20) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u026c\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 15) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0277\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 10) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u026c");
                    }
                    if (UserData.getInt("Thirst") <= 5) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0277");
                    }
                    if (UserData.getInt("Thirst") <= 0) {
                        ActionBar.send(p, "                      \uf805\uf801" + TemperatureIcon + "  \uf805\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238\u0238");
                    }
                    final Random r2 = new Random();
                    final int low2 = 0;
                    final int high2 = 200;
                    final int result2 = r2.nextInt(high2 - low2) + low2;
                    if (UserData.getInt("Thirst") >= 0 && result2 >= 50) {
                        final int NewThirst3 = UserData.getInt("Thirst") - 1;
                        FileMan.WriteToFile(PreUserData3.toString(), "Thirst: " + NewThirst3);
                    }
                }
                final PotionEffect effectSat2 = p.getPlayer().getPotionEffect(PotionEffectType.SATURATION);
                if (effectSat2 != null) {
                    final File PreUserData4 = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
                    final int NewThirst = UserData.getInt("Thirst") + 5;
                    FileMan.WriteToFile(PreUserData4.toString(), "Thirst: " + NewThirst);
                }
                final File PreUserData4 = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
                int NewThirst = UserData.getInt("Thirst");
                if (NewThirst > 100) {
                    NewThirst = 100;
                }
                FileMan.WriteToFile(PreUserData4.toString(), "Thirst: " + NewThirst);
            }
            if (MCP.GetGamemode(p).equals("SURVIVAL") && !Main.plugin.getConfig().getBoolean("Thirst") && Main.plugin.getConfig().getBoolean("Temperature")) {
                final Location loc = p.getLocation();
                final World world = p.getWorld();
                final Biome biome = world.getBiome(loc.getBlockX(), loc.getBlockZ());
                final String Bt = p.getLocation().getBlock().getBiome().toString();
                Main.plugin.getConfig().getString("TestMessage");
                final File f = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Temperature.yml");
                final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(f);
                TemperatureSystem.Main(p);
                final String TemperatureIcon = TemperatureCheck.GetTemp(p);
                ActionBar.send(p, TemperatureIcon);
                if (UserData.getInt("Temperature") <= -91) {
                    MCP.AddPotionEffect(p, "SLOW", 5, 1, false, false, false);
                }
                if (UserData.getInt("Temperature") <= -91) {
                    MCP.AddPotionEffect(p, "BLINDNESS", 5, 1, false, false, false);
                }
                if (UserData.getInt("Temperature") <= -91) {
                    MCP.AddPotionEffect(p, "WITHER", 2, 0, false, false, false);
                }
                if (UserData.getInt("Temperature") >= 91) {
                    MCP.AddPotionEffect(p, "SLOW", 5, 1, false, false, false);
                }
                if (UserData.getInt("Temperature") >= 91) {
                    MCP.AddPotionEffect(p, "CONFUSION", 5, 1, false, false, false);
                }
                if (UserData.getInt("Temperature") < 91) {
                    continue;
                }
                MCP.AddPotionEffect(p, "WITHER", 2, 0, false, false, false);
            }
        }
    }
}
