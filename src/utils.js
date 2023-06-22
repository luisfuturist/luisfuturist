const getShieldUrl = (item) => {
  let { label, name, color, logo } = item;
  name = encodeURIComponent(name);
  label = label || "";
  color = color.replace("#", "");
  logo = logo || "";

  return `https://img.shields.io/badge/${label}-${name}-${color}?style=flat-square&logo=${logo}`.replaceAll(
    " ",
    "%20"
  );
};

const _badge = (name, link, alt, color, logo) => {
  return {
    name: name,
    link: link,
    alt: alt,
    color: color,
    logo: logo,
  };
};

export { getShieldUrl, _badge };
