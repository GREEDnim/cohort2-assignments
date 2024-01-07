export async function getAllCards(){

    const res=await fetch("http://localhost:3000/")
    const data=await res.json();
    return data;
}