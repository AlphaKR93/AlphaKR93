// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild.Listeners;

import org.bukkit.event.block.BlockBreakEvent;
import org.bukkit.event.EventHandler;
import org.bukkit.plugin.Plugin;
import org.bukkit.block.data.BlockData;
import org.bukkit.block.data.Lightable;
import org.bukkit.Location;
import org.bukkit.Bukkit;
import io.Github.PancakeBoiii.InTheWild.Main;
import org.bukkit.Material;
import org.bukkit.event.block.BlockPlaceEvent;
import org.bukkit.event.Listener;

public class CampfireListener implements Listener
{
    @EventHandler
    public void onPlace(final BlockPlaceEvent e) {
        if (e.getBlock().getType() == Material.CAMPFIRE) {
            final Location location = e.getBlock().getLocation();
            Main.plugin.getConfig().set("CampfireLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ(), (Object)(String.valueOf(location.getBlockX()) + "/" + location.getBlockY() + "/" + location.getBlockZ() + "/" + location.getWorld().getName()));
            Main.plugin.saveConfig();
            final String[] CampLocParts = Main.plugin.getConfig().getString("CampfireLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ()).split("/");
            final Location CampLoc = new Location(Bukkit.getServer().getWorld(CampLocParts[3]), (double)Integer.parseInt(CampLocParts[0]), (double)Integer.parseInt(CampLocParts[1]), (double)Integer.parseInt(CampLocParts[2]));
            Bukkit.getScheduler().scheduleSyncDelayedTask((Plugin)Main.plugin, (Runnable)new Runnable() {
                @Override
                public void run() {
                    if (Main.plugin.getConfig().getString("CampfireLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ()) != null && e.getBlock().getType() == Material.CAMPFIRE) {
                        Main.plugin.getConfig().set("CampfireLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ(), (Object)null);
                        Main.plugin.saveConfig();
                        final Lightable data = (Lightable)e.getBlock().getBlockData();
                        data.setLit(false);
                        e.getBlock().setBlockData((BlockData)data);
                    }
                }
            }, Main.plugin.getConfig().getInt("Campfire-Burnout-Time") * 20L);
        }
    }
    
    @EventHandler
    public void onBreak(final BlockBreakEvent e) {
        if (e.getBlock().getType() == Material.CAMPFIRE) {
            final Location location = e.getBlock().getLocation();
            final String[] CampLocParts = Main.plugin.getConfig().getString("CampfireLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ()).split("/");
            final Location CampLoc = new Location(Bukkit.getServer().getWorld(CampLocParts[3]), (double)Integer.parseInt(CampLocParts[0]), (double)Integer.parseInt(CampLocParts[1]), (double)Integer.parseInt(CampLocParts[2]));
            Main.plugin.getConfig().set("CampfireLocations." + location.getBlockX() + location.getBlockY() + location.getBlockZ(), (Object)null);
            Main.plugin.saveConfig();
        }
    }
}
