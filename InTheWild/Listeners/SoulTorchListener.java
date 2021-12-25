// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild.Listeners;

import org.bukkit.event.block.BlockBreakEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.plugin.Plugin;
import org.bukkit.inventory.ItemStack;
import org.bukkit.Location;
import org.bukkit.Bukkit;
import io.Github.PancakeBoiii.InTheWild.Main;
import org.bukkit.Material;
import org.bukkit.event.block.BlockPlaceEvent;
import org.bukkit.event.Listener;

public class SoulTorchListener implements Listener
{
    @EventHandler
    public void onPlace(final BlockPlaceEvent e) {
        if (e.getBlock().getType() == Material.SOUL_TORCH || e.getBlock().getType() == Material.SOUL_WALL_TORCH) {
            final Location location = e.getBlock().getLocation();
            Main.plugin.getConfig().set("TorchLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ(), (Object)(String.valueOf(location.getBlockX()) + "/" + location.getBlockY() + "/" + location.getBlockZ() + "/" + location.getWorld().getName()));
            Main.plugin.saveConfig();
            final String[] TorchLocParts = Main.plugin.getConfig().getString("TorchLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ()).split("/");
            final Location TorchLoc = new Location(Bukkit.getServer().getWorld(TorchLocParts[3]), (double)Integer.parseInt(TorchLocParts[0]), (double)Integer.parseInt(TorchLocParts[1]), (double)Integer.parseInt(TorchLocParts[2]));
            Bukkit.getScheduler().scheduleSyncDelayedTask((Plugin)Main.plugin, (Runnable)new Runnable() {
                @Override
                public void run() {
                    if (Main.plugin.getConfig().getString("TorchLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ()) != null && (e.getBlock().getType() == Material.SOUL_TORCH || e.getBlock().getType() == Material.SOUL_WALL_TORCH)) {
                        Main.plugin.getConfig().set("TorchLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ(), (Object)null);
                        Main.plugin.saveConfig();
                        e.getBlock().setType(Material.AIR);
                        e.getPlayer().getWorld().dropItemNaturally(e.getBlock().getLocation(), new ItemStack(Material.STICK));
                    }
                }
            }, Main.plugin.getConfig().getInt("Soul-Torch-Burnout-Time") * 20L);
        }
    }
    
    @EventHandler
    public void onBreak(final BlockBreakEvent e) {
        if (e.getBlock().getType() == Material.SOUL_TORCH || e.getBlock().getType() == Material.SOUL_WALL_TORCH) {
            final Location location = e.getBlock().getLocation();
            final String[] TorchLocParts = Main.plugin.getConfig().getString("TorchLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ()).split("/");
            final Location TorchLoc = new Location(Bukkit.getServer().getWorld(TorchLocParts[3]), (double)Integer.parseInt(TorchLocParts[0]), (double)Integer.parseInt(TorchLocParts[1]), (double)Integer.parseInt(TorchLocParts[2]));
            Main.plugin.getConfig().set("TorchLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ(), (Object)null);
            Main.plugin.saveConfig();
        }
    }
}
