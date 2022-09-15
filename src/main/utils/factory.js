function _badge(name, link, alt, color, logo) {
    return {
        name: name,
        link: link,
        alt: alt,
        color: color,
        logo: logo,
    };
}

function _badgeLabel(name, label, link, alt, color) {
    return {
        name: name,
        label: label,
        link: link,
        color: color,
        alt: alt,
    };
}

function _wallet(name, pk) {
    return {
        name,
        pk,
    };
}

export {
    _badge,
    _badgeLabel,
    _wallet,
};