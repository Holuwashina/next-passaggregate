export type Platforms = {
        id: number,
        platformName: string,
        platformImageUrl: string,
        platformInfo: string,
        platformList: [
            {
                id: string,
                name: string
            }
        ]
};

export type School = {
    id: string,
    slug: string,
    name: string,
    info: string
};