export type PlatformsDfn = {
    platforms: {
        id: number,
        platformName: string,
        platformImageUrl: string,
        platformInfo: string,
        platformSlug: (string[]),
        platformList: [
            {
                id: string,
                name: string
            }
        ]
    }[]
};

export type PlatformDfn = {
    platform: {
        id: number,
        platformName: string,
        platformImageUrl: string,
        platformInfo: string,
        platformSlug: (string[]),
        platformList: [
            {
                id: string,
                name: string
            }
        ]
    }
};