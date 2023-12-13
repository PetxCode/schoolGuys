import { HTTP } from "../utils/enums";
import { iError } from "../utils/interface";

export class mainError extends Error {
  public readonly name: string;
  public readonly message: string;
  public readonly status: HTTP;
  public readonly success: boolean = false;

  constructor(args: iError) {
    super(args.message);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = args.name;
    this.message = args.message;
    this.status = args.status;

    if (this.success === undefined) {
      this.success = args.success;
    }
    Error.captureStackTrace;
  }
}
