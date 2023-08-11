import Image from "next/image";

export default function Home() {
  const fetchData = async () => {
    const response = await fetch("/api/getAirtableData");
    const data = await response.json();
    console.log(data);
  };

  fetchData();

  return <main></main>;
}
