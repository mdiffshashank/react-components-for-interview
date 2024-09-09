
export type MenuList = MenuItem[];

export type MenuItem = {
  label: string;
  to: string;
  children?: MenuList;
};


export const menuList: MenuList= [
  {
    label: "Home",
    to: "/home",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "/details",
        children: [
          {
            label: "Location",
            to: "/location",
            children: [{ label: "City", to: "/city" }],
          },
        ],
      },
    ],
  },
  {label:"Settings",to:"/settings",children:[
    {
        label:"Account",
        to:"/account",
        
    },
    {
        label:"Security",
        to:"/security",
        children:[
            {
                label:"Login",
                to:"/login"
            },
            {
                label:"Register",
                to:"/register"
            }
        ]
    }
  ]}
];
