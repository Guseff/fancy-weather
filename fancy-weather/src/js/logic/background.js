export const refreshMainBkg = async (param) => {
  const url = `https://api.unsplash.com/photos/random?query=${param}&client_id=815f63d5d22a8ed200eb8373a87a4b33a961730a7afd018ff55b4d9b84a43457`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    document.body.style.backgroundImage = `url(${data.urls.small})`;
  } catch (err) {
    
  }
}
