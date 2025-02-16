const communitySidebar = [
  {
    type: 'html',
    className: 'sidebar-title',
    value: 'Community',
    defaultStyle: true,
  },
  'community-and-support',
  {
    type: 'category',
    label: 'Testnet Guides',
    link: {
      type: 'doc',
      id: 'testnet-guides',
    },
    items: [
      'guide-testnet-connect',
      'guide-testnet-faucet',
      'guide-testnet-tx',
    ],
  },
];

module.exports = {
  communitySidebar,
};
