import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


function Feedback() {
  const [comment, setComment] = useState('');
  const [thumbs, setThumbs] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleThumbs = async (type) => {
    try {
      setThumbs(type);
      await addDoc(collection(db, 'feedback'), {
        thumbs: type,
        timestamp: Date.now(),
      });
      setSuccessMessage(`Thank you for your feedback!`);
      setTimeout(() => setSuccessMessage(''), 2000); 
    } catch (error) {
      setErrorMessage('Failed to register your thumbs feedback.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'feedback'), {
        comment,
        timestamp: Date.now(),
      });
      setSuccessMessage('Your comment has been submitted successfully!');
      setComment(''); 
      setTimeout(() => setSuccessMessage(''), 2000);
    } catch (error) {
      setErrorMessage('Failed to submit your comment.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment"
          required
        />
        <br />
        <div>
          <button type="button" onClick={() => handleThumbs('up')}>
            👍
          </button>
          <button type="button" onClick={() => handleThumbs('down')}>
            👎
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default Feedback;