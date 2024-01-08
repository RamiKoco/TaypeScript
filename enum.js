// enum cars {'BMW','Test','Deneme'};
// console.log(cars.BMW);
// console.log(cars.Deneme);
// console.log(cars.Test);
var gunler;
(function (gunler) {
    gunler[gunler["pzt"] = 0] = "pzt";
    gunler[gunler["sal\u0131"] = 1] = "sal\u0131";
    gunler[gunler["\u00E7a"] = 2] = "\u00E7a";
    gunler[gunler["per"] = 3] = "per";
    gunler[gunler["cum"] = 4] = "cum";
    gunler[gunler["cmt"] = 5] = "cmt";
    gunler[gunler["pz"] = 6] = "pz";
})(gunler || (gunler = {}));
;
console.log(gunler.cum);
