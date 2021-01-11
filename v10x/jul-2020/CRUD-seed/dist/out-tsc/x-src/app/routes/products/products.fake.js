export const productsFake = [
    {
        id: Date.now() + Math.floor(Math.random() * 100000 + 1),
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        date: new Date().toString(),
        get hHMmSs() {
            return this.date.split(' ')[4];
        }
    },
    {
        id: Date.now() + Math.floor(Math.random() * 100000 + 1),
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        date: new Date().toString(),
        get hHMmSs() {
            return this.date.split(' ')[4];
        }
    },
    {
        id: Date.now() + Math.floor(Math.random() * 100000 + 1),
        name: 'Phone Standard',
        price: 299,
        description: 'no description',
        date: new Date().toString(),
        get hHMmSs() {
            return this.date.split(' ')[4];
        }
    }
];
//# sourceMappingURL=products.fake.js.map