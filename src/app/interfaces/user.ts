export interface User {
    name: string,
    email: string,
    sector: string,
    role: string,
    firebaseId?: string | number,
    healthPlan?: string,
    dentalPlan?: string,
    // O '?' quer dizer que o campo é opcional.
}
