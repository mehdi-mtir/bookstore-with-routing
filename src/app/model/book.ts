export class Book {
  id : number;
  titre : string;
  auteur : string;
  datePublication : Date;

  constructor(id : number = 0, titre : string = "", auteur : string = "", datePublication : Date = new Date()){
    this.id = id;
    this.titre = titre ;
    this.auteur = auteur ;
    this.datePublication = datePublication ;
  }

}

