const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((fw, i) => (
    <li key={i}>{fw}</li>
  ));
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}
