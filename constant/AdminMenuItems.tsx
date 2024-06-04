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
    {
        title: 'Sale Bikes Queries',
        icon: 'fa-motorcycle',
        link: "/admin/sellBikeQuries"
    },
    // {
    //     title: 'Old Bikes',
    //     icon: 'fa-person-biking',
    //     link: "/oldBikes"
    // },
    {
        title: 'Buy Bikes Queries',
        icon: 'fa-person-circle-question',
        link: "/admin/queries"
    }
] 