import database from '../content/gallery.json'

export interface Image {
    src: string
    description: string
}

export interface Database {
    [key: string]: Image
}

export function getAllImages(): Database {
    return database
}

export function getImageById(id: string): Image {
    return database[id]
}