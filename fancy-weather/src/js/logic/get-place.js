export const getPlace = async () => {
  const url = `http://ipinfo.io?token=f37edba9afa8ce`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    
  }
}