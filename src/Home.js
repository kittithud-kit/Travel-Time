import React from "react";
import LayoutPage from "./Navbar/LayoutPage";
import "./Home.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function PageHome() {
  return (
    <LayoutPage>
      <header>
        <div class="containerweb">
          <h1>Welcome to Travel</h1>
          <p>
            Better to see something once than hear about it a thousand times.
            Travel becomes a strategy for accumulating photographs. A journey is
            best measured in friends, rather than miles. Don’t be a tourist, be
            a traveler. The biggest adventure you can take is to live the life
            of your dreams. Live with no excuses and travel with no regrets.
            Life is short and the world is wide. I better get started.
          </p>
          <a href="#">about</a>
        </div>
      </header>
      <div class="detail1">
        <h2 class="grid-1">
          โลกใบนี้เต็มไปด้วยสิ่งมหัศจรรย์มากมาย
          ถ้าหากคุณออกเดินทางไกลพอที่จะมองเห็นมัน
        </h2>
        <iframe
          className="iframe1"
          src="https://script.google.com/macros/s/AKfycbyB_nqfI_bMHzp6QFKBR-UWvqiy70c_pMhsjnhywcYxP_4_-uKLP5MppMKEn7QBz4-8/exec"
        ></iframe>
      </div>
      <div class="detail1">
        <iframe
          className="iframe1"
          src="https://script.google.com/macros/s/AKfycbwAYIq8GfcWBv5xcN3pvyiKW9UA8x64kD5osKdjPzLUTwfHWSLQnM_yGsjczak8VBbX/exec"
        ></iframe>
        <h2 class="grid-1">
          ช่วงเวลาที่มักจะทำให้เราเผลอตกหลุมรักได้ง่ายสุด คือ ตอนออกเดินทาง
        </h2>
      </div>
      <div className="card1">
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image="card1.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                เทศกาลปีใหม่
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ทริปล่องเรือโทงบนเกาะล้าน Kholarn Voyage
                นั่งเรือไม้สุดหรูแบบส่วนตัว
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image="card2.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                เทศกาลตรุษจีน
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ทริปกางเต็นท์บ้านเล็กในป่าใหญ่ อช.ดอยผ้าห่มปก แวะกิน
                เที่ยวชิลล์ๆ เมืองฝาง 2 วัน 1 คืน
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image="card3.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                เทศกาลวาเลนไทน์
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ทริปนั่งรถไฟไปเกาะล้าน 2 วัน 1 คืน งบ 2,500 เที่ยวได้สบาย!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="400"
              image="card4.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                เทศกาลสงกรานต์
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ทริปราชบุรี 2 วัน 1 คืน ลองอะไรใหม่ๆ
                เปิดพิกัดที่เที่ยวสุดว้าวที่ต้องมาตาม!
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
    </LayoutPage>
  );
}

export default PageHome;
