import React, {useEffect, useState} from 'react';

const CwiczeniaUseEffect = () => {
    // const [licznik, setLicznik] = useState(10);
    // const [suma, setSuma] = useState(110);
    // useEffect(() => {
    //     console.log("Wykonanie useEffect lub aktualizacja");
    // });
    // useEffect(() => {
    //     console.log("Wyrenderowanie tylko jeden raz");
    //     const timer = setInterval(() => {
    //         console.log("Zegar włączony...")
    //     }, 1000);
    //     return () => {
    //         clearInterval(timer);
    //         console.log("Zatrzymano zegar");
    //     };
    // }, [])
    // useEffect(() => {
    //     console.log("Wyrenderowanie po zmianie licznik: " + licznik);
    // },[licznik])
    const [jestOnline, setJestOnline] = useState(window.navigator.onLine);
    useEffect(() => {
        window.addEventListener('online', ()=>setJestOnline(false));
        window.addEventListener('offline', ()=>setJestOnline(true));
        return () => {
            window.removeEventListener('online', ()=>setJestOnline(false));
            window.removeEventListener('offline', ()=>setJestOnline(false));
        };
    },[]);
    return (
        <div>
            <p>Online: {jestOnline ? 'Online' : 'Offline'}</p>
            <button onClick={()=>setLicznik(licznik+1)}>Zwiększ</button>
            <button onClick={()=>setSuma(suma+licznik)}>Suma</button>
        </div>
    );
};

export default CwiczeniaUseEffect;