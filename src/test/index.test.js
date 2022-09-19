import { signUserIn } from 'services/authService'
import { getAllProdukS } from 'services/produk'

describe('api', function () {
    describe('POST /auth/login', function () {
        it('res auth login', async function (done) {
            await signUserIn({
                email: "user@gmail.com",
                password: "123"
            })
            done()
        });
    });

    describe('GET /produk/get', function () {
        it('respond with an array of produk', async function (done) {
            await getAllProdukS()
            done()
        });
    });
});