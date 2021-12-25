// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild;

import org.bukkit.inventory.ShapelessRecipe;
import org.bukkit.inventory.CampfireRecipe;
import org.bukkit.NamespacedKey;
import org.bukkit.inventory.Recipe;
import org.bukkit.inventory.FurnaceRecipe;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.potion.PotionData;
import org.bukkit.potion.PotionType;
import org.bukkit.Color;
import org.bukkit.inventory.meta.PotionMeta;
import java.util.List;
import java.util.ArrayList;
import org.bukkit.inventory.ItemStack;
import org.bukkit.Material;
import org.bukkit.plugin.PluginManager;
import java.io.IOException;
import io.Github.PancakeBoiii.InTheWild.Listeners.SoulTorchListener;
import io.Github.PancakeBoiii.InTheWild.Listeners.CampfireListener;
import io.Github.PancakeBoiii.InTheWild.Listeners.SoulCampfireListener;
import io.Github.PancakeBoiii.InTheWild.Listeners.TorchListener;
import io.Github.PancakeBoiii.InTheWild.Listeners.TemperatureListener;
import io.Github.PancakeBoiii.InTheWild.events.ThirstSystem;
import io.Github.PancakeBoiii.InTheWild.Listeners.ThirstListener;
import org.bukkit.plugin.Plugin;
import org.bukkit.event.Listener;
import io.Github.PancakeBoiii.InTheWild.events.OwO_He_Kicked_The_Bucket_Listener;
import io.Github.PancakeBoiii.InTheWild.commands.settempcommand;
import io.Github.PancakeBoiii.InTheWild.commands.setthirstcommand;
import org.bukkit.command.CommandExecutor;
import io.Github.PancakeBoiii.InTheWild.commands.reloadcommand;
import io.github.pancakeboiii.core.OrdinalAPI.UpdateChecker.UpdateManager;
import io.github.pancakeboiii.core.OrdinalAPI.Minecraft.PluginMessage;
import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;

public class Main extends JavaPlugin
{
    public static Main plugin;
    int Total_Hours_Wasted_On_This_God_Forsaken_Project;
    
    public Main() {
        this.Total_Hours_Wasted_On_This_God_Forsaken_Project = 45;
    }
    
