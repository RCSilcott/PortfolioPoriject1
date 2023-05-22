import { Team } from "./team/team"

export interface TeamInformation {
    response: TeamInformationResponse[]
}

interface TeamInformationResponse{
    team: Team,
    venue: Venue
}

interface Venue {
    id: number,
    name: string,
    address: string,
    city: string,
    capacity: number,
    surface: string,
    image: string
}
