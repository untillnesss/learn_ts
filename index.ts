// let tupple: [string, boolean];
// tupple = ["said", true];

// console.log("tupple :>> ", tupple);

// let umur: number = 10;
// umur = 1.2;
// console.log("umur :>> ", umur);

// function returnVoid() {
//   console.log("aku adalah anak gembala");
//   console.log("aku adalah anak gembala");
//   return;
// }

// returnVoid();

// const kalikan = (angka1: number, angka2: number): number => {
//   return angka1 * angka2;
// };

// let hasilPerkalian: number = kalikan(3, 8);

// console.log("kalikan :>> ", hasilPerkalian);

// type Angaka = number;

// let typeAngka: Angaka = 23;

// type User = {
//   name: string;
//   umur: Angaka;
// };

// let userSaid: User = {
//   name: "ass",
//   umur: 0,
// };

// class Hewan {
//   public jenisHewan: string;
//   private _suara!: string;

//   public get suara(): string {
//     return this._suara;
//   }
//   public set suara(value: string) {
//     this._suara = value;
//   }

//   constructor(jenisHewan: string) {
//     this.jenisHewan = jenisHewan;
//   }

//   public bersuara(): string{
//     return `suara ${this.jenisHewan} = ${this.suara}`
//   }
// }

// let sapi :Hewan = new Hewan('sas');
// sapi.suara = 'mooooww'
// console.log('sapi :>> ', sapi.jenisHewan);
// console.log('suara sapi :>> ', sapi.bersuara());

// class Mamalia {
//   constructor(public nama: string) {}

//   protected getName(): string {
//     return this.nama;
//   }

//   public menyusui(): string {
//     return `Hewan ${this.nama} sedang menyusui`;
//   }
// }

// class Sapi extends Mamalia {
//   constructor(public suara: string, nama: string) {
//     super(nama);
//   }

//   public bersuara(): string {
//     return `Maauuuu suara ${super.getName()}`;
//   }
// }

// let hewanSapi: Sapi = new Sapi("Mooauauu", "Sapiiiii");
// console.log("object :>> ", hewanSapi.menyusui());
// console.log("object :>> ", hewanSapi.bersuara());

abstract class Hewan {
  abstract nama: string;
  abstract suara: string;

  public bersuara(): string {
    return `${this.nama} suaranya ${this.suara}`;
  }
}

class Sapi extends Hewan {
  nama: string = "Sapi";
  suara: string = "Maauuu";
}


let sapi = new Sapi
console.log('sapis :>> ', sapi.bersuara());