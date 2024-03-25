import NoteForm from "../NoteForm/NoteForm";
import { NoteData } from "../../App";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};

function NewNote({ onSubmit }: NewNoteProps) {
  return (
    <>
      <p className="mb-4">New Note</p>
      <NoteForm onSubmit={onSubmit} />
    </>
  );
}

export default NewNote;
