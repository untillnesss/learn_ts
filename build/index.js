"use strict";
// let tupple: [string, boolean];
// tupple = ["said", true];
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Hewan = /** @class */ (function () {
    function Hewan() {
    }
    Hewan.prototype.bersuara = function () {
        return this.nama + " suaranya " + this.suara;
    };
    return Hewan;
}());
var Sapi = /** @class */ (function (_super) {
    __extends(Sapi, _super);
    function Sapi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nama = "Sapi";
        _this.suara = "Maauuu";
        return _this;
    }
    return Sapi;
}(Hewan));
var sapi = new Sapi;
console.log('sapi :>> ', sapi.bersuara());
