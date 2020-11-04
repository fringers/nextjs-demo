import database from '../content/gallery.json'

export interface Image {
    id: string
    src: string
    description: string
}

export function getAllImages(): Image[] {
    return Object.entries(database).map(image => {
        return {
            id: image[0],
            src: image[1].src,
            description: image[1].description
        }
    })
}

export function getAllIds(): string[] {
    return Object.keys(database)
}

export function getImageById(id: string): Image {
    return {
        id,
        src: database[id].src,
        description: database[id].description
    }
}
