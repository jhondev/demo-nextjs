import { useRouter } from "next/router";

const NotesDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Notes detail for {id}</div>;
};

export default NotesDetail;
