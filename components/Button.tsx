'use client';

function Button() {
    const handleClick = () => {
        console.log("hello");
    }
  return <button onClick={handleClick} className="p-4 bg-red-400">Hello</button>;
}

export default Button;
