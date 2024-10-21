// run tsc FlickrTestAPI.ts to conver to js
// run node FlickrTestAPI.js to execute js file
async function getImages(apiKey, tag, text, pages) {
    try {
        for(let j = 1; j <= pages; j ++) {
            const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&text=${text}&page=${j}&format=json&nojsoncallback=1`);
            const data = await res.json();
            const images = data.photos.photo;
            for(let i = 0; i < images.length; i ++) {
                const image = images[i];
                const imageURL = `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`;
                const img = document.createElement("img");
                img.src = imageURL;
                img.alt = image.title;

                const flickrLink = `https://www.flickr.com/photos/${image.owner}/${image.id}`;
                const a= document.createElement("a");
                a.href = flickrLink;
                a.target = "_blank";
                a.appendChild(img);

                document.getElementById("EarthDiary")!.appendChild(a);
            }
        }
    } catch (error) {
        console.log();
    }
};

async function getMetaData(apiKey, imageID) {
    try {
        const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${apiKey}&photo_id=${imageID}&format=json&nojsoncallback=1`);
        const data = await res.json();
        console.log("Metadata");
        console.log("Title: " + (data.photo.title?._content ? data.photo.title._content : undefined));
        console.log("Description: " + (data.photo.description?._content ? data.photo.description._content : undefined));
        console.log("Date Taken: " + (data.photo.dates?.taken ? data.photo.dates.taken : undefined));
        console.log("Location (latitude, longitude): (" + (data.photo.location?.latitude ?  data.photo.location.latitude : undefined) +
        ", " + (data.photo.location?.longitude ? data.photo.location.longitude : undefined) + ")");
        console.log("Country: " + (data.photo.location?.country._content ? data.photo.location.country._content : undefined));
        console.log("Region: " + (data.photo.location?.region._content ? data.photo.location.region._content : undefined));
        console.log("");
    } catch (error) {
        console.log("Error fetching metadata: " + error);
    }
}

getImages("0f56c63a41232cffabc80dd3f090a95d", "", "women_in_science", 100);
// getMetaData("0f56c63a41232cffabc80dd3f090a95d", "54023109266");
// getMetaData("0f56c63a41232cffabc80dd3f090a95d", "54027804603");