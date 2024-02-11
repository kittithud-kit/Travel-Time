const travels = [
  {
    title: "วิหารพาร์เธนอน",
    thumbnaiUrl: "/image/travel1-small.jpg",
    fullUrl: "/image/travel1-large.jpg",
  },
  {
    title: "อยชวานสไตน์",
    thumbnaiUrl: "/image/travel2-small.jpg",
    fullUrl: "/image/travel2-large.jpg",
  },
  {
    title: "บิ๊กเบน",
    thumbnaiUrl: "/image/travel3-small.jpg",
    fullUrl: "/image/travel3-large.jpg",
  },
  {
    title: "ภูเขาไฟฟูจิ",
    thumbnaiUrl: "/image/travel4-small.jpg",
    fullUrl: "/image/travel4-large.jpg",
  },
  {
    title: "สโตนเฮนจ์",
    thumbnaiUrl: "/image/travel5-small.jpg",
    fullUrl: "/image/travel5-large.jpg",
  },
  {
    title: "กัวลาลัมเปอร์",
    thumbnaiUrl: "/image/travel6-small.jpg",
    fullUrl: "/image/travel6-large.jpg",
  },
  {
    title: "เบอร์ลิน",
    thumbnaiUrl: "/image/travel7-small.jpg",
    fullUrl: "/image/travel7-large.jpg",
  },
  {
    title: "น้ำพุเทรวี่",
    thumbnaiUrl: "/image/travel8-small.jpg",
    fullUrl: "/image/travel8-large.jpg",
  },
  {
    title: "ซิซิลี",
    thumbnaiUrl: "/image/travel9-small.jpg",
    fullUrl: "/image/travel9-large.jpg",
  },
  {
    title: "หอไอเฟล",
    thumbnaiUrl: "/image/travel10-small.jpg",
    fullUrl: "/image/travel10-large.jpg",
  },
  {
    title: "โบสถ์เฮอร์คูเลส",
    thumbnaiUrl: "/image/travel11-small.jpg",
    fullUrl: "/image/travel11-large.jpg",
  },
  {
    title: "สะพานโกลเดนเกต",
    thumbnaiUrl: "/image/travel12-small.jpg",
    fullUrl: "/image/travel12-large.jpg",
  },
  {
    title: "ฮังการี",
    thumbnaiUrl: "/image/travel13-small.jpg",
    fullUrl: "/image/travel13-large.jpg",
  },
  {
    title: "อิสตันบูล",
    thumbnaiUrl: "/image/travel14-small.jpg",
    fullUrl: "/image/travel14-large.jpg",
  },
  {
    title: "เดรสเดน",
    thumbnaiUrl: "/image/travel15-small.jpg",
    fullUrl: "/image/travel15-large.jpg",
  },
  {
    title: "ฟรอยเดนแบร์ก",
    thumbnaiUrl: "/image/travel16-small.jpg",
    fullUrl: "/image/travel16-large.jpg",
  },
  {
    title: "เสม็ดนางชี",
    thumbnaiUrl: "/image/travel17-small.jpg",
    fullUrl: "/image/travel17-large.jpg",
  },
  {
    title: "บานาฮิลล์",
    thumbnaiUrl: "/image/travel18-small.jpg",
    fullUrl: "/image/travel18-large.jpg",
  },
];

export default travels;

travels.forEach((place) => {
  console.log("Title:", place.title);
  console.log("Thumbnai URL:", place.thumbnaiUrl);
  console.log("Full URL:", place.fullUrl);
  console.log("\n");
});
