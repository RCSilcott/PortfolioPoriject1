import { Team } from "./team/team"

export interface StandingResponse {
    get: string,
    response: ResponseBlock[]
}

export interface ResponseBlock {
    league: League
}

export interface League {
    id: string,
    name: string,
    country: string,
    logo: string,
    flag: string,
    season: string,
    standings: Array<StandingItem[]>
}

export interface StandingItem {
    rank: number,
    team: Team,
    points: number,
    goalsDiff: number,
    group: string,
    form: string,
    status: string,
    description: string,
    all: Record,
    home: Record,
    away: Record,
    update: Date
}


export interface Record {
    played: Number,
    win: Number,
    draw: Number,
    lose: Number,
    goals: Number
    for: Number,
    against: Number
}