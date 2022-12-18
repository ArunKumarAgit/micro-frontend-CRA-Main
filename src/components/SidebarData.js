import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Recruitment',
    // path: '/Recruitment',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'BGC',
        path: '/bgc',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',
      },
    ],
  },
];
