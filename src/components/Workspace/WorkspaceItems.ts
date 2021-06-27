export const ITEMS: Item[] = [
    {
        title: "Client contract",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        imagUrl: "/assets/icons/privacy.png",
        smallImageUrl: "/assets/icons/cog.png",
        type: "Contract",
        href: "/client"
    },
    {
        title: "Supplier contract",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        imagUrl: "/assets/icons/privacy.png",
        smallImageUrl: "/assets/icons/cog.png",
        type: "Contract",
        href: "/suplier"
    },
    {
        title: "Corporate",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        imagUrl: "/assets/icons/entities2.png",
        smallImageUrl: "/assets/icons/cog.png",
        type: "Contract",
        href: "/corpo"
    },
    {
        title: "Group Norms",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        imagUrl: "/assets/icons/publications.png",
        smallImageUrl: "/assets/icons/cog.png",
        type: "Norms",
        href: "/norms"
    },
    {
        title: "Real estate contracts",
        backgroundImageUrl: "https://via.placeholder.com/240x80/0000FF/808080",
        imagUrl: "/assets/icons/privacy.png",
        smallImageUrl: "/assets/icons/cog.png",
        type: "Contract",
        href: "/contract"
    }
];

export interface Item {
    title: string;
    backgroundImageUrl: string;
    imagUrl: string;
    smallImageUrl: string;
    type: string;
    href: string;
}