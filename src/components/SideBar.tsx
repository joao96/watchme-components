import { GenreResponseProps } from "../@types/GenreResponseProps";
import { Button } from "./Button";

type SideBarProps = {
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
  genres: GenreResponseProps[];
};

export function SideBar({
  genres,
  handleClickButton,
  selectedGenreId,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
