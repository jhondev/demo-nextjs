import Link from "next/link";
import { useRouter } from "next/router";

const notes = () => {
  const router = useRouter();

  const testId = "button-detail-id";
  const NoteIds = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      Hello from notes
      <ul>
        {NoteIds.map((note) => (
          <li key={note}>
            <Link href={`/notes/${note}`}>
              <a> Note {note} Detail</a>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => router.push(`/notes/${testId}`)}>
        Button note detail
      </button>
      {/* <p>
        Go to detail here
        <Link href={`/notes/${testId}`}>Detail</Link>
        <Link href="/notes/note-id">
          <a>Detail</a>
        </Link>
        <a href="/notes/note-id">Detail</a>
      </p> */}
    </div>
  );
};

export default notes;
