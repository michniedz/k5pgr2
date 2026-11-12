import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import dane from './../film.js'
import film from "./../film.js";
const Filmy = () => {
    const [filmy, setFilmy] = useState(dane);
    const [tytul, setTytul] = useState("");
    const [rok, setRok] = useState("");
    const [kategoria, setKategoria] = useState("Komedia");

    const dodajFilm = () => {
        const newFilm = {
            id: Math.max(...filmy.map(x => x.id)+1),
            tytul: tytul,
            rok: rok,
            kategoria: kategoria,
            ocena: 0
        }
        setFilmy([...filmy, newFilm]);
        setTytul('');
        setRok('');
        setKategoria("Komedia");
    }
    const zmienOcene = (id, nota) =>{
        setFilmy(filmy.map(film =>
            film.id === id ? {...film, ocena: film.ocena + nota} : film));
    }
    return (
        <div className="container">
            <div>
                <h2>Dodaj nowy film</h2>
                <div className="mb-3">
                    <label htmlFor="tytul">Tytuł filmu</label>
                    <input type="text" value={tytul}
                           onChange={(e) => setTytul(e.target.value)}
                           id="tytul"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="rok">Rok wydania</label>
                    <input type="text" value={rok}
                           onChange={(e) => setRok(e.target.value)}
                           id="rok"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="kategoria">Kategoria</label>
                    <select id="kategoria" value={kategoria}
                            onChange={(e) => setKategoria(e.target.value)}>
                        <option value="Akcja">Akcja</option>
                        <option value="Komedia">Komedia</option>
                        <option value="Dramat">Dramat</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>
                    <button onClick={dodajFilm} className="btn btn-primary">Dodaj do listy</button>
                </div>
                <div>
                    <h2>Katalog filmów</h2>
                    {
                        filmy.map(film =>
                            <div className="card mb-3" key={film.id}>
                                <div className="card-body">
                                    <h4 className="card-title">Tytuł: {film.tytul}</h4>
                                    <p className="card-text">Rok: {film.rok}, kategoria: {film.kategoria}</p>
                                    <h5>Ocena: {film.ocena}</h5>
                                    <button onClick={()=>zmienOcene(film.id, 1)} className="btn btn-success">+</button>
                                    <button onClick={()=>zmienOcene(film.id, -1)}  className="btn btn-danger">-</button>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
            );
            };

            export default Filmy;