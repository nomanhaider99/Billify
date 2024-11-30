export interface HomepageTypes {
    _id: string,
    heading: string
    _createdAt: any
    _type: string
    description: string
    services:  string[]
    image: {
        asset: {
            url: string,
            _id: string
        }
    } 
}