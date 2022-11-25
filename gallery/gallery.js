const data = [
    {
        "image": "https://www.weddingchicks.com/wp-content/uploads/2021/10/gentux-1.jpg",
        "name": "Hello",
        "comment": "Hello World"
    },
    {
        "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/img-3462-1-1576693070.jpg",
        "name": "Happy",
        "comment": "Happy World"
    },
    {
        "image": "https://images.squarespace-cdn.com/content/v1/5babda31bfba3e6a8c8d2b94/1600899240073-VF1VYFXNILCCNE7BW9ZX/PEI+Wedding+Photographer-8033.jpg?format=1000w",
        "name": "Free",
        "comment": "Free World"
    },
];

var myImage = document.getElementById('mainImage')
var imageIndex = 1;

function changeImage(){
myImage.setAttribute("src", data[imageIndex].image)

document.getElementById("mainName").innerHTML = JSON.stringify(data[imageIndex].name);
document.getElementById("mainComment").innerHTML = JSON.stringify(data[imageIndex].comment);

imageIndex++;
if (imageIndex > 2 ){
 imageIndex = 0;
}
}