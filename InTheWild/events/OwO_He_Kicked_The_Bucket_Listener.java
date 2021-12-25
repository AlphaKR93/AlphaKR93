// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild.events;

import io.github.pancakeboiii.core.OrdinalAPI.DataManager.FileMan;
import org.bukkit.event.player.PlayerRespawnEvent;
import org.bukkit.event.EventPriority;
import org.bukkit.event.EventHandler;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.entity.Player;
import org.bukkit.ChatColor;
import java.util.Random;
import org.bukkit.configuration.file.YamlConfiguration;
import java.io.File;
import org.bukkit.event.entity.PlayerDeathEvent;
import org.bukkit.event.Listener;

public class OwO_He_Kicked_The_Bucket_Listener implements Listener
{
    @EventHandler(priority = EventPriority.HIGHEST)
    public void onDeath(final PlayerDeathEvent e) {
        if (e.getDeathMessage().contains("withered away")) {
            final Player p = e.getEntity().getPlayer();
            final File f = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
            final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(f);
            final File fT = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Temperature.yml");
            final FileConfiguration UserDataT = (FileConfiguration)YamlConfiguration.loadConfiguration(fT);
            if (UserData.getInt("Thirst") <= 0 && e.getDeathMessage().contains("withered")) {
                final Random r = new Random();
                final int low = 1;
                final int high = 4;
                final int result = r.nextInt(high - low) + low;
                if (result <= 3) {
                    e.setDeathMessage(String.valueOf(e.getEntity().getName()) + ChatColor.translateAlternateColorCodes('&', " died from dehydration"));
                }
                if (result >= 2) {
                    e.setDeathMessage(String.valueOf(e.getEntity().getName()) + ChatColor.translateAlternateColorCodes('&', " forgot to hydrate"));
                }
            }
            if (UserDataT.getInt("Temperature") <= -91 && e.getDeathMessage().contains("withered")) {
                final Random r = new Random();
                final int low = 1;
                final int high = 4;
                final int result = r.nextInt(high - low) + low;
                if (result <= 3) {
                    e.setDeathMessage(String.valueOf(e.getEntity().getName()) + ChatColor.translateAlternateColorCodes('&', " died from hypothermia"));
                }
                if (result >= 2) {
                    e.setDeathMessage(String.valueOf(e.getEntity().getName()) + ChatColor.translateAlternateColorCodes('&', " froze to death"));
                }
            }
            if (UserDataT.getInt("Temperature") >= 91 && e.getDeathMessage().contains("withered")) {
                final Random r = new Random();
                final int low = 1;
                final int high = 4;
                final int result = r.nextInt(high - low) + low;
                if (result <= 3) {
                    e.setDeathMessage(String.valueOf(e.getEntity().getName()) + ChatColor.translateAlternateColorCodes('&', " died from overheating"));
                }
                if (result >= 2) {
                    e.setDeathMessage(String.valueOf(e.getEntity().getName()) + ChatColor.translateAlternateColorCodes('&', " forgot to cool off"));
                }
            }
        }
    }
    
    @EventHandler
    public void onRespawn(final PlayerRespawnEvent e) {
        final Player p = e.getPlayer();
        if (p instanceof Player) {
            final File PreUserData = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
            final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
            FileMan.WriteToFile(PreUserData.toString(), "Thirst: 100");
            final File PreUserData2 = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Temperature.yml");
            final FileConfiguration UserData2 = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData2);
            FileMan.WriteToFile(PreUserData2.toString(), "Temperature: 0");
        }
    }
}
