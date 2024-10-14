import React, { useEffect, useState } from 'react';
import { app, db } from '../../firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import './FeedbackViewer.css';


function FeedbackViewer() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {

    
    const fetchFeedbacks = async () => {
      const feedbackCollection = collection(db, 'feedback');
      const querySnapshot = await getDocs(feedbackCollection);
      const feedbackData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedback(feedbackData);
    };
    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h2>Feedback</h2>
      <table>
        <thead>
          <tr>
            <th>Comment</th>
            <th>Rating</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {feedback.map((item) => (
            <tr key={item.id}>
              <td>{item.comment}</td>
              <td>
                {item.thumbs === 'up' ? '👍' : item.thumbs === 'down' ? '👎' : ''}
              </td>
              <td>
                {new Date(item.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackViewer;