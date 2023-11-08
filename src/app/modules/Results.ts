import { User } from "./User"

export class Results {
  "results":
    Array<User>;
  "info"?: {
    "seed": string,
    "results": number,
    "page": number,
    "version": string
  }
}
