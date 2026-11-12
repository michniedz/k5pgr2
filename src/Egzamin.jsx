import React, {useState} from 'react';
import dane from "./dane.js";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
const Egzamin = () => {
    const [kwiaty, setKwiaty] = useState(true);
    const [zwierzeta, setZwierzeta] = useState(true);
    const [samochody, setSamochody] = useState(true);
    const [danezdjec, setDanezdjec] = useState(dane);

    const zwiekszPobrania = (id) => {
        setDanezdjec(danezdjec.map(zdjecie => {
                if (zdjecie.id === id) {
                    zdjecie.downloads++;
                }
                return zdjecie;
            }
        ));
    }

    return (
        <div>
            <h1>Kategorie zdjęć</h1>
            <div className="przelaczniki">
                <div className="form-check form-switch">
                    <input className="form-check-input"
                           checked={kwiaty}
                           onChange={() => setKwiaty(!kwiaty)}
                           type="checkbox" id="ctrId"/>
                    <label className="form-check-label" htmlFor="ctrId">Kwiaty</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" checked={zwierzeta}
                           onChange={() => setZwierzeta(!zwierzeta)}
                           type="checkbox" id=" ctrId2"/>
                    <label className="form-check-label" htmlFor=" ctrId2">Zwierzęta</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" checked={samochody}
                           onChange={() => setSamochody(!samochody)} type="checkbox" id=" ctrId3"/>
                    <label className="form-check-label" htmlFor=" ctrId3">Samochody</label>
                </div>
            </div>
            <div className="kontener-zdjec">
                {
                    dane
                        .filter(zdjecie => {
                            if(zdjecie.category === 1) return kwiaty;
                            if(zdjecie.category === 2) return zwierzeta;
                            if(zdjecie.category === 3) return samochody;
                        })
                        .map(zdjecie =>
                        <div key={zdjecie.id}>
                            <img src={`assets/${zdjecie.filename}`} alt={zdjecie.alt} />
                            <h4>Pobrań: {zdjecie.downloads}</h4>
                            <button className="btn btn-success"
                                    onClick={() => zwiekszPobrania(zdjecie.id)}>Pobierz</button>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Egzamin;