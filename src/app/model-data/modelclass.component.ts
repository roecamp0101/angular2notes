//export Person class model
export class Person {
//using constructor to add model add model values
constructor(public firstname: string, public lastname: string, public occ:string) {
    this.firstname = firstname; //model value firstname
    this.lastname = lastname; //model value lastname
    this.occ = occ; //model value occ
  }


}