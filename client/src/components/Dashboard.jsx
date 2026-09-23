function Dashboard() {
  const sampleFeedback = [
    { id: 1, text: 'Great service, very responsive!' },
    { id: 2, text: 'Delivery was delayed by two days.' },
    { id: 3, text: 'App crashes when uploading files.' },
  ];

  return (
    <section>
      <h2>Recent Feedback</h2>
      <ul>
        {sampleFeedback.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </section>
  );
}

export default Dashboard;