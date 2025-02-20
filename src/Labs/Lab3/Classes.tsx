import './Classes.css';

export default function Classes() {
  const color = 'blue'; // Can be dynamically set
  const dangerous = true; // Change to false to test green background

  return (
    <div id="wd-classes">
      <h2>Classes</h2>

      {/* Conditional class based on the dangerous variable */}
      <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'} wd-fg-black wd-padding-10px`}>
        Dangerous background
      </div>

      {/* Dynamic class based on color variable */}
      <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        Dynamic {color.charAt(0).toUpperCase() + color.slice(1)} background
      </div>

      {/* Static class examples */}
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Yellow background
      </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Blue background
      </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Red background
      </div>

      <hr />
    </div>
  );
}
