function HistoryView(props) {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>History of Verified Messages</h2>
      {props.verifiedMessages.length === 0 ? (
        <p>No messages to display.</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {props.verifiedMessages.map((message, index) => (
            <li
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <p>
                <strong>Question:</strong> {message.question}
              </p>
              <p>
                <strong>Answer:</strong> {message.answer}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryView;
