import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useState ,useEffect} from "react";

import { useNavigate ,useParams} from "react-router-dom";



function Editbook() {
  const { id } = useParams();
  const [ book, setBook] = useState(null);
  useEffect(() => {
    fetch(`https://mern-bookstore-serv.herokuapp.com/books/${id}`)
      .then((data) => data.json())
      .then((mv) => setBook(mv));
  }, [ id ]);


  return (
    <div>
      {/* <pre>{JSON.stringify(book,null,2)}</pre> */}
      {book ? <EditBookForm book={book} /> : "Loading...."}
    </div>
  );
}
function EditBookForm({book }) {
  const [ name, setName ] = useState(book.name);
  const [ author, setAuthor ] = useState(book.author);
  const [ description, setDescription ] = useState(book.description);
  const [ price, setPrice ] = useState(book.price);
  const [ image, setImage ] = useState(book.image);
  const navigate = useNavigate();
  const editbook = () => {
    const updatedbook = {
      name,
      author,
      description,
      price,
      image
    };

    console.log(updatedbook);
    fetch(`https://mern-book-store-serv.herokuapp.com/books/${book.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedbook),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/books"));

    
  };
  return (
    <div>
      <div className="add-book-form">
        <TextField
          onChange={(event) => setName(event.target.value)}
                  label="Name" variant="outlined" value={name} />
              <TextField
          onChange={(event) => setAuthor(event.target.value)}
          label="Author" variant="outlined" value={author} />
        <TextField/>
        <TextField
          onChange={(event) => setDescription(event.target.value)}
          label="Description" variant="outlined" value={description} />
        <TextField
          onChange={(event) => setPrice(event.target.value)}
          label="Price" variant="outlined" value={price} />
        <TextField
          onChange={(event) => setImage(event.target.value)}
          label="Image" variant="outlined" value={image} />
        <Button
          onClick={editbook}
          variant="contained"
        >Save</Button>
      </div>

    </div>
  );

}
 export default Editbook;