const nadaByExampleSidebar = require('./sidebar-nada-by-example');
const nilVmSidebar = require('./sidebar-nilvm');
const apiSidebar = require('./sidebar-api');
const { learnSidebar } = require('./sidebar-learn');
const { buildSidebar } = require('./sidebar-build');
const { communitySidebar } = require('./sidebar-community');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  nillionSidebar: [...learnSidebar, ...buildSidebar, ...communitySidebar],
  nadaByExampleSidebar,
  nilVmSidebar,
  apiSidebar: apiSidebar,
};

export default sidebars;