    public void onEnable() {
        final PluginManager pm = Bukkit.getPluginManager();
        PluginMessage.StartupMessage((JavaPlugin)(Main.plugin = this));
        UpdateManager.checkupdate((JavaPlugin)this, 95139, "https://www.spigotmc.org/resources/inthewild.95139/");
        this.saveDefaultConfig();
        this.getCommand("reload").setExecutor((CommandExecutor)new reloadcommand());
        this.getCommand("setthirst").setExecutor((CommandExecutor)new setthirstcommand());
        this.getCommand("settemp").setExecutor((CommandExecutor)new settempcommand());
        if (Main.plugin.getConfig().getBoolean("Thirst")) {
            this.PurifiedWaterRecipeFurnace();
            this.PurifiedWaterRecipeCampfire();
        }
        this.AcaciaSaplingStick();
        this.BirchSaplingStick();
        this.DarkOakSaplingStick();
        this.JungleSaplingStick();
        this.OakSaplingStick();
        this.SpruceSaplingStick();
        PluginMessage.LoadedMessage((JavaPlugin)this);
        if (Main.plugin.getConfig().getBoolean("Thirst")) {
            pm.registerEvents((Listener)new OwO_He_Kicked_The_Bucket_Listener(), (Plugin)this);
            pm.registerEvents((Listener)new ThirstListener(), (Plugin)this);
            pm.registerEvents((Listener)new ThirstSystem(), (Plugin)this);
        }
        if (Main.plugin.getConfig().getBoolean("Temperature")) {
            pm.registerEvents((Listener)new TemperatureListener(), (Plugin)this);
        }
        if (Main.plugin.getConfig().getBoolean("Torch-Burnout")) {
            pm.registerEvents((Listener)new TorchListener(), (Plugin)this);
        }
        if (Main.plugin.getConfig().getBoolean("Campfire-Burnout")) {
            pm.registerEvents((Listener)new SoulCampfireListener(), (Plugin)this);
        }
        if (Main.plugin.getConfig().getBoolean("Soul-Campfire-Burnout")) {
            pm.registerEvents((Listener)new CampfireListener(), (Plugin)this);
        }
        if (Main.plugin.getConfig().getBoolean("Soul-Torch-Burnout")) {
            pm.registerEvents((Listener)new SoulTorchListener(), (Plugin)this);
        }
        Bukkit.getServer().getScheduler().scheduleSyncRepeatingTask((Plugin)this, (Runnable)new Runnable() {
            @Override
            public void run() {
                try {
                    if (Main.plugin.getConfig().getBoolean("Thirst") || Main.plugin.getConfig().getBoolean("Temperature")) {
                        I_PROCRASTONATE_ALOT_CORE.Main();
                    }
                }
                catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }, 20L, 20L);
    }
    
    private void PurifiedWaterRecipeFurnace() {
        final ItemStack result = new ItemStack(Material.POTION);
        final Material Input = Material.POTION;
        final List<String> l = new ArrayList<String>();
        l.add("§r§bPurified");
        final ItemMeta m = result.getItemMeta();
        m.setLore((List)l);
        result.setItemMeta(m);
        final PotionMeta pm = (PotionMeta)result.getItemMeta();
        pm.setColor(Color.fromRGB(102, 255, 255));
        pm.setBasePotionData(new PotionData(PotionType.WATER));
        result.setItemMeta((ItemMeta)pm);
        final FurnaceRecipe PurifiedWaterRecipeFurnace = new FurnaceRecipe(result, Material.POTION);
        this.getServer().addRecipe((Recipe)PurifiedWaterRecipeFurnace);
    }
    
    private void PurifiedWaterRecipeCampfire() {
        final ItemStack result = new ItemStack(Material.POTION);
        final Material Input = Material.POTION;
        final List<String> l = new ArrayList<String>();
        l.add("§r§bPurified");
        final ItemMeta m = result.getItemMeta();
        m.setLore((List)l);
        result.setItemMeta(m);
        final PotionMeta pm = (PotionMeta)result.getItemMeta();
        pm.setColor(Color.fromRGB(102, 255, 255));
        pm.setBasePotionData(new PotionData(PotionType.WATER));
        result.setItemMeta((ItemMeta)pm);
        final NamespacedKey key = new NamespacedKey((Plugin)Main.plugin, "PurifiedWaterRecipe");
        final CampfireRecipe PurifiedWaterRecipeCampfire = new CampfireRecipe(key, result, Material.POTION, 0.0f, 140);
        this.getServer().addRecipe((Recipe)PurifiedWaterRecipeCampfire);
    }
    
    private void AcaciaSaplingStick() {
        final ItemStack is = new ItemStack(Material.STICK, 4);
        final NamespacedKey key = new NamespacedKey((Plugin)Main.plugin, "AcaciaSaplingStick");
        final ShapelessRecipe sr = new ShapelessRecipe(key, is);
        sr.addIngredient(1, Material.ACACIA_SAPLING);
        Bukkit.addRecipe((Recipe)sr);
    }
    
    private void BirchSaplingStick() {
        final ItemStack is = new ItemStack(Material.STICK, 4);
        final NamespacedKey key = new NamespacedKey((Plugin)Main.plugin, "BirchSaplingStick");
        final ShapelessRecipe sr = new ShapelessRecipe(key, is);
        sr.addIngredient(1, Material.BIRCH_SAPLING);
        Bukkit.addRecipe((Recipe)sr);
    }
    
    private void DarkOakSaplingStick() {
        final ItemStack is = new ItemStack(Material.STICK, 4);
        final NamespacedKey key = new NamespacedKey((Plugin)Main.plugin, "DarkOakSaplingStick");
        final ShapelessRecipe sr = new ShapelessRecipe(key, is);
        sr.addIngredient(1, Material.DARK_OAK_SAPLING);
        Bukkit.addRecipe((Recipe)sr);
    }
    
    private void JungleSaplingStick() {
        final ItemStack is = new ItemStack(Material.STICK, 4);
        final NamespacedKey key = new NamespacedKey((Plugin)Main.plugin, "JungleSaplingStick");
        final ShapelessRecipe sr = new ShapelessRecipe(key, is);
        sr.addIngredient(1, Material.JUNGLE_SAPLING);
        Bukkit.addRecipe((Recipe)sr);
    }
    
    private void OakSaplingStick() {
        final ItemStack is = new ItemStack(Material.STICK, 4);
        final NamespacedKey key = new NamespacedKey((Plugin)Main.plugin, "OakSaplingStick");
        final ShapelessRecipe sr = new ShapelessRecipe(key, is);
        sr.addIngredient(1, Material.OAK_SAPLING);
        Bukkit.addRecipe((Recipe)sr);
    }
    
    private void SpruceSaplingStick() {
        final ItemStack is = new ItemStack(Material.STICK, 4);
        final NamespacedKey key = new NamespacedKey((Plugin)Main.plugin, "SpruceSaplingStick");
        final ShapelessRecipe sr = new ShapelessRecipe(key, is);
        sr.addIngredient(1, Material.SPRUCE_SAPLING);
        Bukkit.addRecipe((Recipe)sr);
    }
    
    public void onDisable() {
        final NamespacedKey PurifiedWaterRecipe = new NamespacedKey((Plugin)Main.plugin, "PurifiedWaterRecipe");
        final NamespacedKey AcaciaSaplingStick = new NamespacedKey((Plugin)Main.plugin, "AcaciaSaplingStick");
        final NamespacedKey BirchSaplingStick = new NamespacedKey((Plugin)Main.plugin, "BirchSaplingStick");
        final NamespacedKey DarkOakSaplingStick = new NamespacedKey((Plugin)Main.plugin, "DarkOakSaplingStick");
        final NamespacedKey JungleSaplingStick = new NamespacedKey((Plugin)Main.plugin, "JungleSaplingStick");
        final NamespacedKey OakSaplingStick = new NamespacedKey((Plugin)Main.plugin, "OakSaplingStick");
        final NamespacedKey SpruceSaplingStick = new NamespacedKey((Plugin)Main.plugin, "SpruceSaplingStick");
        Bukkit.removeRecipe(PurifiedWaterRecipe);
        Bukkit.removeRecipe(AcaciaSaplingStick);
        Bukkit.removeRecipe(BirchSaplingStick);
        Bukkit.removeRecipe(DarkOakSaplingStick);
        Bukkit.removeRecipe(JungleSaplingStick);
        Bukkit.removeRecipe(OakSaplingStick);
        Bukkit.removeRecipe(SpruceSaplingStick);
        PluginMessage.DisableMessage((JavaPlugin)this);
    }
}
