import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

const Pizza = () => {
    const [rozmiar, setRozmiar] = useState('srednia');
    const [ser, setSer] = useState(false);
    const [salami, setSalami] = useState(false);
    const [pieczarki, setPieczarki] = useState(false);
    const [kwota, setKwota] = useState(30);
    const [pokazPodsumowanie, setPokazPodsumowanie] = useState(false);
    const [wybraneDodatki, setWybraneDodatki] = useState('brak');
    const przeliczZamowienia = () => {
        let suma = 0;
        if (rozmiar === 'mala') suma += 20;
        else if (rozmiar === 'srednia') suma += 30;
        else if (rozmiar === 'duza') suma += 40;
        const dodatki = [];
        if (ser){
            dodatki.push('podwójny ser');
            suma += 5;
        }
        if (salami){
            dodatki.push('salami');
            suma += 4;
        }
        if (pieczarki){
            dodatki.push('pieczarki');
            suma += 3;
        }

        setWybraneDodatki(dodatki.length > 0 ? dodatki.join(', ') : 'brak');
        setPokazPodsumowanie(true);
        setKwota(suma);
    };
    return (
        <div className="container">
            <h1>Konfigurator Pizzy – wykonał: PESEL</h1>
            <div className="m-3">
                <label htmlFor="rozmiar">
                    Wybierz rozmiar:
                </label>
                <select className="form-select" id="rozmiar"
                        value={rozmiar}
                        onChange={e => setRozmiar(e.target.value)}>
                    <option value="mala">Mała (20zł)</option>
                    <option value="srednia">Średnia (30zł)</option>
                    <option value="duza">Duża (40zł)</option>
                </select>
            </div>
            <div className="m-3">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                           checked={ser}
                           onChange={e => setSer(e.target.checked)}
                           id="ser"/>
                    <label className="form-check-label" htmlFor="ser">
                        Podwójny ser (+5 zł)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                           checked={salami}
                           onChange={e => setSalami(e.target.checked)} id="salami"/>
                    <label className="form-check-label" htmlFor="salami">
                        Salami (+4 zł)
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                           checked={pieczarki}
                           onChange={e => setPieczarki(e.target.checked)} id="pieczarki"/>
                    <label className="form-check-label" htmlFor="pieczarki">
                        Pieczarki (+3 zł)
                    </label>
                </div>
                <button onClick={przeliczZamowienia}
                    className="btn btn-success">
                    Przelicz zamówienie
                </button>
            </div>
            {
                pokazPodsumowanie && (
                    <div className="m-3">
                        <h3>Do zapłaty: {kwota} zł</h3>
                        <p>Wybrane dodatki: {wybraneDodatki}</p>
                    </div>
                )}
        </div>
    );
};

export default Pizza;