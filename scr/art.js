async function getImage(artista, cancion)
{
  await albumArt( artista, {album: cancion, size: 'large'}, ( error, response ) => {
    document.getElementById('art').src = response;
  })
}

getImage('camilo sexto', 'libre');
