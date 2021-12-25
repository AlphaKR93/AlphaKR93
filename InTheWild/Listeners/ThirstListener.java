// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild.Listeners;

import org.bukkit.event.EventHandler;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.entity.Player;
import io.github.pancakeboiii.core.OrdinalAPI.Minecraft.ActionBar;
import org.bukkit.configuration.file.YamlConfiguration;
import io.github.pancakeboiii.core.OrdinalAPI.DataManager.FileMan;
import io.github.pancakeboiii.core.OrdinalAPI.Minecraft.Print;
import org.bukkit.ChatColor;
import io.Github.PancakeBoiii.InTheWild.Main;
import java.io.File;
import org.bukkit.event.player.PlayerJoinEvent;
import org.bukkit.event.Listener;

public class ThirstListener implements Listener
{
    @EventHandler
    public void onPlayerJoin(final PlayerJoinEvent event) {
        final Player p = event.getPlayer();
        final File f = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
        final File fo = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString());
        if (fo.exists() && fo.isDirectory()) {
            final String Prefix = Main.plugin.getConfig().getString("plugin-prefix");
            final String ConsolePrefix = ChatColor.translateAlternateColorCodes('&', Prefix);
            Print.Console(String.valueOf(ConsolePrefix) + " : " + "data for player " + p.getUniqueId().toString() + " has been found!");
        }
        FileMan.CreateFolder("plugins/InTheWild/UserData/" + p.getUniqueId().toString());
        if (!f.exists() && !f.isDirectory()) {
            FileMan.CreateFile(f.toString());
            FileMan.WriteToFile(f.toString(), "Thirst: 100");
        }
        if (f.exists() && !f.isDirectory()) {
            final String Prefix = Main.plugin.getConfig().getString("plugin-prefix");
            final String ConsolePrefix = ChatColor.translateAlternateColorCodes('&', Prefix);
            final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(f);
            Print.Console(String.valueOf(ConsolePrefix) + " : " + "Loaded data for player " + p.getUniqueId().toString());
        }
        event.getPlayer().hasPlayedBefore();
        final File PreUserData = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
        final FileConfiguration UserData2 = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
        ActionBar.send(p, new StringBuilder().append(UserData2.getInt("Thirst")).toString());
    }
}
