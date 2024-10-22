/*
    // az szeretnék, hogy egyetlen helyen tudjuk kezelni a *globális változókat*
    // amelyeket más komponensekben is használunk példálul  
    // // katt függvényt, listát
    // nem lesz szükséges buborékoltatásra az adatok több komponensen való
    // átadására
    // a context fogja tartalmazni az állapotatot, az adatokat
    // itt módosítjuk

    Provider tartalmazza az állapotot, adatokat itt módosítjuk és ezt rendeli hozzá
    a contex a provider az általa körbeöltet komponensek számára tudja átadni
    az adatokat


    useContext hook-  itt mondjuk meg az egyes komponensekben, hogy melyik adatok
    akarjuk felhasználni
*/

import { createContext, useState } from "react";

// létrehozzuk a context objekutmokat
export const KattContext = createContext("");
// létrehozunk egy providert ehhez a contexthez

export const KattProvider = ({children}) => {
    
    const [lista, setLista] = useState([
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
        " ",
      ]);
      const [lepes, setLepes] = useState(0);
      function katt(adat) {
        //itt akarjuk lekezelni,hogy melyik elemre kattintuntunk és mit írjunk a listába
        lista[adat] = "X";
        //a state-ket közvetlenül nem módósíthatjuk csak a beállító függvényen keresztül
        //1. Csinálunk egy másolatott az adatról
        //const slista=lista //ne referencoát adjunk átt, hanem másolatot készítsünk
        const slista = [...lista];
        //2. a másolat módosítása
        if (lepes % 2 === 0) {
          slista[adat] = "X";
        } else {
          slista[adat] = "O";
        }
        let slepes = lepes;
        slepes++;
        setLepes(slepes);
        // setLepes(lepes+1) ez is jó lenne
        //3. a másolatot értékül adjuk az eredetinek
        setLista([...slista]);
         
         
      }
    
    return <KattContext.Provider value={{lista, katt}}>
        {""}{children}{""}
    </KattContext.Provider>
}