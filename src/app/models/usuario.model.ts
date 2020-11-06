export class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public pasword?: string,
    public img?: string,
    public google?: boolean,
    public roles?: string,
    public id?: string
  ) {}
}
