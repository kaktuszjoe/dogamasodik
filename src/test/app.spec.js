//JakabosÁbel 2023.05.18 , sz/i/n

describe("szamitasteszt", () => {
    it('szamitas', () => {
        let actual  =  calcSurface(10,10)
        expect(actual).toEqual(1256.6370614359173)})

        it('helyes eredmény', () => {        
            let actual =  calcSurface(0,0) ;
            expect(actual).toEqual(0)
        })

        it('helyes eredmény', () => {        
            let actual =  calcSurface(0,0) ;
            expect(actual).toEqual(0)       
            
        })
    
    
    

    });



describe("bemenetteszt", () => {
    it('rosszinput', () => {
    let actual  =  isGoodInput("we")
     expect(actual).toBe(false)})
     
    it('rosszinput', () => {
        let actual  =  isGoodInput("1231283798j")
         expect(actual).toBe(false)})


         it('joinput', () => {
            let actual  =  isGoodInput("12")
             expect(actual).toBe(true)})
    
    
    
    });