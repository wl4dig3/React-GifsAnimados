export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Efxth7ATIGdGaPRg8BNTslcEuQGRLG8v&q=valorant${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()
    console.log(data);
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    // console.log('qui:',gifs);
    return gifs;
}