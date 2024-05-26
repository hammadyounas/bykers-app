export interface MenuItems {
    title: string;
    icon: string;
    link: string;
}

export const MenuItemsConstant: MenuItems[] = [
    {
        title: 'View Bikes',
        icon: 'fa-eye',
        link: "/admin/viewBikes"
    },
    // {
    //     title: 'New Bikes',
    //     icon: 'fa-motorcycle',
    //     link: "/newBikes"
    // },
    // {
    //     title: 'Old Bikes',
    //     icon: 'fa-person-biking',
    //     link: "/oldBikes"
    // },
    {
        title: 'Queries',
        icon: 'fa-person-circle-question',
        link: "/admin/queries"
    }
] 