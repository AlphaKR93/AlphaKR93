// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild.commands;

import org.bukkit.command.ConsoleCommandSender;
import io.github.pancakeboiii.core.OrdinalAPI.Minecraft.Print;
import org.bukkit.ChatColor;
import io.Github.PancakeBoiii.InTheWild.Main;
import org.bukkit.entity.Player;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.command.CommandExecutor;

public class reloadcommand implements CommandExecutor
{
    public boolean onCommand(final CommandSender sender, final Command cmd, final String label, final String[] args) {
        if (sender instanceof Player) {
            final Player p = (Player)sender;
            if (p.hasPermission("InTheWild.reload")) {
                Main.plugin.saveDefaultConfig();
                Main.plugin.reloadConfig();
                Print.Player(p, ChatColor.translateAlternateColorCodes('&', String.valueOf(String.valueOf(Main.plugin.getConfig().getString("plugin-prefix"))) + " : " + Main.plugin.getConfig().getString("reload-message")));
            }
            else {
                Print.Player(p, ChatColor.RED + "You do not have permission to run this command!");
            }
        }
        if (sender instanceof ConsoleCommandSender) {
            Main.plugin.saveDefaultConfig();
            Main.plugin.reloadConfig();
            Print.Console(ChatColor.translateAlternateColorCodes('&', String.valueOf(String.valueOf(Main.plugin.getConfig().getString("plugin-prefix"))) + " : " + Main.plugin.getConfig().getString("reload-message")));
        }
        return false;
    }
}
