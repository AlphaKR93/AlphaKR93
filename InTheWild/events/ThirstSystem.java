// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild.events;

import java.util.Iterator;
import org.bukkit.potion.PotionData;
import io.github.pancakeboiii.core.OrdinalAPI.Minecraft.MCP;
import org.bukkit.potion.PotionType;
import org.bukkit.inventory.meta.PotionMeta;
import org.bukkit.event.player.PlayerItemConsumeEvent;
import org.bukkit.Material;
import org.bukkit.potion.PotionEffectType;
import org.bukkit.event.EventHandler;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.entity.Player;
import io.github.pancakeboiii.core.OrdinalAPI.DataManager.FileMan;
import java.util.Random;
import org.bukkit.configuration.file.YamlConfiguration;
import java.io.File;
import org.bukkit.event.player.PlayerMoveEvent;
import com.google.common.collect.Sets;
import java.util.UUID;
import java.util.Set;
import org.bukkit.event.Listener;

public class ThirstSystem implements Listener
{
    private Set<UUID> prevPlayersOnGround;
    
    public ThirstSystem() {
        this.prevPlayersOnGround = (Set<UUID>)Sets.newHashSet();
    }
    
    @EventHandler
    public void onMove(final PlayerMoveEvent e) {
        final Player p = e.getPlayer();
        final File PreUserData = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Thirst.yml");
        final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
        if (e.getFrom().getZ() != e.getTo().getZ() && e.getFrom().getX() != e.getTo().getX()) {
            final Random r = new Random();
            final int low = 0;
            final int high = 200;
            final int result = r.nextInt(high - low) + low;
            if (UserData.getInt("Thirst") >= 0 && result >= 198) {
                final int NewThirst = UserData.getInt("Thirst") - 1;
                FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
            }
        }
    }
    
    @EventHandler
    public void Jump(final PlayerMoveEvent e) {
        final Player player = e.getPlayer();
        final File PreUserData = new File("plugins/InTheWild/UserData/" + player.getUniqueId().toString() + "/Thirst.yml");
        final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
        if (player.getVelocity().getY() > 0.0) {
            double jumpVelocity = 0.41999998688697815;
            if (player.hasPotionEffect(PotionEffectType.JUMP)) {
                jumpVelocity += (player.getPotionEffect(PotionEffectType.JUMP).getAmplifier() + 1) * 0.1f;
            }
            if (e.getPlayer().getLocation().getBlock().getType() != Material.LADDER && this.prevPlayersOnGround.contains(player.getUniqueId()) && !player.isOnGround() && Double.compare(player.getVelocity().getY(), jumpVelocity) == 0) {
                final Random r = new Random();
                final int low = 0;
                final int high = 160;
                final int result = r.nextInt(high - low) + low;
                if (UserData.getInt("Thirst") >= 0 && result >= 155) {
                    final int NewThirst = UserData.getInt("Thirst") - 1;
                    FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
                }
            }
        }
        if (player.isOnGround()) {
            this.prevPlayersOnGround.add(player.getUniqueId());
        }
        else {
            this.prevPlayersOnGround.remove(player.getUniqueId());
        }
    }
    
    @EventHandler
    public void Dronk(final PlayerItemConsumeEvent e) {
        final Player player = e.getPlayer();
        final File PreUserData = new File("plugins/InTheWild/UserData/" + player.getUniqueId().toString() + "/Thirst.yml");
        final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(PreUserData);
        if (e.getItem().getType().equals((Object)Material.MILK_BUCKET)) {
            int NewThirst = UserData.getInt("Thirst") + 30;
            if (NewThirst >= 100) {
                NewThirst = 100;
            }
            FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
        }
        if (e.getItem().getType().equals((Object)Material.RABBIT_STEW)) {
            int NewThirst = UserData.getInt("Thirst") + 25;
            if (NewThirst >= 100) {
                NewThirst = 100;
            }
            FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
        }
        if (e.getItem().getType().equals((Object)Material.MUSHROOM_STEW)) {
            int NewThirst = UserData.getInt("Thirst") + 20;
            if (NewThirst >= 100) {
                NewThirst = 100;
            }
            FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
        }
        if (e.getItem().getType().equals((Object)Material.BEETROOT_SOUP)) {
            int NewThirst = UserData.getInt("Thirst") + 10;
            if (NewThirst >= 100) {
                NewThirst = 100;
            }
            FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
        }
        if (e.getItem().getType().equals((Object)Material.SWEET_BERRIES)) {
            int NewThirst = UserData.getInt("Thirst") + 1;
            if (NewThirst >= 100) {
                NewThirst = 100;
            }
            FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
        }
        if (e.getItem().getType().equals((Object)Material.APPLE)) {
            int NewThirst = UserData.getInt("Thirst") + 5;
            if (NewThirst >= 100) {
                NewThirst = 100;
            }
            FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
        }
        if (e.getItem().getType().equals((Object)Material.GOLDEN_APPLE)) {
            int NewThirst = UserData.getInt("Thirst") + 20;
            if (NewThirst >= 100) {
                NewThirst = 100;
            }
            FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
        }
        if (e.getItem().getType().equals((Object)Material.ENCHANTED_GOLDEN_APPLE)) {
            int NewThirst = UserData.getInt("Thirst") + 60;
            if (NewThirst >= 100) {
                NewThirst = 100;
            }
            FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst);
        }
        if (e.getItem() != null && e.getItem().hasItemMeta() && e.getItem().getItemMeta() instanceof PotionMeta) {
            final PotionMeta meta = (PotionMeta)e.getItem().getItemMeta();
            final PotionData data = meta.getBasePotionData();
            if (data.getType() == PotionType.MUNDANE) {
                int NewThirst2 = UserData.getInt("Thirst") + 20;
                if (NewThirst2 >= 100) {
                    NewThirst2 = 100;
                }
                FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst2);
            }
            if (data.getType() == PotionType.WATER && e.getItem().getItemMeta().getLore() != null) {
                for (final String s : e.getItem().getItemMeta().getLore()) {
                    FileMan.WriteToFile("plugins/Purified.txt", new StringBuilder().append(e.getItem().getItemMeta().getLore().toString()).toString());
                    if (e.getItem().getItemMeta().getLore().toString().contains(s)) {
                        int NewThirst3 = UserData.getInt("Thirst") + 35;
                        if (NewThirst3 >= 100) {
                            NewThirst3 = 100;
                        }
                        FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst3);
                    }
                }
            }
            if (e.getItem().getItemMeta().getLore() == null && data.getType() == PotionType.WATER) {
                int NewThirst2 = UserData.getInt("Thirst") + 5;
                if (NewThirst2 >= 100) {
                    NewThirst2 = 100;
                }
                FileMan.WriteToFile(PreUserData.toString(), "Thirst: " + NewThirst2);
                final Random r = new Random();
                final int low = 0;
                final int high = 2;
                final int result = r.nextInt(high - low) + low;
                if (UserData.getInt("Thirst") >= 0 && result >= 1) {
                    MCP.AddPotionEffect(e.getPlayer(), "HUNGER", 20, 0, false, false, false);
                }
            }
        }
    }
}
