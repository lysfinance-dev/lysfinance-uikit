export const links = [
  {
    label: 'Menu',
    icon: 'HomeIcon'
  },
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trading',
    icon: 'HomeIcon'
  },
  {
    label: 'Lys Markets',
    icon: 'TradeIcon',
    href: '/',
  },
  {
    label: 'Swap',
    icon: 'SwapIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x57067A6BD75c0E95a6A5f158455926e43E79BeB0',
        external: true,
      },
      {
        label: 'Liquidity',
        href:
        'https://exchange.pancakeswap.finance/#/add/BNB/0x57067A6BD75c0E95a6A5f158455926e43E79BeB0',
        external: true,
      },
    ]
  },
  {
    label: 'Yield',
    icon: 'HomeIcon'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Lys Garden',
    icon: 'PoolIcon',
    href: '/pools',
    spin: true,
  },
  {
    label: 'Miscs',
    icon: 'HomeIcon',
  },
  {
    label: 'Lottery',
    icon: 'LotteryIcon',
    href: '/lottery',
  },
  {
    label: 'NFT Market',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: '/roadmap',
  },
  {
    label: 'Github',
    icon: 'GithubIcon',
    href: 'https://github.com/lysfinance-dev',
    external: true,
  },
  {
    label: 'Medium',
    icon: 'MediumIcon',
    href: 'https://lysfinance.medium.com',
    external: true,
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "Chat group",
        href: "https://t.me/LysFinance",
      },
      {
        label: "Announcements",
        href: "https://t.me/LysFinanceAnnouncement",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/lysfinance",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
