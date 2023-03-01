describe('Pruebas en Types', () => { 
    test('debe regresar esos types', () => { 

        const type = {
            login: "[Auth] login",
            logout: "[Auth] logout",
        }

        expect(type).toEqual({
            login: "[Auth] login",
            logout: "[Auth] logout",
        })
     })
 })