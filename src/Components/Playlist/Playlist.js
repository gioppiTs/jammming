import React from "react";
import './Playlist.css'
import Tracklist from "../Tracklist/Tracklist";

function Playlist() {
    return (
        <div>
            <input placeholder="Nuova Playlist"/>
            <Tracklist />
            <button>Salva su Spotify</button>
        </div>
    );
}

export default Playlist