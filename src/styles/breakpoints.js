const size = {
  phone: "600px",
  tablet: "990px",
  laptop: "992px",
  desktop: "1200px",
  tv: "1400px",
};

export const device = {
  phone: `(max-width: ${size.phone})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  tv: `(min-width: ${size.tv})`,
};
