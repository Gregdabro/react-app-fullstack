import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Телевизоры"}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Asus"}
        ]
        this._devices = [
            {
                id: 1,
                name: "12 pro",
                price: 100000,
                rating: 0,
                img: "d50868e0-61d9-4c9d-9a9c-6b8870309c3f.jpg"
            },
            {
                id: 2,
                name: "a51",
                price: 1000234,
                rating: 0,
                img: "a9112a38-3be3-44f6-b41a-9e9d3b9528fd.jpg"
            },
            {
                id: 3,
                name: "a515",
                price: 1000234,
                rating: 0,
                img: "d5a7d50a-27a0-491f-949c-74b604119b1d.jpg"
            },
            {
                id: 4,
                name: "note pro",
                price: 1000234,
                rating: 0,
                img: "6ee111c3-dc49-46e2-9b4e-902866ae47c3.jpg"
            },
            {
                id: 5,
                name: "Atlant",
                price: 10051,
                rating: 0,
                img: "4e1b1d93-6c01-49ec-88f3-840b129b59e4.jpg"
            }
        ]

        this._selectedType = {};
        this._selectedBrand = {};

        makeAutoObservable(this);
    }

    setTypes(types) {
        this.types = types;
    }
    setBrands(brands) {
        this.brands = brands;
    }
    setDevices(devices) {
        this.devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

}
