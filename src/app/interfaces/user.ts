export interface User {
    name: string,
    email: string,
    sector: string,
    role: string,
    firebaseId?: string | number,
    healthPan?: string,
    dentalPan?: string,
    // O '?' quer dizer que o campo é opcional.
}
