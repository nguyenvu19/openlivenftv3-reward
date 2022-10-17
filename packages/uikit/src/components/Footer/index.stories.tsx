import noop from "lodash/noop";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from "react-router-dom";
import { langs, footerLinks } from "./config";
import Footer from "./Footer";
import { FooterLinkType } from "./types";

export default {
  title: "Components/Menu/Footer",
  component: Footer,
};

const Template: React.FC<React.PropsWithChildren<{ footerLinks: FooterLinkType[] }>> = ({ ...args }) => {
  return (
    <BrowserRouter>
      <Footer {...args} />
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: footerLinks,
  isDark: true,
  toggleTheme: noop,
  langs,
  setLang: noop,
  currentLang: "EN",
  cakePriceUsd: 0.023158668932877668,
  // buyCakeLabel: "Buy CAKE",
};
