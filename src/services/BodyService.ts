export class BodyService {
  public setOverflow(isNoOverflow: boolean) {
    document.body.classList.toggle("no-overflow", isNoOverflow);
  }
}
