// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly github: string;
    readonly skills: string[];
    readonly company: string;
}