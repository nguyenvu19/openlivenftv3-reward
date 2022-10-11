export type FooterLinkType = {
  label: string;
  href?: string;
  target?: string;
  items: { label: string; href?: string; isHighlighted?: boolean }[];
};
