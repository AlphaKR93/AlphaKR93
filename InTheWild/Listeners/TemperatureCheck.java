// 
// Decompiled by Procyon v0.5.36
// 

package io.Github.PancakeBoiii.InTheWild.Listeners;

import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;
import java.io.File;
import org.bukkit.entity.Player;

public class TemperatureCheck
{
    public static String GetTemp(final Player p) {
        String TemperatureIcon = null;
        final File f = new File("plugins/InTheWild/UserData/" + p.getUniqueId().toString() + "/Temperature.yml");
        final FileConfiguration UserData = (FileConfiguration)YamlConfiguration.loadConfiguration(f);
        if (UserData.getInt("Temperature") >= 91) {
            TemperatureIcon = "\ue524";
        }
        if (UserData.getInt("Temperature") <= 90) {
            TemperatureIcon = "\ue523";
        }
        if (UserData.getInt("Temperature") <= 75) {
            TemperatureIcon = "\ue522";
        }
        if (UserData.getInt("Temperature") <= 60) {
            TemperatureIcon = "\ue521";
        }
        if (UserData.getInt("Temperature") <= 45) {
            TemperatureIcon = "\ue520";
        }
        if (UserData.getInt("Temperature") <= 30) {
            TemperatureIcon = "\ue519";
        }
        if (UserData.getInt("Temperature") <= 15) {
            TemperatureIcon = "\ue518";
        }
        if (UserData.getInt("Temperature") == 0) {
            TemperatureIcon = "\ue518";
        }
        if (UserData.getInt("Temperature") <= -15) {
            TemperatureIcon = "\ue517";
        }
        if (UserData.getInt("Temperature") <= -30) {
            TemperatureIcon = "\ue516";
        }
        if (UserData.getInt("Temperature") <= -45) {
            TemperatureIcon = "\ue515";
        }
        if (UserData.getInt("Temperature") <= -60) {
            TemperatureIcon = "\ue514";
        }
        if (UserData.getInt("Temperature") <= -75) {
            TemperatureIcon = "\ue513";
        }
        if (UserData.getInt("Temperature") <= -90) {
            TemperatureIcon = "\ue513";
        }
        if (UserData.getInt("Temperature") <= -91) {
            TemperatureIcon = "\ue512";
        }
        return TemperatureIcon;
    }
}
