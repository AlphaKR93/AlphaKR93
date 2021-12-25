// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild.commands;

import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.command.ConsoleCommandSender;
import io.github.pancakeboiii.core.OrdinalAPI.DataManager.FileMan;
import org.bukkit.configuration.file.YamlConfiguration;
import java.io.File;
import org.bukkit.Bukkit;
import io.github.pancakeboiii.core.OrdinalAPI.Minecraft.Print;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import org.bukkit.command.Command;
import org.bukkit.command.CommandSender;
import org.bukkit.command.CommandExecutor;

public class settempcommand implements CommandExecutor
{
    public boolean onCommand(final CommandSender sender, final Command cmd, final String label, final String[] args) {
        if (sender instanceof Player) {
            final Player player = (Player)sender;
            if (player.hasPermission("InTheWild.setTemp")) {
                if (args.length == 0) {
                    Print.Player(player, ChatColor.RED + "Usage : /SetTemp <Player> <Amount -100 - 100>");
                }
                else {
                    final Player target = Bukkit.getPlayerExact(args[0]);
                    if (args[0] != null && args[1] == null) {
                        Print.Player(player, ChatColor.RED + "Usage : /SetTemp <Player> <Amount -100 - 100>");
                    }
                    if (target == null) {
                        player.sendMessage("Your target " + args[0] + " is not online!");
                    }
                    else if (args.length == 1) {
                        if (args[0] != null && args[1] == null) {
                            Print.Player(player, ChatColor.RED + "Usage : /SetTemp <Player> <Amount -100 - 100>");
                        }
                    }
                    else if (args[0] != null && args[1] != null) {
                        if (args[1] == null) {
                            args[1] = "0";
                        }
                        final File PreUserData = new File("plugins/InTheWild/UserData/" + target.getUniqueId().toString() + "/Temperature.yml");
                        final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
                        FileMan.WriteToFile(PreUserData.toString(), "Temperature: " + Integer.valueOf(args[1]));
                    }
                }
            }
            else {
                Print.Player(player, ChatColor.RED + "You do not have permission to run this command!");
            }
        }
        if (sender instanceof ConsoleCommandSender) {
            if (args.length == 0) {
                Print.Console(ChatColor.RED + "Usage : /SetTemp <Player> <Amount -100 - 100>");
            }
            else {
                final Player target2 = Bukkit.getPlayerExact(args[0]);
                if (args[0] != null && args[1] == null) {
                    Print.Console(ChatColor.RED + "Usage : /SetTemp <Player> <Amount -100 - 100>");
                }
                if (target2 == null) {
                    Print.Console("Your target " + args[0] + " is not online!");
                }
                else if (args.length == 1) {
                    if (args[0] != null && args[1] == null) {
                        Print.Console(ChatColor.RED + "Usage : /SetTemp <Player> <Amount -100 - 100>");
                    }
                }
                else if (args[0] != null && args[1] != null) {
                    if (args[1] == null) {
                        args[1] = "0";
                    }
                    final File PreUserData2 = new File("plugins/InTheWild/UserData/" + target2.getUniqueId().toString() + "/Temperature.yml");
                    final FileConfiguration UserData2 = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData2);
                    FileMan.WriteToFile(PreUserData2.toString(), "Temperature: " + Integer.valueOf(args[1]));
                }
            }
        }
        return false;
    }
}
