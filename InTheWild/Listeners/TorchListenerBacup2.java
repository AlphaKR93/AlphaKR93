// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild.Listeners;

import org.bukkit.event.EventHandler;
import org.bukkit.plugin.Plugin;
import java.util.List;
import java.util.Iterator;
import org.bukkit.inventory.ItemStack;
import org.bukkit.Bukkit;
import io.github.pancakeboiii.core.OrdinalAPI.Minecraft.Print;
import io.Github.PancakeBoiii.InTheWild.Main;
import org.bukkit.Material;
import org.bukkit.event.block.BlockPlaceEvent;
import org.bukkit.event.Listener;

public class TorchListenerBacup2 implements Listener
{
    @EventHandler
    public void onPlace(final BlockPlaceEvent e) {
        if (e.getBlock().getType() == Material.TORCH || e.getBlock().getType() == Material.WALL_TORCH) {
            final List TorchLocations = Main.plugin.getConfig().getStringList("TorchLocations");
            TorchLocations.add(e.getBlock().getLocation().toString());
            Main.plugin.getConfig().set("TorchLocations", (Object)TorchLocations);
            Main.plugin.saveConfig();
            Print.Player(e.getPlayer(), new StringBuilder().append(e.getBlock().getLocation()).toString());
            Bukkit.getScheduler().scheduleSyncDelayedTask((Plugin)Main.plugin, (Runnable)new Runnable() {
                @Override
                public void run() {
                    if (e.getBlock().getType() == Material.TORCH || e.getBlock().getType() == Material.WALL_TORCH) {
                        for (final String TLCLocation : Main.plugin.getConfig().getStringList("TorchLocations")) {
                            if (TLCLocation.contains(e.getBlock().getLocation().toString())) {
                                final List<String> TorchLocations = (List<String>)Main.plugin.getConfig().getStringList("TorchLocations");
                                final String LocToFind = TLCLocation;
                                final boolean LocExists = TorchLocations.stream().anyMatch(user -> LocToFind.equals(e.getBlock().getLocation().toString()));
                                if (LocExists) {
                                    TorchLocations.remove(TLCLocation);
                                    Print.Player(e.getPlayer(), TLCLocation);
                                    Main.plugin.getConfig().set("TorchLocations", (Object)TorchLocations);
                                    Main.plugin.saveConfig();
                                    Bukkit.broadcastMessage("This message is shown after one second");
                                    e.getBlock().setType(Material.AIR);
                                    e.getPlayer().getWorld().dropItemNaturally(e.getBlock().getLocation(), new ItemStack(Material.STICK));
                                }
                                else {
                                    Print.Player(e.getPlayer(), "tesst");
                                }
                            }
                        }
                    }
                    else {
                        Print.Player(e.getPlayer(), "Block was removed");
                    }
                }
            }, 200L);
            Bukkit.getScheduler().scheduleSyncDelayedTask((Plugin)Main.plugin, (Runnable)new Runnable() {
                @Override
                public void run() {
                    for (final String TLCLocation : Main.plugin.getConfig().getStringList("TorchLocations")) {
                        Print.Console(TLCLocation);
                    }
                }
            }, 10L);
        }
    }
}
