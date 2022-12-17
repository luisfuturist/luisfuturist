const badgeUrl = (item) => {
    let { label, name, color, logo } = item;
    name = encodeURIComponent(name)
    label = label || "";
    color = color.replace("#", "");
    logo = logo || "";

    return `https://img.shields.io/badge/${label}-${name}-${color}?style=flat-square&logo=${logo}`
        .replaceAll(" ", "%20");
};

const badge = (item) => {
    const url = badgeUrl(item);
    return `[![${item.alt}](${url})](${item.link})`;
};

const inlineBadges = (items) => items.reduce(
    (obj, item) => obj += badge(item) + " ",
    ""
);

export {
    badgeUrl,
    badge,
    inlineBadges,
};