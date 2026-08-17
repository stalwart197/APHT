function buildButtonRow(cfg, guildId, disabled = false) {
    // announceOn varsayılan olarak false (kapalı) yapıldı
    cfg.announceLevelUp = false; 
    const systemOn = cfg.enabled !== false;
    return new ActionRowBuilder().addComponents(
        new ButtonBuilder()
            .setCustomId(`level_cfg_toggle_announce_${guildId}`)
            .setLabel('Announcements (Disabled)')
            .setStyle(ButtonStyle.Danger)
            .setEmoji('🔇')
            .setDisabled(disabled),
        new ButtonBuilder()
            .setCustomId(`level_cfg_toggle_system_${guildId}`)
            .setLabel('Leveling')
            .setStyle(systemOn ? ButtonStyle.Success : ButtonStyle.Danger)
            .setEmoji('⚡')
            .setDisabled(disabled),
    );
}
