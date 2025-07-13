declare interface NavLink {
    href: string;
    children: React.ReactNode;
}

declare interface ProductItem {
    image: string;
    type: string;
    title: string;
    description: string;
    stars: number;
    cost: number;
}