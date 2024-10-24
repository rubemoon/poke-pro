import React from "react";
import { APP_NAME, COPYRIGHT_YEAR, POKE_API_URL, AUTHOR_URL, AUTHOR } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mb-5 mt-4 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {COPYRIGHT_YEAR} by {APP_NAME} | Built with ❤️ by <a href={AUTHOR_URL} target="_blank" rel="noopener noreferrer" className="text-primary">{AUTHOR}</a>
      </small>
      <small className="block text-xs">
        This application uses data from the <a href={POKE_API_URL}  target="_blank" rel="noopener noreferrer" className="text-primary">PokeAPI</a>, which is a free and open-source RESTful API for Pokémon data.
      </small>
    </footer>
  );
}